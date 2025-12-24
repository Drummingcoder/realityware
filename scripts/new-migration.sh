#!/bin/bash
# Quick migration creator
# Usage: ./scripts/new-migration.sh "add_something" [prisma|diesel]

set -e

NAME=$1
MODE=${2:-prisma}

if [ -z "$NAME" ]; then
    echo "Usage: $0 \"migration_name\" [prisma|diesel]"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

if [ "$MODE" == "prisma" ]; then
    cd "$PROJECT_ROOT/packages/db"
    echo "Creating Prisma migration: $NAME"
    npx prisma migrate dev --name "$NAME" --create-only
    echo ""
    echo "✓ Migration created!"
    echo "  Edit the migration in packages/db/prisma/migrations/"
    echo "  Then run: npx prisma migrate dev"
    echo "  Then sync: ./scripts/sync-schemas.sh prisma"
    
elif [ "$MODE" == "diesel" ]; then
    cd "$PROJECT_ROOT/apps/backend"
    echo "Creating Diesel migration: $NAME"
    diesel migration generate "$NAME"
    echo ""
    echo "✓ Migration created!"
    echo "  Edit up.sql and down.sql in apps/backend/migrations/"
    echo "  Then run: diesel migration run"
    echo "  Then sync: ./scripts/sync-schemas.sh diesel"
else
    echo "Error: Mode must be 'prisma' or 'diesel'"
    exit 1
fi
