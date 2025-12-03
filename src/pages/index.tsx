import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [faq1, showfaq1] = useState(false);
  const [faq2, showfaq2] = useState(false);
  const [faq3, showfaq3] = useState(false);
  const [faq4, showfaq4] = useState(false);
  const [faq5, showfaq5] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header className="">
          {showTitle && (
            <div className="fixed top-0 left-0 w-full z-2 bg-background/80 backdrop-blur shadow text-left py-2 items-center flex">
              <span className="text-[calc(2vw+2vh)] font-bold text-foreground ml-[2vw] text-left">Realityware</span>
             
              <nav className="flex flex-row items-center flex-1 z-3 mr-[2vw]">
                <ul className="flex flex-row space-x-[3vw] ml-auto">
                  <li>
                    <a href="#home" className="text-lg text-foreground hover:text-primary font-bold transition underline">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-lg text-foreground hover:text-primary font-bold transition underline">About</a>
                  </li>
                  <li>
                    <a href="#faq" className="text-lg text-foreground hover:text-primary font-bold transition underline">FAQ</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          
          <nav className="absolute top-0 right-[2vw] w-full flex flex-row items-center justify-end py-4 z-50">
            <ul className="flex flex-row space-x-[3vw]">
              <li>
                <a href="#home" className="text-lg text-white hover:text-accent font-medium transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-lg text-white hover:text-accent font-medium transition">About</a>
              </li>
              <li>
                <a href="#faq" className="text-lg text-white hover:text-accent font-medium transition">FAQ</a>
              </li>
            </ul>
          </nav>
          </header>
        <section className="w-full bg-foreground flex flex-col min-h-[20vh] h-screen justify-center" id="home">
          <div className="w-full flex justify-center">
            <Image src="/hackclubflag.png" alt="Hack Club logo" width={160} height={63} className="object-contain w-25 h-auto" />
          </div>
          <h1 className=" font-bold text-center text-white font-archivo">Realityware</h1>

          <div className="text-center space-y-6">
              <form name="rsvpForm" method="post" className="flex justify-between w-fit mx-auto gap-x-2">
                <input type="email" placeholder="e.g.coolperson@gmail.com" className="text-primary font-medium bg-white p-4 pr-16 box-border h-12 rounded-lg"></input>
                <input type="submit" value="RSVP" className="text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg font-archivo"></input>
              </form>
              
            <p className="mx-auto w-90 max-w-[80%] text-center text-white leading-snug">Ship a solution to a problem of society, get a grant to build it! You can also get prizes like 3D printers, Raspberry Pis, and stickers!
            </p>
          </div>


          <div className="absolute bottom-8 right-8 rounded-lg bg-white/20 max-w-80 p-4 pb-8 flex justify-between">
            <p className="text-white">Launching (insert some date here), January 2026!</p>
            <span className="inline-flex rounded-full w-4 h-4 bg-red-500"></span>
          </div>
        </section>

        <main className="w-full bg-topbackground mx-auto" id="about">
            {/* This can be worded better */}
            <h2 className="text-center my-10">HOW IT WORKS</h2>
            <section className="px-8 lg:px-20 xl:px-30 grid grid-cols-4 grid-rows-2 gap-4">
              <div className="p-4 border border-2 border-black bg-neutral rounded-lg shadow-lg  text-lightblack overflow-y-auto">
                <h3 className="text-center">Step 1: Come up with an idea!</h3>
                <p>It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will earn.</p>
              </div>
              <div className="col-span-2 p-4 border border-2 border-black bg-neutral rounded-lg shadow-lg  text-lightblack overflow-y-auto">
                <h3 className="text-center">Step 1: Come up with an idea!</h3>
                <p>It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will earn.</p>
              </div>
              <div className="p-4 border border-2 border-black bg-neutral rounded-lg shadow-lg  text-lightblack overflow-y-auto">
                <h3 className="text-center">Step 1: Come up with an idea!</h3>
                <p>It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will earn.</p>
              </div><div className="col-start-2 col-span-2 p-4 border border-2 border-black bg-neutral rounded-lg shadow-lg  text-lightblack overflow-y-auto">
                <h3 className="text-center">Step 1: Come up with an idea!</h3>
                <p>It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will earn.</p>
              </div>
            </section>
            <section className="w-full border-t-2 border-b-2 border-black h-30 mt-10">
              <p>prizes</p>
            </section>
          {/* <section className="items-center flex mt-[10vh] justify-center portrait:flex-col">
            <div className="p-4 border border-2 border-black bg-secondary rounded-lg shadow-lg  text-lightblack overflow-y-auto">
              <h3 className="text-center">Step 1: Come up with an idea!</h3>
              <p>It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will earn.</p>
            </div>
            
            <div className="w-[8vw] h-[6vh] portrait:w-[3vw] portrait:h-[5vh] bg-lightblue flex-shrink-0"></div>
            <div className="p-4 border border-2 border-black bg-secondary rounded-lg shadow-lg  text-lightblack overflow-y-auto">
              <h3 className="text-center">Step 2: Build your project!</h3>
              <p>Design your project! Plan it out, make a CAD, and design the schematic! Then, create the code that your project would run on, and put it on GitHub!</p>
            </div>
            <div className="w-[8vw] h-[6vh] portrait:w-[3vw] portrait:h-[5vh] bg-lightblue flex-shrink-0"></div>
  
            <div className="p-4 border border-2 border-black bg-secondary rounded-lg shadow-lg  text-lightblack overflow-y-auto">
              <h3 className="text-center">Step 3: Create your BOM!</h3>
              <p>Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</p>
            </div>
          </section>

          <section className="flex h-[28vh] portrait:h-[5vh]">
            <div className="absolute w-[3vw] h-[9vh] portrait:h-[6vh] bg-lightblue flex-shrink-0 right-[16vw] portrait:right-[48vw] rounded-b-full z-0"></div>
            <div className="absolute w-[52vw] h-[6vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[16vw] rounded-full z-1 portrait:hidden"></div>
            <div className="absolute w-[3vw] h-[24vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[65vw] rounded-t-full portrait:hidden"></div>
            <div className="absolute w-[3vw] h-[24vh] bg-red flex-shrink-0 mt-[4vh] right-[32vw] rounded-t-full portrait:hidden"></div>
          </section>
          <section className="items-center flex justify-center portrait:flex-col">
         
            <div className="w-[25vw] h-[40vfunction Welcome(props) {
h] portrait:w-[40vw] portrait:h-[25vh] p-4 border border-2 border-black bg-secondary rounded-lg shadow-lg  text-lightblack overflow-y-auto">
              <h3 className="text-center">Step 3: Create your BOM!</h3>
              <p>Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</p>
            </div>
            
            <div className="w-[8vw] h-[6vh] portrait:w-[3vw] portrait:h-[5vh] bg-lightblue flex-shrink-0"></div>
             <div className="w-[25vw] h-[40vh] portrait:w-[40vw] portrait:h-[25vh] p-4 border border-2 border-black bg-secondary rounded-lg shadow-lg  text-lightblack overflow-y-auto">
              <h3 className="text-center">Step 3: Create your BOM!</h3>
              <p>Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</p>
            </div>
         
          </section> */}
        

          <section className="bg-secondary flex flex-col items-center justify-center" id="faq">
            <h2 className="my-10">FAQ</h2>
            <div className="relative bg-white pb-[2vh] w-[67vw] h-auto border border-black border-[0.25vw] shadow-lg rounded [clip-path:polygon(0%_0%,calc(100%-6vw)_0%,100%_6vw,100%_100%,0%_100%)]">
              <div className="absolute -top-[0.25vw] -right-[0.25vw] pointer-events-none">
                <div className="w-[6vw] h-[6vw] border-[0.25vw] border-black"></div>
              </div>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq1((v) => !v)}
              >
                When will the YSWS start?
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq1 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq1 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Around late December or early January!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq2((v) => !v)}
              >
                Any special gimmicks?
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq2 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq2 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  You will be placed into a city (out of 4 cities), and you must complete scenarios with your city to earn more points!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq3((v) => !v)}
              >
                Placeholder 1
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq3 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq3 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq4((v) => !v)}
              >
                Placeholder 2
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq4 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq4 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq5((v) => !v)}
              >
                Placeholder 3
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq5 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq5 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
            </div>
            <a className="block mt-10 mx-auto w-fit text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg py-3 border-2 border-black" href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P">LEARN MORE</a>

          </section>

        </main>

        <footer className="bg-neutral w-full p-[4vh] mx-auto items-center justify-center flex">
          <section className="space-y-4">
            <p className="block px-[1vw] py-[2vh] rounded text-foreground text-[calc(0.9vw+1vh)]">Built with love by members of <a href="https://hackclub.com/" className="text-blue-900 underline">Hack Club</a>! View this website's <a href="https://github.com/Drummingcoder/realityware-site" className="text-blue-900 underline">source code</a> and join our <a href="https://hackclub.com/slack/" className="text-blue-900 underline">Slack!</a></p>
          </section>
        </footer>
    </>
  );
}