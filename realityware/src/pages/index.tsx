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
      <div className="min-h-screen items-center justify-center">
        <header className="bg-gradient-to-b from-background via-background to-accent w-full mx-auto min-h-[20vh] pt-[18vh] pb-[12vw]">
          <div className="flex items-center justify-center mb-[3vh] relative">
            <h1 className="text-[10vw] font-bold text-center text-foreground flex-1">Realityware</h1>
            <div className="absolute top-1/5 right-[3vw] -translate-y-1/2 z-50 max-width max-w-xs px-[4vw]">
              <Image src="/hackclublogo.png" alt="Hack Club logo" width={181} height={63} className="object-cover" />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="inline-block text-[2.3vw] mb-[2vh] text-primary whitespace-nowrap">Ship a solution to a problem of society, get a grant to build it!</p>
          </div>
          <p className="mb-[8vh] text-secondary text-center text-[1.2vw]">You can also get prizes like 3D printers, Raspberry Pis, and stickers!</p>

          <section className="space-y-4 mb-[8vh] flex justify-center">
            <a className="inline-block px-[3vw] py-[2.4vh] rounded shadow-lg text-foreground text-center text-white bg-lightaccent text-[clamp(0.5rem,0.9vw+1vh,1.4rem)] hover:opacity-80 hover:bg-accent" href="/gallery">RSVP here!</a>
          </section>
        </header>
  
        <main className="w-full p-8 bg-accent mx-auto">
          <section className="space-y-4">
            {/* This can be worded better */}
            <p className="block px-[1vw] py-[2vh] text-[2.5vw] rounded text-center underline text-black">Completing the YSWS</p>
          </section>
          <section className="space-y-4 flex mt-[10vh] justify-center">
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-secondary bg-secondary rounded-lg shadow-lg border-[2vw] rounded text-center text-lightblack text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Step 1: Come up with an idea! <span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will get!</span></p>
            <div className="w-[8vw] h-[6vh] bg-secondary flex-shrink-0 my-[18vh]"></div>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-foreground bg-foreground rounded-lg shadow-lg border-[2vw] rounded text-lightblack text-center text-white text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Step 2: Build your project! <span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">Design your project! Plan it out, make a CAD, and design the schematic! Then, create the code that your project would run on, and put it on GitHub!</span></p>
            <div className="w-[8vw] h-[6vh] bg-foreground flex-shrink-0 my-[18vh]"></div>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-primary bg-primary rounded-lg shadow-lg border-[2vw] rounded text-lightblack text-center text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Step 3: Create your BOM! <span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</span></p>
          </section>
          <section className="space-y-4 gap-[10vw] flex mt-[15vh] justify-center">
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-blue-900 bg-blue-900 border-[2vw] rounded-lg shadow-lg rounded text-center text-white text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Optional: Create a PCB layout for your project! <span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">For a chance at bigger rewards, create a PCB design for your project! This will become a part of your grant.</span></p>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-purple bg-purple border-[2vw] rounded-lg shadow-lg rounded text-lightblack text-center text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Step 4: Ship it! <span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">Once you're finished, ship it to us! We'll rate your project and give you a grant to build it.</span></p>
          </section>
          <section className="space-y-4 gap-[10vw] flex mt-[15vh] justify-center items-center">
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-background bg-background border-[2vw] rounded-lg shadow-lg rounded text-lightblack text-center text-[clamp(0.5rem,0.9vw+1.2vh,1.4rem)]">Step 5: Use your grant to build your project!<span className="block mt-[3vh] text-[clamp(0.3rem,0.6vw+0.9vh,1rem)] text-justify">The project isn't finished until it's up and working! You can win even more prizes by doing so!</span></p>
          </section>
          <section className="flex items-center justify-center mt-[20vh]">
            <a className="block rounded w-[22vw] h-[16vh] px-[1vw] py-[2vh] rounded text-center bg-purple text-white rounded-full justify-center flex items-center text-[clamp(0.5rem,0.8vw+1vh,1.4rem)]" href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P">To learn more, read our FAQ here!</a>
          </section>
        </main>

        <footer className="bg-neutral w-full p-[4vh] mx-auto items-center justify-center flex">
          <section className="space-y-4">
            <p className="block px-[1vw] py-[2vh] rounded text-foreground text-[clamp(0.5rem,0.9vw+1vh,1.4rem)]">Built with love by members of <a href="https://hackclub.com/" className="text-blue-900 underline">Hack Club</a>! View this website's <a href="https://github.com/Drummingcoder/realityware-site" className="text-blue-900 underline">source code</a> and join our <a href="https://hackclub.com/slack/" className="text-blue-900 underline">Slack!</a></p>
          </section>
        </footer>
      </div>
    </>
  );
}