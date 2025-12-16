This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Reality Ware Monorepo

A modern monorepo combining a Rust + Rocket backend with a Next.js + Turbopack frontend, managed with Bun.

## 📁 Structure

```
realityware/
├── apps/
│   ├── backend/        # Rust + Rocket API server
│   │   ├── src/
│   │   ├── migrations/
│   │   ├── Cargo.toml
│   │   └── Rocket.toml
│   └── web/            # Next.js 16 + Turbopack frontend
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── next.config.ts
├── package.json        # Root workspace
├── bunfig.toml         # Bun configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Bun** 1.0.0+ ([Install](https://bun.sh))
- **Rust** 1.70+ ([Install](https://rustup.rs))
- **PostgreSQL** (for the database)

### Installation

1. Install dependencies:
   ```bash
   bun install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. Set up the database:
   ```bash
   cd apps/backend
   diesel setup
   diesel migration run
   ```

## 🏃 Development

Run both frontend and backend in separate terminals:

**Terminal 1 - Frontend (Turbopack dev server):**
```bash
bun dev:web
```

**Terminal 2 - Backend (Rocket dev server):**
```bash
bun dev:backend
```

The frontend will be available at `http://localhost:3000`  
The backend will be available at `http://localhost:8000`

## 🔨 Building

Build both applications:
```bash
bun build
```

Or build individually:
```bash
bun build:web      # Build Next.js app
bun build:backend  # Build Rust binary
```

## 📦 Frontend Scripts

```bash
bun dev:web        # Start Turbopack dev server
bun build:web      # Build production bundle
bun start:web      # Start Next.js production server
bun lint:web       # Run ESLint
bun type-check:web # Run TypeScript type checking
```

## 🛠️ Backend Scripts

```bash
bun dev:backend    # Run Rocket dev server
bun build:backend  # Build optimized Rust binary
```

## 📚 Tech Stack

### Frontend
- **Next.js 16** - React framework with server components
- **Turbopack** - Next-generation bundler (default in Next.js 16)
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing

### Backend
- **Rust** - Systems programming language
- **Rocket** - Web framework
- **Diesel** - ORM and query builder
- **PostgreSQL** - Database

### Development & Package Management
- **Bun** - Fast all-in-one JavaScript runtime
- **ESLint** - JavaScript linting
- **Tailwind CSS** - Styling

## 🔗 API Integration

The frontend automatically proxies requests to `/api/*` to the backend. Configure the API URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 📝 Environment Variables

See [.env.example](.env.example) for all available configuration options.

## 🐛 Troubleshooting

### Bun install fails
```bash
bun install --force
```

### Database connection issues
Ensure PostgreSQL is running and the `DATABASE_URL` in `.env.local` is correct.

### Port already in use
Change the port in `apps/backend/Rocket.toml` or `apps/web/.env.local`.

## 📄 License

TBD
