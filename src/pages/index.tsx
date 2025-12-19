import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() { 
  
  //For Nav bar
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
        <meta name="description" content="The homepage for Realityware! Doesn't show up if logged in (to be implemented)" />
      </Head>

      <header className="">
          {showTitle && (
            <div className="fixed top-0 left-0 w-full z-2 bg-background/80 backdrop-blur shadow text-left py-2 items-center flex px-6">
              <span className="text-[calc(2vw+2vh)] font-bold text-foreground text-left">Realityware</span>
             
              {/* <nav className="w-full flex flex-row items-center justify-end  z-50">
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
          </nav> */}
            </div>
          )}
          
          <nav className="absolute top-0 right-0 w-full flex flex-row items-center justify-between py-4 px-6 z-50">
            <h3 className="text-white font-semibold">REALITYWARE</h3>
            <div className="p-2 px-6 rounded-full border-1 text-black"><p>LOGIN</p></div>
          </nav>
        </header>
        <main className="relative w-full bg-foreground flex flex-col min-h-screen justify-center items-center" id="home">
          
          <Image src="/graphics/top_right.png" className="absolute top-0 right-0" alt="" height={300} width={400} />

          <Image src="/graphics/bottom_left.png" className="absolute bottom-0 left-0" alt="" height={300} width={400} />

          <div className="w-full flex justify-center">
            <Image src="/hackclubflag.png" alt="Hack Club logo" width={160} height={63} className="object-contain w-25 h-auto " />
          </div>
          {/* rephrase to clarify ts hardware focused ^^ */}
          <Image src="/realityware.svg" alt ="" className="py-8 z-20" width={800} height={100} />
          
          <h2 className="text-white text-center max-w-[90%]">Ship a solution to a real world problem, earn prizes </h2> 
          
          <h3 className="text-white text-center">Ages 13-18. Starts <span className="underline">end of January.</span></h3> 
          
          <div className="text-center space-y-6 z-10">
              <form name="rsvpForm" method="post" className="flex justify-between w-fit mx-auto gap-x-2 pt-10">
                <input type="email" placeholder="e.g.coolperson@gmail.com" className="text-primary font-medium bg-white p-4 w-100 box-border h-14 rounded-lg"></input>
                <input type="submit" value="RSVP" className="hidden md:block text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg font-archivo"></input>
                <input type="submit" value="->" className="md:hidden text-black font-semibold text-xl bg-lightaccent px-5 rounded-lg font-archivo"></input>
              </form>
            {/* <p className="mx-auto w-90 max-w-[80%] text-center text-white leading-snug">Ship a solution to a problem of society, get a grant to build it! You can also get prizes like 3D printers, Raspberry Pis, and stickers!
            </p> */}
          </div>

          <div className="absolute bottom-8 right-8 rounded-lg bg-white/10  max-w-80 p-4 pb-8 flex justify-between">
            <span className="text-white text-md">Launching (insert some date here), January 2026!</span>
            <span className="inline-flex rounded-full w-4 h-4 aspect-[1/1] bg-red-500"></span>
          </div>
        </main>
    </>
  );
}