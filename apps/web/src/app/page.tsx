"use client";
// note: ignore any of the error, it's because of poorly written code and planned to be rebuilt.
import Image from "next/image";
import { useState, useEffect } from "react";

import Head from "next/head";
import { NullTypes } from "@prisma/client/runtime/client";

export default function Home() { 
  
  const [showFaq, setShowFaq] = useState(null);

  //For Nav bar
  // const [showTitle, setShowTitle] = useState(false);


  // const FAQ = ["Question", "Answer"];
    const faq = [
      { id: 1 , question: "Question1", answer: "Answer1"},
      { id: 2, question: "Question2", answer: "Answer2" },
      { id: 3, question: "Question3", answer: "Answer3" }
    ];

  return (
    <>
      <Head>
        <title>Realityware</title>
        <meta name="description" content="The homepage for Realityware! Doesn't show up if logged in (to be implemented)" />
      </Head>

      
        <main className="" id="home">
          <section id="hero" className="min-h-[100lvh] bg-background bg-[url(/Tiles.png)] bg-blend-multiply flex flex-col items-center">
            <header className="w-full">
              <nav className="w-full flex flex-row items-center  py-4 px-6 gap-x-3">
                <Image src="/hackclubflag.png" alt="Hack Club logo" width={120} height={50} className="object-contain w-20 h-auto grayscale" />
                <h3>|</h3>
                <h4>depot17</h4>
                {/* todo: add depot17 logo */}

                {/* <div className="p-2 px-6 rounded-full border-1 text-black"><p>LOGIN</p></div> */}
              </nav>
            </header>

          {/* rephrase to clarify ts hardware focused ^^ */}

            <div className="grow"></div>
            <Image src="/realityware.svg" alt ="" className="py-8 z-20" width={700} height={100} />
          
            <h3 className="font-semibold text-center max-w-[90%] ">Ship a solution to a real world problem, earn&nbsp;prizes </h3> 
            {/* may need to rephrase the above, more emphasis on shipping a solution, less on prizes */}

            <p className="text-center font-light">Ages 13-18. Starts <span className="underline">end of January.</span></p> 
            
            <div className="text-center space-y-6 z-10 pt-4">
                <form name="rsvpForm" method="post" className="flex justify-between w-fit mx-auto gap-x-2">
                  <input type="email" placeholder="e.g. your@email.com" className="bg-white text-lightgray p-4 w-100 box-border h-14 rounded-lg border-1 border-black"></input>

                  <input type="submit" value="RSVP" className="text-black font-medium text-xl bg-secondary px-5 rounded-lg font-archivo"></input>
                </form>
              {/* <p className="mx-auto w-90 max-w-[80%] text-center text-white leading-snug">Ship a solution to a problem of society, get a grant to build it! You can also get prizes like 3D printers, Raspberry Pis, and stickers!
              </p> */}
            </div>
            <div className="grow"></div>

            </section>

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
            <section className="flex flex-col items-center gap-y-2 text-center">
              <Image src="/realityware.svg" alt="" width={100} height={60} />
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