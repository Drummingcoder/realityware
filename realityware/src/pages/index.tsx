import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Realityware</title>
        <meta name="description" content="The home page for Realityware! Doesn't show up if logged in (to be implemented)" />
      </Head>

      {/* To be implemented once we're ready
      <div className="fixed -top-1 right-0 z-50 max-width max-w-xs px-4 mt-8 text-center">
        <a href="/signin" className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90 transition">
          Sign in with Slack!
        </a>
      </div> */}
      <div className="fixed top-[12vh] right-[14vw] z-50 max-width max-w-xs px-4">
        <Image src="/hackclublogo.png" alt="Hack Club logo" width={181} height={63} className="object-cover" />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-background">
        <main className="max-w-3xl w-full p-8">
          <h1 className="text-8xl font-bold mb-8 text-center text-foreground">Realityware</h1>
          <div className="flex justify-center">
            <p className="inline-block text-3xl mb-3 text-primary whitespace-nowrap">Ship a solution to a problem of society, get a grant to build it!</p>
          </div>
          <p className="text-sm mb-12 text-secondary text-center">Psst...You can even get prizes like 3D printers, Raspberry Pis, and stickers!</p>

          <section className="space-y-4 mb-32 flex justify-center">
            <a className="inline-block border border-neutral px-3 py-1 rounded text-foreground text-center text-secondary bg-accent hover:opacity-90" href="/hub">RSVP here!</a>
          </section>

          <section className="space-y-4">
            <p className="block px-4 py-3 rounded text-center">So, how will the event work?</p>
          </section>
          <section className="space-y-4">
            <p className="block px-4 py-3 bg-background rounded text-foreground">Step 1: Come up with an idea!</p>
          </section>
          <section className="space-y-4">
            <p className="block px-4 py-3 bg-background rounded text-foreground">Step 2: Build a model!</p>
          </section>
          <section className="space-y-4">
            <p className="block px-4 py-3 bg-background rounded text-foreground">Step 3: Code it out!</p>
          </section>
        </main>
      </div>
    </>
  );
}