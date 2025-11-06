import React from 'react';

/* i think its cleaner like that :3 */

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-neutral p-4 flex gap-4">
      <aside className="w-72 bg-neutral p-4 rounded-lg border border-neutral">
        <nav className="h-full flex flex-col text-foreground text-center space-y-4">
          <div className="text-3xl py-4">Realityware</div>
          <ul className="text-xl">
            <li className="my-8"><a href="/hub">Hub</a></li>
            <li className="my-8"><a href="/gallery">Gallery</a></li>
            <li className="my-8"><a href="/projects">Projects</a></li>
            <li className="my-8"><a href="/voting">Voting</a></li>
            <li className="my-8"><a href="/store">Store</a></li>
            <li className="my-8"><a href="/world">World</a></li>
          </ul>
          <div className="pt-8"><a href="/profile">Profile</a></div>
        </nav>
      </aside>
      <main className="flex-1 rounded-lg bg-background flex flex-col overflow-hidden border border-neutral">
        <div className="overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
