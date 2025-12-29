"use client";
// note: ignore any of the error, it's because of poorly written code and planned to be rebuilt.
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
      {/* To be implemented once we're ready
      <div className="fixed -top-1 right-0 z-50 max-width max-w-xs px-4 mt-8 text-center">
        <a href="/signin" className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90 transition">
          Sign in with Slack!
        </a>
      </div> */}
      <div className="min-h-screen items-center justify-center">
        <header
          className="mx-auto min-h-[20vh] w-full bg-background pt-[18vh] pb-[12vw]"
          id="home"
        >
          {showTitle && (
            <div className="fixed top-0 left-0 z-2 flex w-full items-center bg-background/80 py-2 text-left shadow backdrop-blur">
              <span className="ml-[2vw] text-left font-bold text-[calc(2vw+2vh)] text-foreground">
                Realityware
              </span>
              <div className="max-width z-50 max-w-xs px-[2vw]">
                <Image
                  src="/hackclublogo.png"
                  alt="Hack Club logo"
                  width={181}
                  height={63}
                  className="h-auto w-[calc(6vw+10vh)] object-contain"
                />
              </div>
              <nav className="z-3 mr-[2vw] flex flex-1 flex-row items-center">
                <ul className="ml-auto flex flex-row space-x-[3vw]">
                  <li>
                    <a
                      href="#home"
                      className="font-bold text-foreground text-lg underline transition hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="font-bold text-foreground text-lg underline transition hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="font-bold text-foreground text-lg underline transition hover:text-primary"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          <div className="max-width absolute top-0 left-[38vw] z-50 max-w-xs px-[4vw]">
            <Image
              src="/flag-orpheus-top.png"
              alt="Hack Club logo"
              width={181}
              height={63}
              className="h-auto w-[calc(8vw+15vh)] object-contain"
            />
          </div>
          <nav className="absolute top-0 right-[2vw] z-50 flex w-full flex-row items-center justify-end py-4">
            <ul className="flex flex-row space-x-[4vw]">
              <li>
                <a
                  href="#home"
                  className="font-bold text-[calc(0.7vw+1.4vh)] text-foreground underline transition hover:text-accent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-bold text-[calc(0.7vw+1.4vh)] text-foreground underline transition hover:text-accent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-bold text-[calc(0.7vw+1.4vh)] text-foreground underline transition hover:text-accent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mb-[3vh] flex items-center justify-center">
            <h1 className="flex-1 text-center font-bold text-[calc(6vw+6vh)] text-foreground">
              Realityware
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="whitespace-wrap mx-[2vw] mb-[2vh] inline-block text-center text-[calc(1.6vw+2vh)] text-primary">
              Ship a solution to a problem of society, get a grant to build it!
            </p>
          </div>
          <p className="mb-[8vh] text-center text-[calc(0.7vw+1.4vh)] text-secondary">
            You can also get prizes like 3D printers, Raspberry Pis, and
            stickers!
          </p>

          <section className="mb-[8vh] flex justify-center space-y-4">
            <a
              className="inline-block rounded bg-lightaccent px-[3vw] py-[2.4vh] text-center text-[calc(0.9vw+1vh)] text-foreground text-white shadow-lg hover:bg-accent hover:opacity-80"
              href="/gallery"
            >
              RSVP here!
            </a>
          </section>
        </header>

        <main className="mx-auto w-full bg-background p-8" id="about">
          <section className="space-y-4">
            {/* This can be worded better */}
            <p className="mt-[4vh] block rounded px-[1vw] py-[2vh] text-center text-[calc(1.6vw+3.3vh)] text-primary underline">
              Completing the YSWS
            </p>
          </section>
          <section className="mt-[10vh] flex items-center justify-center portrait:flex-col">
            <p className="inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-secondary px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-lightblack shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Step 1: Come up with an idea!{" "}
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                It can be anything, as well as a solution can be built for it!
                The better your idea is to help society, the better reward you
                will get!
              </span>
            </p>
            <div className="h-[6vh] w-[8vw] flex-shrink-0 bg-lightblue portrait:h-[5vh] portrait:w-[3vw]"></div>
            <p className="inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-foreground px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-white shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Step 2: Build your project!{" "}
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                Design your project! Plan it out, make a CAD, and design the
                schematic! Then, create the code that your project would run on,
                and put it on GitHub!
              </span>
            </p>
            <div className="h-[6vh] w-[8vw] flex-shrink-0 bg-lightblue portrait:h-[5vh] portrait:w-[3vw]"></div>
            <p className="inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-primary px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-white shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Step 3: Create your BOM!{" "}
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                Simply list out all the components and materials you will need
                to create your project. We will use this BOM to give you an
                appropriate grant!
              </span>
            </p>
          </section>
          <section className="flex h-[28vh] portrait:h-[5vh]">
            <div className="absolute right-[16vw] z-0 h-[9vh] w-[3vw] flex-shrink-0 rounded-b-full bg-lightblue portrait:right-[48vw] portrait:h-[6vh]"></div>
            <div className="absolute right-[16vw] z-1 mt-[4vh] h-[6vh] w-[52vw] flex-shrink-0 rounded-full bg-lightblue portrait:hidden"></div>
            <div className="absolute right-[65vw] mt-[4vh] h-[24vh] w-[3vw] flex-shrink-0 rounded-t-full bg-lightblue portrait:hidden"></div>
            <div className="absolute right-[32vw] mt-[4vh] h-[24vh] w-[3vw] flex-shrink-0 rounded-t-full bg-red portrait:hidden"></div>
          </section>
          <section className="flex items-center justify-center portrait:flex-col">
            <p className="z-1 inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-blue-900 px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-white shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Optional: Make a PCB layout!{" "}
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                For a chance at bigger rewards, create a PCB design for your
                project! This will become a part of your grant.
              </span>
            </p>
            <div className="h-[6vh] w-[8vw] flex-shrink-0 bg-lightblue portrait:h-[5vh] portrait:w-[3vw]"></div>
            <p className="inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-purple px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-lightblack shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Step 4: Ship it!{" "}
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                Once you're finished, ship it to us! We'll rate your project and
                give you a grant to build it.
              </span>
            </p>
          </section>
          <section className="flex h-[28vh] portrait:h-[8vh]">
            <div className="absolute right-[32vw] h-[10vh] w-[3vw] flex-shrink-0 rounded-b-full bg-lightblue portrait:right-[48vw]"></div>
            <div className="absolute right-[32vw] z-1 mt-[4vh] h-[6vh] w-[18vw] flex-shrink-0 rounded-full bg-lightblue portrait:hidden"></div>
            <div className="absolute right-[48vw] mt-[4vh] h-[24vh] w-[3vw] flex-shrink-0 rounded-t-full bg-lightblue portrait:hidden"></div>
          </section>
          <section className="flex items-center justify-center gap-[10vw]">
            <p className="z-1 inline-block h-[40vh] w-[25vw] overflow-y-auto rounded rounded-lg border border-[2vw] border-gray bg-yellow-500 px-[1vw] py-[2vh] text-center text-[calc(0.9vw+1.2vh)] text-lightblack shadow-lg portrait:h-[25vh] portrait:w-[40vw]">
              Step 5: Use your grant to build your project!
              <span className="mt-[3vh] block text-justify text-[calc(0.6vw+0.9vh)]">
                The project isn't finished until it's up and working! You can
                win even more prizes by doing so!
              </span>
            </p>
          </section>

          <section
            className="max-width mt-[18vh] flex items-center justify-center"
            id="faq"
          >
            <div className="relative h-auto w-[67vw] rounded border border-[0.25vw] border-black bg-white pb-[2vh] shadow-lg [clip-path:polygon(0%_0%,calc(100%-6vw)_0%,100%_6vw,100%_100%,0%_100%)]">
              <div className="-top-[0.25vw] -right-[0.25vw] pointer-events-none absolute">
                <div className="h-[6vw] w-[6vw] border-[0.25vw] border-black"></div>
              </div>
              <p className="relative mt-[2vh] text-center text-[calc(2vw+2vh)] underline">
                Frequently Asked Questions
              </p>
              <p
                className="mt-[6vh] ml-[2vw] cursor-pointer text-[calc(1.2vw+1vh)] text-lightblack"
                onClick={() => showfaq1((v) => !v)}
              >
                When will the YSWS start?
                <span
                  className={`absolute right-[2.5vw] inline-block transition-transform duration-200 ${
                    faq1 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block h-0 w-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>

              {faq1 && (
                <p className="mt-[4vh] ml-[2vw] text-[calc(0.8vw+0.8vh)] text-lightblack text-textlight transition-all duration-300">
                  Around late December or early January!
                </p>
              )}
              <hr className="mx-auto mt-[1vh] w-[63vw]" />
              <p
                className="mt-[6vh] ml-[2vw] cursor-pointer text-[calc(1.2vw+1vh)] text-lightblack"
                onClick={() => showfaq2((v) => !v)}
              >
                Any special gimmicks?
                <span
                  className={`absolute right-[2.5vw] inline-block transition-transform duration-200 ${
                    faq2 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block h-0 w-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>

              {faq2 && (
                <p className="mt-[4vh] ml-[2vw] text-[calc(0.8vw+0.8vh)] text-lightblack text-textlight transition-all duration-300">
                  You will be placed into a city (out of 4 cities), and you must
                  complete scenarios with your city to earn more points!
                </p>
              )}
              <hr className="mx-auto mt-[1vh] w-[63vw]" />
              <p
                className="mt-[6vh] ml-[2vw] cursor-pointer text-[calc(1.2vw+1vh)] text-lightblack"
                onClick={() => showfaq3((v) => !v)}
              >
                Placeholder 1
                <span
                  className={`absolute right-[2.5vw] inline-block transition-transform duration-200 ${
                    faq3 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block h-0 w-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>

              {faq3 && (
                <p className="mt-[4vh] ml-[2vw] text-[calc(0.8vw+0.8vh)] text-lightblack text-textlight transition-all duration-300">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="mx-auto mt-[1vh] w-[63vw]" />
              <p
                className="mt-[6vh] ml-[2vw] cursor-pointer text-[calc(1.2vw+1vh)] text-lightblack"
                onClick={() => showfaq4((v) => !v)}
              >
                Placeholder 2
                <span
                  className={`absolute right-[2.5vw] inline-block transition-transform duration-200 ${
                    faq4 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block h-0 w-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>

              {faq4 && (
                <p className="mt-[4vh] ml-[2vw] text-[calc(0.8vw+0.8vh)] text-lightblack text-textlight transition-all duration-300">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="mx-auto mt-[1vh] w-[63vw]" />
              <p
                className="mt-[6vh] ml-[2vw] cursor-pointer text-[calc(1.2vw+1vh)] text-lightblack"
                onClick={() => showfaq5((v) => !v)}
              >
                Placeholder 3
                <span
                  className={`absolute right-[2.5vw] inline-block transition-transform duration-200 ${
                    faq5 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block h-0 w-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>

              {faq5 && (
                <p className="mt-[4vh] ml-[2vw] text-[calc(0.8vw+0.8vh)] text-lightblack text-textlight transition-all duration-300">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="mx-auto mt-[1vh] w-[63vw]" />
            </div>
          </section>

          <section className="mt-[4vh] mb-[5vh] flex items-center justify-center">
            <a
              className="block flex h-[16vh] w-[22vw] items-center justify-center rounded rounded rounded-full bg-accent px-[1vw] py-[2vh] text-center text-[calc(0.73vw+1vh)] text-white"
              href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P"
            >
              To learn more, read our full FAQ here!
            </a>
          </section>
        </main>

        <footer className="mx-auto flex w-full items-center justify-center bg-neutral p-[4vh]">
          <section className="space-y-4">
            <p className="block rounded px-[1vw] py-[2vh] text-[calc(0.9vw+1vh)] text-foreground">
              Built with love by members of{" "}
              <a
                href="https://hackclub.com/"
                className="text-blue-900 underline"
              >
                Hack Club
              </a>
              ! View this website's{" "}
              <a
                href="https://github.com/Drummingcoder/realityware-site"
                className="text-blue-900 underline"
              >
                source code
              </a>{" "}
              and join our{" "}
              <a
                href="https://hackclub.com/slack/"
                className="text-blue-900 underline"
              >
                Slack!
              </a>
            </p>
          </section>
        </footer>
      </div>
    </>
  );
}
