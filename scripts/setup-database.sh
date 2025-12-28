#!/bin/bash
# Database setup script for Realityware
# This initializes the shared PostgreSQL database for both Prisma and Diesel

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Realityware Database Setup           ║${NC}"
echo -e "${BLUE}║  Prisma ↔ PostgreSQL ↔ Diesel         ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Load .env if it exists
if [ -f "$PROJECT_ROOT/.env" ]; then
    echo -e "${GREEN}✓ Loading environment from .env${NC}"
    export $(cat "$PROJECT_ROOT/.env" | grep -v '^#' | xargs)
else
    echo -e "${YELLOW}⚠ No .env file found${NC}"
    echo "Creating from .env.example..."
    if [ -f "$PROJECT_ROOT/.env.example" ]; then
        cp "$PROJECT_ROOT/.env.example" "$PROJECT_ROOT/.env"
        echo -e "${GREEN}✓ Created .env file${NC}"
        echo -e "${RED}! Please edit .env and set your DATABASE_URL${NC}"
        exit 1
    else
        echo -e "${RED}Error: No .env.example found${NC}"
        exit 1
    fi
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo -e "${RED}Error: DATABASE_URL not set in .env${NC}"
    exit 1
fi

echo -e "${GREEN}✓ DATABASE_URL: ${DATABASE_URL}${NC}"
echo ""

# Check if PostgreSQL is running
echo "Checking PostgreSQL connection..."
if psql "$DATABASE_URL" -c '\q' 2>/dev/null; then
    echo -e "${GREEN}✓ PostgreSQL is running${NC}"
else
    echo -e "${RED}✗ Cannot connect to PostgreSQL${NC}"
    echo ""
    echo "Start PostgreSQL with:"
    echo "  docker run -d --name realityware-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=dev -p 5433:5432 postgres:15"
    exit 1
fi

echo ""
echo "═══════════════════════════════════════"
echo "Step 1: Prisma Setup"
echo "═══════════════════════════════════════"
cd "$PROJECT_ROOT/packages/db"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing Prisma dependencies..."
    npm install
fi

# Run migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy || npx prisma migrate dev --name init

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

echo -e "${GREEN}✓ Prisma setup complete${NC}"

echo ""
echo "═══════════════════════════════════════"
echo "Step 2: Diesel Setup"
echo "═══════════════════════════════════════"
cd "$PROJECT_ROOT/apps/backend"

# Check if diesel_cli is installed
if ! command -v diesel &> /dev/null; then
    echo -e "${YELLOW}⚠ diesel_cli not found${NC}"
    echo "Installing diesel_cli..."
    cargo install diesel_cli --no-default-features --features postgres
fi

# Setup Diesel database
echo "Setting up Diesel database..."
diesel database setup || true

# Generate schema from current database
echo "Generating Diesel schema from database..."
diesel print-schema > src/db/schema.rs

echo -e "${GREEN}✓ Diesel setup complete${NC}"

echo ""
echo "═══════════════════════════════════════"
echo "Verification"
echo "═══════════════════════════════════════"

# Count tables
TABLE_COUNT=$(psql "$DATABASE_URL" -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';" | tr -d ' ')

echo -e "${GREEN}✓ Database has $TABLE_COUNT tables${NC}"

# List tables
echo ""
echo "Tables:"
psql "$DATABASE_URL" -c "\dt"

echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  Setup Complete! ✓                     ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo "Your database is ready to use with both:"
echo "  • Prisma (packages/db)"
echo "  • Diesel (apps/backend)"
echo ""
echo "Next steps:"
echo "  • Run Prisma Studio: cd packages/db && npx prisma studio"
echo "  • Start backend: cd apps/backend && cargo run"
echo "  • Start frontend: cd apps/web && npm run dev"
