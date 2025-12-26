# Realityware

This is the site for the Realityware YSWS event (upcoming). The premise is easy: Submit a hardware project that benefits society in some way, and win a grant to build it with a chance at more prizes!

## About the Website
Realityware uses Next.js for the frontend and the lighter parts of the backend and Rust for the intensive parts of the backend.

For the database: Realityware uses a hybrid stack where both frontend and backend share the same PostgreSQL database:

```
Next.js (Prisma) ──▶ PostgreSQL ◀── Rocket (Diesel)
   TypeScript           Database         Rust
```

Both front and backend are connected to the same database and are synced using the scripts in the scripts folder.

## Development - Getting Started

### 1. Prerequisites

```bash
# Install Bun (if not installed)
curl -fsSL https://bun.sh/install | bash

# Install Rust and Cargo (if not installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Then restart your shell or run: source $HOME/.cargo/env

# Install PostgreSQL client libraries (required for Diesel CLI)
sudo apt update
sudo apt install postgresql-client libpq-dev

# Install Diesel CLI
cargo install diesel_cli --no-default-features --features postgres

# Install the full Postgre if you run into trouble: sudo apt install postgresql postgresql-contrib
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Set Up Environment
First, make a copy of .env.example in the root folder in the same location and rename it 
.env (it will be gitignored).

Second, if you're working on backend (or need to run it), go to the apps/backend folder and make a copy of the Rocket.toml.example and rename it Rocket.toml (again, it will be gitignored). Fill in the client_id, client_secret, and secret_key with the values from the previous file (the .env file).

Third (again, if you're working on or setting up the backend), navigate to the .cargo folder (apps/backend/.cargo) and make a copy of the config.toml.example and rename it config.toml. Be sure to follow the instructions in there.

### 4. Database Setup
Fill in the OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, and ROCKET_SECRET_KEY before starting the next steps. (the OAUTH here is coming from the Hack Club Auth, DM me (@Shadowlight) if you need the OAUTH stuff and don't want to get it yourself).

**Start up PostgreSQL:**
```bash
docker run -d --name realityware-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=dev \
  -p 5433:5432 postgres:15
```

(If you need to restart it, use 
```bash
docker restart realityware-postgres
```)

Or if PostgreSQL is running elsewhere, edit `.env`:
```bash
DATABASE_URL="postgresql://user:pass@host:port/dbname"
```

Then run this script to set up the Prisma and Diesel databases (ensure that you're in the root directory):

```bash
./scripts/setup-database.sh
```

This script will:
1. Create `.env` from template (if needed)
2. Check PostgreSQL connection
3. Run Prisma migrations
4. Generate Diesel schema from database
5. Verify both ORMs can connect

### 5. Run Development
**Full Web App:**
```bash
# (from Root directory)
bun run build
bun run dev
```

**Frontend Setup**
```bash
# Terminal 1: Frontend (apps/web)
bun run build
bun dev
# → http://localhost:3000
```

**Backend Setup**
```bash
# Terminal 2: Backend  
cd apps/backend && cargo build
cargo run
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
./scripts/sync-schemas.sh diesel  # If Diesel is correct
```

## Troubleshooting

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
├── .env    # Database connection (both ORMs),
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

**Build Rust backend:**
```bash
cd apps/backend
cargo build --release
# Deploy binary to your hosting service
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

**Database:**
- Use managed PostgreSQL (AWS RDS, DigitalOcean, Railway, etc.)
- Set `DATABASE_URL` in production environment variables
- Run migrations: `npx prisma migrate deploy`