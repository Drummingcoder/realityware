# Realityware

A Next.js web application for the "Your System Works Summer" (YSWS) program - where participants ship solutions to societal problems and receive grants to build them!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📚 Documentation

**New to this project?** Check out [FILE_STRUCTURE.md](FILE_STRUCTURE.md) for a comprehensive explanation of:
- Repository file structure
- How the application architecture works
- Component organization
- Routing system (App Router + Pages Router)
- Development workflow and contributing guide

## Getting Started

NOTE FROM YOUSSEF:
- dont forget to "npm/bun install ."  :p

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/layout.tsx` or any page files. The page auto-updates as you edit the file.

This project uses:
- **React 19** and **Next.js 16** with TypeScript
- **Tailwind CSS v4** for styling
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel

## Project Structure

```
realityware/
├── public/          # Static assets (images, icons)
├── src/
│   ├── app/        # App Router pages (gallery, hub, projects)
│   ├── components/ # Reusable React components
│   └── pages/      # Pages Router (landing page)
└── Configuration files (Next.js, TypeScript, Tailwind)
```

For detailed information, see [FILE_STRUCTURE.md](FILE_STRUCTURE.md).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
