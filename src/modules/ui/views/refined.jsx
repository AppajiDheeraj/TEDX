import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FaArrowUp,
  FaInstagram,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import CountdownTimer from "../components/Counter";
import PastSpeakers from "../components/PastSpeakers";
import Footer from "../components/Footer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import CircularText from "../components/CircularText";

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);

export const HomePage = () => {
  const countdownData = [
    { value: "00" },
    { value: "00" },
    { value: "00" },
    { value: "00" },
  ];

  const galleryImages = [
    { src: "/gallery-1.png" },
    { src: "/gallery-2.png" },
    { src: "/gallery-3.png" },
    { src: "/gallery-4.png" },
    { src: "/gallery-5.png" },
    { src: "/gallery-6.png" },
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen font-['Roboto',Helvetica] overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <header className="w-full flex justify-between items-center py-6 sm:py-8 z-20 relative">
          <img src="/Logo.png" alt="TEDx Logo" className="h-16 sm:h-20" />
          <Button className="bg-[#e62b1e] hover:bg-[#c52115] text-white font-bold rounded-full flex items-center space-x-2 py-3 pl-6 pr-0 text-base">
            <span>REGISTER NOW</span>
            <div className="bg-white rounded-full p-2.5">
              <FaArrowUp className="h-4 w-4 text-black transform rotate-45" />
            </div>
          </Button>
        </header>

        <main className="flex-grow flex items-center justify-center min-h-[calc(100vh-150px)] -mt-10">
          <div className="relative w-full max-w-7xl flex justify-center items-center z-0">
            <img
              src="/Home.png"
              alt="A large red X graphic"
              className="w-full max-w-[50%]"
            />
            <div className="absolute inset-0 top-[-px] flex flex-col items-center justify-center font-black uppercase text-center">
              <h1 className="text-2xl font-['Roboto',Helvetica] md:text-4xl lg:text-5xl tracking-widest -translate-y-1/4">
                IDEAS
                WORTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="">SPREADING</span>
              </h1>
              <div className="h-40"></div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-widest translate-y-1/2">
                LOCALLY
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="">AMPLIFIED</span>
              </h2>
            </div>
          </div>
        </main>

        <section className="relative py-24">
          <div className="bg-black flex items-center justify-center p-4 font-['Roboto',Helvetica]">
            <div className="bg-[#1C1C1C] max-w-6xl w-full p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3 flex justify-center">
                  <div className="bg-white p-2 w-[250px] h-[275px] flex items-center justify-center">
                    <img
                      src="/Home.png"
                      alt="Event Logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="md:col-span-6 text-white">
                  <div className="mb-4">
                    <img src="/Logo.png" alt="" className="h-20" />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 -mt-1">
                    TEDxNITKSurathkal brings TED Talks and live speakers
                    together to inspire ideas and conversations. Our event
                    creates a space for meaningful discussions and connections.
                  </p>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex justify-between items-center gap-x-4">
                      <div className="bg-black rounded-full w-52 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">DATE</p>
                        <p className="font-semibold whitespace-nowrap">
                          6:00 PM, 15th Feb, 2025
                        </p>
                      </div>
                      <div className="bg-black rounded-full w-48 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">SPEAKERS</p>
                        <p className="font-semibold">8</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="bg-black rounded-full w-48 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">LOCATION</p>
                        <p className="font-semibold">SJA, NITK Surathkal</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 flex items-center gap-4">
                  <div className="h-64 border-l-2 border-dashed border-gray-500"></div>
                  <div className="text-white space-y-2 flex flex-col items-center">
                    <div className="flex items-baseline border-b-2">
                      <h3 className="font-black text-2xl tracking-widest">
                        ALCHEMY NITK
                      </h3>
                      <span className="font-light text-2xl tracking-wider">
                        2025
                      </span>
                    </div>
                    <p className="text-sm pt-2">Follow Us</p>
                    <img
                      src="/qr-code.png"
                      alt="QR Code"
                      className="w-36 h-36 items-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="relative py-12 flex justify-center items-center">
            <CountdownTimer targetDate={futureDate.toISOString()} />
          </section>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <img
                    src="/hand.png"
                    alt="Hand reaching for a spark of an idea"
                    className="relative z-10 w-full max-w-sm lg:max-w-none"
                  />
                  <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full opacity-20"></div>
                </div>
              </div>

              <div className="lg:col-span-7 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h2 className="font-['Roboto',Helvetica] font-bold text-white text-5xl">
                    What is <span className="text-red-600">TEDx</span> ?
                  </h2>
                </div>

                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  A TEDx event is a local gathering where live TED-like talks
                  and performances are shared with the community. These events
                  are independently organized by volunteers, but they operate
                  under a free license from TED, following the same spirit of{" "}
                  <b>"ideas worth spreading."</b>
                </p>

                <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Our event,{" "}
                  <span className="font-semibold text-white">
                    TEDxNITKSurathkal
                  </span>
                  , brings together brilliant speakers and thought-provoking
                  video content to spark deep discussion and create lasting
                  connections right here in our community.
                </p>

                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pt-24 pb-6 text-center">
          <h2 className="font-['Roboto',Helvetica] font-bold text-white text-5xl">
            THE EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          <Card className="bg-[#65656533] rounded-[20px] p-8 md:p-12 mt-10 border-0">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3 text-left space-y-6">
                <p className="font-['Roboto',Helvetica] text-xl text-[#ffffff] leading-7">
                  Fostered By The Vision Of Bringing Innovative And Inspiring
                  Ideas To The Student Community, Tedxnitksurathkal Began At
                  Nitk In 2011. With Successful Editions In 2011, 2012, 2016,
                  2018, 2019, 2020, 2021, 2022, And 2023, The Event Continues To
                  Grow Each Year. Our Upcoming Annual Edition Aims To Push
                  Boundaries, Spark Curiosity, And Encourage People To Rethink
                  What&apos;s Possible.
                </p>
                <p className="font-['Roboto',Helvetica] text-lg text-[#999999]">
                  A Tale that leaves a mark and ignites inspiration
                </p>
                <Button className="bg-[#e62b1e] hover:bg-[#c52115] text-white font-bold rounded-full flex items-center space-x-2 py-3 pl-6 pr-0 text-base">
                  <span>TEDX NITK</span>
                  <div className="bg-white rounded-full p-2.5">
                    <FaArrowUp className="h-4 w-4 text-black transform rotate-45" />
                  </div>
                </Button>
              </div>
              <div className="lg:w-1/3 relative">
                <img
                  src="/grow.png"
                  alt="Element"
                  className="relative h-80 w-auto right-0 "
                />
              </div>
            </div>
          </Card>
        </section>

        <section className="relative pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <Card className="relative bg-[#65656533] rounded-[20px] p-8 h-auto md:h-[256px] flex flex-col justify-between border-0 overflow-hidden">
                <div>
                  <h3 className="font-['Roboto',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    LOCATION
                  </h3>
                  <p className="font-['Roboto',Helvetica] text-xl text-[#ffffffa6] max-w-md">
                    Hugging the Arabian sea along its length, our venue is a
                    welcoming retreat for sparking up conversations about things
                    that matter.
                  </p>
                </div>

                <div className="absolute bottom-[-40px] right-[-50px] z-10">
                  <img
                    src="/globe.png"
                    alt="Location visual"
                    className="w-[309px] h-auto opacity-35"
                  />
                </div>
              </Card>

              <Card className="bg-[#65656533] relative rounded-[20px] p-8 h-auto md:h-[315px] flex flex-col justify-between border-0 overflow-hidden">
                <div>
                  <h3 className="font-['Roboto',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    COMMUNITY STRENGTH
                  </h3>
                  <p className="font-['Roboto',Helvetica] text-xl text-[#ffffffa6] max-w-xs">
                    Standing 6000+ strong, our community comprises of curious
                    individuals with an ever increasing appetite for learning.
                  </p>
                </div>
                <div className="absolute bottom-[-10px] right-[-10px] z-10">
                  <img
                    src="/community.png"
                    alt="Community visual"
                    className="w-[278px] h-auto opacity-35"
                  />
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <Card className="bg-[#65656533] rounded-[20px] p-8 h-auto md:h-[346px] flex flex-col justify-between relative overflow-hidden border-0">
                <div>
                  <h3 className="font-['Roboto',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    LEGACY
                  </h3>
                  <p className="font-['Roboto',Helvetica] text-xl text-[#ffffffa6] max-w-xs">
                    Ranking amongst the top educational institutes in India, our
                    university adds a key ingredient in realising our vision.
                  </p>
                </div>
                <div className="absolute bottom-[-120px] right-[-40px] z-10">
                  <img
                    src="/9.png"
                    alt="Legacy visual"
                    className="w-[316px] h-auto opacity-35"
                  />
                </div>
              </Card>
              <Card className="bg-[#65656533] rounded-[20px] p-8 h-auto md:h-[223px] border-0">
                <h3 className="font-['Roboto',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-0">
                  IMPACTFUL IDEAS
                </h3>
                <p className="font-['Roboto',Helvetica] text-xl text-[#ffffffa6]">
                  We strive to bring forward powerful ideas that challenge the
                  norms and carry the potential to transform lives.
                </p>
                <div className="self-end mt-4">
                  <img
                    src="/10.png"
                    alt="Legacy visual"
                    className="absolute h-75 bottom-[-40px] right-[-40px] z-10 opacity-35"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-black py-10 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-0">
              <h2 className="font-['Roboto',Helvetica] font-bold text-white text-5xl">
                OUR <span className="text-red-600">SPEAKERS</span>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Prepare to be inspired by a curated lineup of brilliant
                thinkers, innovators, and storytellers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-50" />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Meet The Minds Shaping Our Future
                </h3>
                <p className="mt-6 text-xl text-gray-300">
                  The full speaker lineup is coming soon. Get ready to explore
                  groundbreaking ideas and fresh perspectives.
                </p>

                <div className="mt-8">
                  <button
                    disabled
                    className="bg-gray-800 text-gray-400 font-semibold px-8 py-3 rounded-md text-lg cursor-not-allowed"
                  >
                    Full Lineup Coming Soon
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-80" />
                  <img
                    src="/think.png"
                    alt="A silhouette representing an upcoming speaker"
                    className="relative z-10 rounded-lg"
                  />
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-600/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-lg transform rotate-45 blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 text-center">
          <PastSpeakers />
        </section>

        <section className="relative py-24 text-center">
          <div className="text-center mb-12">
            <h2 className="font-['Roboto',Helvetica] font-bold text-white text-5xl">
              A TRIBUTE
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
            <div className="md:w-1/2 text-left font-['Roboto',Helvetica] text-lg text-[#ffffff] space-y-6">
              <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-38" />
              <p className="font-semibold text-white">
                In Memory of Govind Jeevan
              </p>
              <p>
                The TEDxNITKSurathkal team deeply mourns the loss of Govind
                Jeevan, a bright student of NITK and a long-time member of our
                core team. Our sincerest condolences go out to his family and
                friends for this profound loss.
              </p>
              <p>
                Govind&apos;s journey with TEDxNITKSurathkal spanned multiple
                editions. From Speaker Curation, Website Management,
                Merchandise, and Creative Design in 2019 to leading the 2020
                edition themed Mirrors and Windows, he brought dedication,
                creativity, and a vision for meaningful impact.
              </p>
              <p>
                He constantly sought ways to make TEDxNITKSurathkal more
                enriching for the community—facilitating interactions between
                students and speakers, brainstorming fresh ideas, and going
                above and beyond to create better experiences. Even during the
                pandemic, his guidance helped the 2021 team navigate challenges
                and stay true to the TEDx spirit.
              </p>
              <p>
                Govind&apos;s passion, leadership, and unique perspective will
                be remembered and cherished. His legacy will continue to inspire
                us for years to come.
              </p>
              <p>May he rest in peace.</p>
              <p className="font-semibold text-white">Team TEDxNITKSurathkal</p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="/Govind_jeevan.png"
                alt="In memory of Govind Jeevan"
                className="rounded-lg object-cover h-[650px]"
              />
            </div>
          </div>
        </section>

        <section className="relative py-24 text-center">
          <h2 className="font-['Actor',Helvetica] font-normal text-white text-4xl md:text-5xl">
            Upcoming Events? Theme Reveal? Speaker List?
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-gray-600"></div>
            <p className="font-['Actor',Helvetica] font-normal text-lg md:text-xl text-gray-300">
              Sign up below to receive latest{" "}
              <span className="text-[#ff2b06]">TEDx NITK</span> news
            </p>
            <div className="w-16 h-px bg-gray-600"></div>
          </div>

          <div className="relative max-w-lg mx-auto mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur opacity-20"></div>

            <Card className="relative bg-black border border-red-900/50 rounded-3xl p-8 md:p-10">
              <CardContent className="p-0">
                <form className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-center text-white">
                    Subscribe Now !! 🎉
                  </h3>

                  <div className="relative">
                    <label
                      htmlFor="firstName"
                      className="text-sm text-gray-400 text-left block w-full"
                    >
                      Enter First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Ex: Adithya"
                      className="w-full p-3 mt-1 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder:text-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-left placeholder:text-left"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="lastName"
                      className="text-sm text-gray-400 text-left block w-full"
                    >
                      Enter Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Ex: MahaThakur"
                      className="w-full p-3 mt-1 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder:text-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-left placeholder:text-left"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-400 text-left block w-full"
                    >
                      Enter Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Ex: xyz@mail.com"
                      className="w-full p-3 mt-1 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder:text-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500 text-left placeholder:text-left"
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#ff4d4d] hover:bg-[#ff2b06] text-white font-bold text-lg rounded-xl flex items-center justify-center space-x-3 py-6"
                    >
                      <span>Submit</span>
                      <div className="bg-white/30 rounded-full p-1">
                        <FaArrowRight className="h-5 w-5 text-white transform -rotate-45" />
                      </div>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>{" "}
      <Footer />
    </div>
  );
};
