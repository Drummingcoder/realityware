# Realityware Repository - File Structure & Architecture

This document explains the file structure of the Realityware repository and how the application works.

## Overview

Realityware is a **Next.js 16** web application built with **TypeScript** and **React 19**. It's designed for the "Your System Works Summer" (YSWS) program - a hackathon-style event where participants ship solutions to societal problems and receive grants to build them.

The app uses a **hybrid routing approach**, combining Next.js App Router (modern) and Pages Router (legacy) to support different sections of the application.

## Project Structure

```
realityware/
├── public/              # Static assets (images, SVGs, icons)
├── src/                 # Source code
│   ├── app/            # App Router pages (Next.js 13+)
│   ├── components/     # Reusable React components
│   └── pages/          # Pages Router (legacy/landing page)
├── Configuration files
└── Build artifacts
```

## Detailed File Structure

### `/public` - Static Assets
Static files that are served directly by the web server.

```
public/
├── file.svg                 # File icon
├── flag-orpheus-top.png    # Hack Club Orpheus flag decoration
├── globe.svg               # Globe icon (default project banner)
├── hackclublogo.png        # Hack Club logo
├── next.svg                # Next.js logo
├── vercel.svg              # Vercel logo
└── window.svg              # Window icon
```

**Purpose:** These files are accessible at the root URL path (e.g., `/globe.svg`).

### `/src` - Source Code

#### `/src/app` - App Router (Next.js 13+ Modern Routing)

The main application using Next.js App Router with client-side interactivity.

```
src/app/
├── layout.tsx          # Root layout - wraps all pages
├── globals.css         # Global styles (Tailwind CSS)
├── favicon.ico         # Browser tab icon
├── not-found.tsx       # 404 error page
├── gallery/            # Gallery page - view all projects
│   ├── page.tsx
│   └── GalleryCard.tsx
├── hub/                # Hub page - team stats & member info
│   └── page.tsx
└── projects/           # Projects page - create/manage projects
    └── page.tsx
```

**Key Files:**

- **`layout.tsx`**: Root layout component that wraps all App Router pages
  - Loads Google Fonts (Geist Sans, Geist Mono)
  - Includes `SidebarNav` for navigation
  - Wraps content with `NotificationProvider` for app-wide notifications
  - Sets up the two-column layout (sidebar + main content)

- **`globals.css`**: Global CSS file with Tailwind CSS directives and custom styles

- **`gallery/page.tsx`**: Displays a grid of project cards
  - Shows placeholder projects with images
  - Uses `GalleryCard` component for each project
  - Displays project info: name, description, people working, followers

- **`hub/page.tsx`**: Team dashboard
  - **Team Stats**: hours worked, commits, additions, deletions
  - **Team Members**: list with online/offline status indicators
  - **Projects**: team's projects with links to pages and repos

- **`projects/page.tsx`**: Project management interface
  - Create new projects with modal form
  - Edit existing projects
  - Upload banner images
  - Add project description, collaborators, GitHub link
  - Uses markdown editor (SimpleMDE) for rich descriptions
  - Client-side only ("use client" directive)

#### `/src/components` - Reusable Components

Shared React components used across the application.

```
src/components/
├── SidebarNav.tsx              # Main navigation sidebar
└── NotificationManager.tsx     # Toast notification system
```

**Key Components:**

- **`SidebarNav.tsx`**: Navigation sidebar
  - Links to: Hub, Gallery, Projects, Voting, Store, World
  - Highlights active page
  - Shows user profile section at bottom
  - Custom SVG icons for each nav item

- **`NotificationManager.tsx`**: Notification/toast system
  - Provides `NotificationProvider` context
  - `useNotification()` hook for showing notifications
  - Supports success/error/info notification types
  - Used throughout the app for user feedback

#### `/src/pages` - Pages Router (Legacy)

Traditional Next.js pages routing for the landing page.

```
src/pages/
├── _app.tsx     # Custom App component
└── index.tsx    # Landing page (home)
```

**Key Files:**

- **`_app.tsx`**: Custom App component
  - Wraps all Pages Router pages
  - Imports global CSS
  - Minimal configuration (just passes through Component and pageProps)

- **`index.tsx`**: Landing page/homepage
  - **NOT shown when logged in** (to be implemented)
  - Explains the YSWS program
  - 5-step process: Idea → Build → BOM → (Optional: PCB) → Ship → Use grant
  - FAQ section with expandable questions
  - Sticky header on scroll
  - Links to RSVP (gallery page)
  - Built with extensive custom styling (viewport-based units)

### Configuration Files

#### `package.json` - Project Dependencies

```json
{
  "dependencies": {
    "color-thief-react": "^2.1.0",      // Extract colors from images
    "easymde": "^2.20.0",               // Markdown editor
    "next": "16.0.10",                   // Next.js framework
    "react": "19.2.0",                   // React library
    "react-dom": "19.2.0",               // React DOM renderer
    "react-simplemde-editor": "^5.2.0"   // React wrapper for SimpleMDE
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",        // Tailwind CSS v4
    "typescript": "^5",                   // TypeScript
    "eslint": "^9"                        // Linting
  }
}
```

**Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

#### `next.config.ts` - Next.js Configuration

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      // Allowed external image domains
      { hostname: 'i.pinimg.com' },
      { hostname: 'encrypted-tbn0.gstatic.com' },
      { hostname: 'cdn.pfps.gg' },
      { hostname: 'static.wikia.nocookie.net' }
    ]
  }
};
```

**Purpose:** Configures Next.js to allow loading images from external domains.

#### `tsconfig.json` - TypeScript Configuration

Key settings:
- **Target:** ES2017
- **Module:** ESNext with bundler resolution
- **JSX:** react-jsx (React 17+ transform)
- **Path alias:** `@/*` maps to `./src/*`
- **Strict mode:** Enabled for type safety

#### `tailwind.config.ts` - Tailwind CSS Configuration

Configures the Tailwind CSS framework (details not shown in view, but present).

#### `postcss.config.mjs` - PostCSS Configuration

Processes CSS with Tailwind CSS (using Tailwind CSS v4).

#### `eslint.config.mjs` - ESLint Configuration

Linting rules for code quality.

### Build Artifacts & Dependencies

- **`.next/`**: Next.js build output (generated, not committed)
- **`node_modules/`**: npm dependencies (not committed)
- **`package-lock.json`**: Locked dependency versions
- **`bun.lock`**: Bun package manager lockfile (alternative to npm)

## Architecture & How It Works

### 1. Routing System (Hybrid Approach)

The app uses **both** Next.js routing systems:

**Pages Router** (`/src/pages`):
- Landing page at `/` (index.tsx)
- Traditional Next.js routing
- Server-side rendering by default
- Used for the public-facing homepage

**App Router** (`/src/app`):
- Modern Next.js 13+ routing
- All authenticated/app pages: `/hub`, `/gallery`, `/projects`
- Layout nesting with `layout.tsx`
- Better component organization
- Client components marked with `"use client"`

### 2. Layout & Navigation

**Root Layout** (`src/app/layout.tsx`):
```
┌─────────────────────────────────────┐
│  NotificationProvider               │
│  ┌───────────┬──────────────────┐   │
│  │ Sidebar   │  Main Content    │   │
│  │ Nav       │  (pages)         │   │
│  │           │                  │   │
│  │ - Hub     │  {children}      │   │
│  │ - Gallery │                  │   │
│  │ - Projects│                  │   │
│  │ - Voting  │                  │   │
│  │ - Store   │                  │   │
│  │ - World   │                  │   │
│  │           │                  │   │
│  │ Profile   │                  │   │
│  └───────────┴──────────────────┘   │
└─────────────────────────────────────┘
```

### 3. State Management

**Local Component State:**
- React `useState` hooks for component-level state
- Modal state, form inputs, UI toggles

**Context API:**
- `NotificationProvider`: Global notification system
- Allows any component to trigger toast notifications

**No Global State Library:**
- App doesn't use Redux, Zustand, or other state management
- Keeps it simple with React's built-in tools

### 4. Styling Approach

**Tailwind CSS:**
- Utility-first CSS framework
- Configured in `tailwind.config.ts`
- Custom colors: `primary`, `secondary`, `accent`, `neutral`, `foreground`, `background`
- Responsive design with breakpoints (md, lg)

**Custom CSS:**
- Viewport-based units (vw, vh) for responsive sizing
- Custom animations (fade in/out, bounce, tooltips)
- Scoped styles with `<style jsx>` in components

### 5. Data Flow

**Current State (Placeholder Data):**
- All data is hardcoded in components
- Arrays of objects for projects, team members, etc.
- No backend/database yet

**Future Implementation:**
- Will need API routes or external backend
- Database for projects, users, teams
- Authentication system (mentioned Slack sign-in)

### 6. Key Features

**Gallery** (`/gallery`):
- Browse all participant projects
- Grid layout of project cards
- Shows: image, name, description, stats

**Hub** (`/hub`):
- Team dashboard
- View team statistics (hours, commits, code changes)
- See team members (online/offline status)
- Quick access to team projects

**Projects** (`/projects`):
- Create new projects
- Edit existing projects
- Upload banner images (local preview)
- Add collaborators (searchable dropdown)
- Markdown editor for descriptions
- Form validation with notifications

## Development Workflow

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

### File Modification Guide

**To add a new page:**
1. Create `src/app/[page-name]/page.tsx`
2. Add route to `SidebarNav.tsx`
3. Create component with `export default function PageName()`

**To add a new component:**
1. Create file in `src/components/[ComponentName].tsx`
2. Export component: `export default function ComponentName()`
3. Import where needed: `import ComponentName from '@/components/ComponentName'`

**To modify styles:**
- Use Tailwind classes directly in JSX
- Add custom CSS to `globals.css`
- Use inline `<style jsx>` for component-specific styles

**To add dependencies:**
```bash
npm install [package-name]
```

## Technology Stack

- **Framework:** Next.js 16.0.10
- **Language:** TypeScript 5
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS v4
- **Build Tool:** Next.js (uses Turbopack in dev)
- **Package Manager:** npm or bun
- **Linting:** ESLint 9 with next config
- **Markdown Editor:** SimpleMDE/EasyMDE
- **Image Processing:** color-thief-react

## Notes & Future Work

### Current Limitations
- **No Backend:** All data is client-side placeholder data
- **No Authentication:** Slack sign-in mentioned but not implemented
- **No Database:** Projects/teams not persisted
- **Incomplete Routes:** `/voting`, `/store`, `/world`, `/profile` don't exist yet

### Planned Features (from comments)
- User authentication (Slack OAuth)
- Hide landing page when logged in
- City/team assignment system
- Scenario challenges for points
- Real project data persistence
- Individual project pages (`/projects/[id]`)

### Development Notes
- Developers use both npm and bun (lockfiles for both)
- Some placeholder content (FAQ, team data)
- Comments indicate active development
- Built by Hack Club community members

## Contributing

When working on this project:
1. Check existing components before creating new ones
2. Follow TypeScript strict mode
3. Use Tailwind utilities for styling
4. Add proper error handling with notifications
5. Keep components focused and reusable
6. Test responsive design (mobile, tablet, desktop)

## Links & Resources

- **Hack Club:** https://hackclub.com/
- **Slack Community:** https://hackclub.com/slack/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
