import Head from "next/head";

export default function Home() {
  return (
    <>
      <head>
        <title>Realityware</title>
        <meta name="description" content="The home page for Realityware! Doesn't show up if logged in (to be implemented)" />
      </head>

      <div className="min-h-screen flex items-center justify-center bg-neutral">
        <main className="max-w-3xl w-full p-8">
          <h1 className="text-8xl font-bold mb-4 text-center">Realityware</h1>
          <p className="text-lg mb-6">Real problems, real solutions.</p>

          <section className="space-y-4">
            <a className="block px-4 py-3 bg-background rounded text-foreground" href="/gallery">Go to Gallery</a>
            <a className="block px-4 py-3 bg-background rounded text-foreground" href="/projects">Go to Projects</a>
          </section>
        </main>
      </div>
    </>
  );
}