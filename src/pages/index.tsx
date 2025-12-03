import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() { 
  
  const [showFaq, setShowFaq] = useState(null);

  //For Nav bar
  const [showTitle, setShowTitle] = useState(false);


  // const FAQ = ["Question", "Answer"];
    const faq = [
      { id: 1 , question: "Question1", answer: "Answer1"},
      { id: 2, question: "Question2", answer: "Answer2" },
      { id: 3, question: "Question3", answer: "Answer3" }
    ];

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
            <div className="fixed top-0 left-0 w-full z-2 bg-background/80 backdrop-blur shadow text-left py-2 items-center flex px-6">
              <span className="text-[calc(2vw+2vh)] font-bold text-foreground text-left">Realityware</span>
             
              <nav className="w-full flex flex-row items-center justify-end  z-50">
            <ul className="flex flex-row space-x-[3vw]">
              <li>
                <a href="#home" className="text-lg text-black hover:text-accent font-medium transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-lg text-black hover:text-accent font-medium transition">About</a>
              </li>
              <li>
                <a href="#faq" className="text-lg text-black hover:text-accent font-medium transition">FAQ</a>
              </li>
            </ul>
          </nav>
            </div>
          )}
          
          <nav className="absolute top-0 right-6 w-full flex flex-row items-center justify-end py-4 z-50">
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
                <input type="submit" value="RSVP" className="hidden md:block text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg font-archivo"></input>
                <input type="submit" value="->" className="md:hidden text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg font-archivo"></input>
              </form>
              
            <p className="mx-auto w-90 max-w-[80%] text-center text-white leading-snug">Ship a solution to a problem of society, get a grant to build it! You can also get prizes like 3D printers, Raspberry Pis, and stickers!
            </p>
          </div>


          <div className="absolute bottom-8 right-8 rounded-lg bg-white/10  max-w-80 p-4 pb-8 flex justify-between">
            <span className="text-white text-md">Launching (insert some date here), January 2026!</span>
            <span className="inline-flex rounded-full w-4 h-4 aspect-[1/1] bg-red-500"></span>
          </div>
        </section>

        <main className="w-full bg-topbackground mx-auto" id="about">
            {/* This can be worded better */}
            <h2 className="text-center my-10">HOW IT WORKS</h2>
            <section className="px-8 lg:px-20 xl:px-30 md:grid grid-cols-4 grid-rows-2 gap-x-4 space-y-4">
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
        
          
          <section className="px-8 lg:px-20 xl:px-30 bg-secondary flex flex-col items-center justify-center py-10" id="faq">
            <h2 className="mb-10">FAQ</h2>

           
            <div className="relative bg-white pb-[2vh] w-full lg:max-w-[67vw] h-auto border border-black border-2 shadow-lg rounded [clip-path:polygon(0%_0%,calc(100%-6vw)_0%,100%_6vw,100%_100%,0%_100%)] pt-8 sm:pt-20 lg:pt-30 px-4 md:px-8 xl:px-20 ">
              <div className="absolute -top-1 -right-1 pointer-events-none ">
                <div className="w-[6vw] h-[6vw] border-2 border-black"></div>
              </div>

            {faq.map(item => (

              <div key={item.id} >

              <div className="flex justify-between items-center pt-2">
                <p className="text-lightblack">
                  {item.question}
                </p>
                <span className={`transition-transform duration-200 inline-block ${
                    showFaq === item.id ? "rotate-90" : ""
                  }`}>
                  
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black cursor-pointer" 
                  onClick={() => setShowFaq(showFaq === item.id ? null : item.id)}></span>
                  
                </span>    
              
              </div>
              
              {showFaq === item.id && (
                <p className="text-lightblack pl-2 transition-all duration-300 text-textlight">
                  {item.answer}
                </p>
              )}
              <hr className="w-full mt-2"/>
              
              </div>
                ))}

            </div>
            
            <a className="block mt-10 mx-auto w-fit text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg py-3 border-2 border-black" href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P">LEARN MORE</a>

          </section>

        </main>

        <footer className="bg-neutral w-full p-10 mx-auto items-center justify-center flex">
          <section className="text-center space-y-2">
            <h2>RW LOGO</h2>
            <p className="">Built with love for teenagers, by teenagers! View this website's <a href="https://github.com/Drummingcoder/realityware-site" className="text-blue-900 underline">source code</a> and join our <a href="https://hackclub.com/slack/" className="text-blue-900 underline">Slack!</a></p>

            <div className="flex gap-4 w-full justify-center ">
              <a href="https://hackclub.com" className="text-blue-900 underline">Hack Club</a>
              <a href="https://www.depot17.com" className="text-blue-900 underline">Depot17</a>
            </div>
          </section>
        </footer>
    </>
  );
}