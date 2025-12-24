This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Architecture

Realityware uses a **hybrid stack** where both frontend and backend share the same PostgreSQL database:

```
Next.js (Prisma) ──▶ PostgreSQL ◀── Rocket (Diesel)
   TypeScript           Database         Rust
```

**Why both ORMs?**
- **Prisma**: Easy TypeScript integration, great DX, quick prototyping
- **Diesel**: High-performance Rust queries, compile-time safety, production backend
- **Shared Database**: Both connect to the same PostgreSQL instance via `DATABASE_URL`

## Quick Start

### 1. Prerequisites

```bash
# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Install Diesel CLI
cargo install diesel_cli --no-default-features --features postgres
```

### 2. Database Setup (One Command)

```bash
./scripts/setup-database.sh
```

This script will:
1. Create `.env` from template (if needed)
2. Check PostgreSQL connection
3. Run Prisma migrations
4. Generate Diesel schema from database
5. Verify both ORMs can connect

**If you need to start PostgreSQL:**
```bash
docker run -d --name realityware-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=dev \
  -p 5433:5432 postgres:15
```

Or if PostgreSQL is running elsewhere, edit `.env`:
```bash
DATABASE_URL="postgresql://user:pass@host:port/dbname"
```

### 3. Install Dependencies

```bash
bun install
```

### 4. Run Development

**Frontend (Next.js):**
```bash
# Terminal 1: Frontend
cd apps/web && bun dev
# → http://localhost:3000

# Terminal 2: Backend  
cd apps/backend && cargo run
# → http://localhost:8000
```

## Database Workflow

### How the Bridge Works

Both Prisma and Diesel connect to the **same PostgreSQL database**. When you make schema changes:

1. **Choose your tool** (Prisma recommended for easier workflow)
2. **Make changes** (edit schema or create migration)
3. **Apply migration** (updates PostgreSQL)
4. **Sync the other ORM** (regenerate schema from database)

```
Developer → Prisma/Diesel → PostgreSQL → Sync Script → Other ORM
```

### Adding a New Table

**Method 1: Using Prisma (Recommended)**

```bash
# 1. Edit packages/db/schema.prisma and add your model
# Example:
# model Comment {
#   id        String   @id @default(uuid()) @db.Uuid
#   content   String
#   authorId  String   @map("author_id") @db.Uuid
#   createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz
#   @@map("comments")
# }

# 2. Create and apply migration
cd packages/db
npx prisma migrate dev --name add_comments

# 3. Sync to Diesel
cd ../..
./scripts/sync-schemas.sh prisma

# 4. Update Diesel models in apps/backend/src/db/models.rs if needed
```

**Method 2: Using Diesel**

```bash
# 1. Create migration
cd apps/backend
diesel migration generate add_comments

# 2. Edit generated files in migrations/
# - up.sql: CREATE TABLE comments (...);
# - down.sql: DROP TABLE comments;

# 3. Apply migration
diesel migration run

# 4. Sync to Prisma
cd ../..
./scripts/sync-schemas.sh diesel
```

### Adding a Field

```bash
# Quick migration creator
./scripts/new-migration.sh "add_field_name" prisma
# or
./scripts/new-migration.sh "add_field_name" diesel

# Then follow the prompts to edit and apply
```

### Common Database Commands

```bash
# View/edit data in browser (Prisma Studio)
cd packages/db && npx prisma studio

# Check migration status
npx prisma migrate status          # Prisma
diesel migration list              # Diesel

# Connect with psql
psql $DATABASE_URL

# Reset database (⚠️ DELETES ALL DATA)
cd packages/db && npx prisma migrate reset

# Sync schemas after pulling changes
./scripts/sync-schemas.sh prisma
```

### Type Mappings

| PostgreSQL | Prisma | Diesel (Rust) |
|-----------|---------|---------------|
| UUID | `String @db.Uuid` | `Uuid` |
| TEXT | `String` | `String` |
| INTEGER | `Int` | `i32` |
| TIMESTAMPTZ | `DateTime` | `DateTime<Utc>` |
| BOOLEAN | `Boolean` | `bool` |
| UUID[] | `String[]` | `Vec<Uuid>` |

## Best Practices

✅ **Use Prisma as source of truth** - Easier workflow, better DX  
✅ **Always sync after migrations** - Run `./scripts/sync-schemas.sh`  
✅ **Commit migrations to git** - Track schema changes  
✅ **Test both ORMs** - Verify changes work on both sides  
✅ **Use transactions** - For multi-table writes  

❌ **Don't** run migrations from both tools without syncing  
❌ **Don't** manually edit both schemas independently  
❌ **Don't** use nullable UUID arrays (Diesel incompatibility)  

## Troubleshooting

**Schemas out of sync?**
```bash
./scripts/sync-schemas.sh prisma  # If Prisma is correct
./scripts/sync-schemas.sh diesel  # If Diesel is correct
```

**Can't connect to database?**
```bash
# Check connection
psql $DATABASE_URL -c "SELECT version();"

# Verify DATABASE_URL
echo $DATABASE_URL

# Restart PostgreSQL
docker restart realityware-postgres
```

**Migration conflicts?**
```bash
# See current state
npx prisma migrate status
diesel migration list

# Nuclear option (⚠️ deletes data)
cd packages/db
npx prisma migrate reset
npx prisma migrate deploy
```

## Project Structure

```
realityware/
├── .env                           # Database connection (both ORMs)
├── scripts/
│   ├── setup-database.sh         # One-command setup
│   ├── sync-schemas.sh           # Keep Prisma ↔ Diesel in sync
│   └── new-migration.sh          # Quick migration creator
├── packages/db/
│   ├── schema.prisma            # Prisma schema (source of truth)
│   └── prisma/migrations/       # SQL migrations
└── apps/backend/
    ├── migrations/              # Diesel migrations
    └── src/db/
        ├── schema.rs            # Generated from database
        └── models.rs            # Rust model definitions
```

---

## Additional Resources

### Learn Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Learn Rust & Rocket

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rocket Guide](https://rocket.rs/guide/)
- [Diesel ORM](https://diesel.rs/)

### Database Documentation

- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL Manual](https://www.postgresql.org/docs/)

## Deployment

**Vercel (Frontend):**
```bash
# Deploy Next.js app
cd apps/web
vercel deploy
```

- Run scripts with Bun:

```bash
bun run dev
bun run build
bun run start
bun run lint

# when database is implemented
bun run db:generate  # generates Prisma client
bun run db:push      # pushes schema to DB
```

You need to have PostgreSQL installed on your workspace beforehand

# Build Rust backend
cd apps/backend
cargo build --release
# Deploy binary to your hosting service
```

**Database:**
- Use managed PostgreSQL (AWS RDS, DigitalOcean, Railway, etc.)
- Set `DATABASE_URL` in production environment variables
- Run migrations: `npx prisma migrate deploy`