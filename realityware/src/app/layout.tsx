import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realityware",
  description: "Real problems. Real solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="min-h-screen flex">
          <aside className="w-72 bg-[#c7c2b5] border-green-500 border p-4 sticky top-10">
            <nav className="h-full flex flex-col text-black text-center space-y-4">
              <div className="text-3xl">Realityware</div> 
              <ul className="text-xl">
                <li className="my-8"><a href="/hub">Hub</a></li>
                <li className="my-8"><a href="/gallery">Gallery</a></li>
                <li className="my-8"><a href="/projects">Projects</a></li>
                <li className="my-8"><a href="/voting">Voting</a></li>
                <li className="my-8"><a href="/store">Store</a></li>
                <li className="my-8"><a href="/world">World</a></li>
              </ul>
              <div className=""><a href="/profile">Profile</a></div>
            </nav>
          </aside>

          <main className="flex-1 p-8">

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
