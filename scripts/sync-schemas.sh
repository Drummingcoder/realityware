#!/bin/bash
# Sync database schemas between Prisma and Diesel
# Usage: ./scripts/sync-schemas.sh [prisma|diesel]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Database Schema Sync Tool${NC}"
echo "================================"

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo -e "${RED}Error: DATABASE_URL environment variable not set${NC}"
    echo "Please create a .env file or export DATABASE_URL"
    exit 1
fi

MODE=${1:-prisma}

if [ "$MODE" == "prisma" ]; then
    echo -e "${YELLOW}Mode: Prisma → Diesel${NC}"
    echo "Using Prisma as source of truth"
    echo ""
    
    # Step 1: Apply Prisma migrations
    echo "1. Applying Prisma migrations..."
    cd "$PROJECT_ROOT/packages/db"
    npx prisma migrate deploy || npx prisma migrate dev
    
    # Step 2: Generate Diesel schema from database
    echo ""
    echo "2. Generating Diesel schema from database..."
    cd "$PROJECT_ROOT/apps/backend"
    diesel print-schema > src/db/schema.rs
    
    echo -e "${GREEN}✓ Schemas synced: Prisma → Database → Diesel${NC}"
    echo ""
    echo "Next steps:"
    echo "  - Review the generated schema at apps/backend/src/db/schema.rs"
    echo "  - Update Diesel models if needed at apps/backend/src/db/models.rs"
    
elif [ "$MODE" == "diesel" ]; then
    echo -e "${YELLOW}Mode: Diesel → Prisma${NC}"
    echo "Using Diesel as source of truth"
    echo ""
    
    # Step 1: Apply Diesel migrations
    echo "1. Applying Diesel migrations..."
    cd "$PROJECT_ROOT/apps/backend"
    diesel migration run
    
    # Step 2: Pull schema into Prisma
    echo ""
    echo "2. Pulling database schema into Prisma..."
    cd "$PROJECT_ROOT/packages/db"
    npx prisma db pull
    npx prisma generate
    
    echo -e "${GREEN}✓ Schemas synced: Diesel → Database → Prisma${NC}"
    echo ""
    echo "Next steps:"
    echo "  - Review the updated schema at packages/db/schema.prisma"
    echo "  - Verify Prisma models match your expectations"
    
else
    echo -e "${RED}Error: Invalid mode '$MODE'${NC}"
    echo "Usage: $0 [prisma|diesel]"
    echo ""
    echo "  prisma  - Use Prisma as source of truth (recommended)"
    echo "  diesel  - Use Diesel as source of truth"
    exit 1
fi

echo ""
echo -e "${GREEN}Done!${NC}"
