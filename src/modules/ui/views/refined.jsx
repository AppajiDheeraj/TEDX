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
// CORRECT
import CountdownTimer from "../components/Counter";
import PastSpeakers from "../components/PastSpeakers";
import Footer from "../components/Footer";

// Future date for countdown timer
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30); // Set to 30 days from now

// --- Helper Components for Reusability ---

const CircularText = ({ text, size }) => {
  const characters = text.split("");
  const degree = 360 / characters.length;
  const radius = size / 2;
  return (
    <div
      className="relative animate-spin-slow"
      style={{ width: size, height: size }}
    >
      {characters.map((char, i) => (
        <span
          key={i}
          className="absolute top-0 left-1/2 origin-[0_var(--radius)] text-sm font-semibold uppercase"
          style={{
            height: `${radius}px`,
            transform: `translateX(-50%) rotate(${i * degree}deg)`,
            "--radius": `${radius}px`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const RotatingInstagramLink = () => (
  <div className="fixed bottom-8 right-8 w-36 h-36 z-50 flex items-center justify-center">
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute z-10 w-16 h-16 flex items-center justify-center rounded-full transition-transform hover:scale-110"
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90% )",
      }}
      aria-label="Follow us on Instagram"
    >
      <FaInstagram className="w-8 h-8 text-white" />
    </a>
    <div className="absolute">
      <CircularText text="FOLLOW US ON INSTAGRAM • " size={144} />
    </div>
  </div>
);

// --- Main Page Component ---

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
    <div className="bg-black text-white w-full min-h-screen font-sans overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ================================================================= */}
        {/* HEADER SECTION                                                  */}
        {/* ================================================================= */}
        <header className="w-full flex justify-between items-center py-6 sm:py-8 z-20 relative">
          <img src="/Logo.png" alt="TEDx Logo" className="h-16 sm:h-20" />
          <Button className="bg-[#e62b1e] hover:bg-[#c52115] text-white font-bold rounded-full flex items-center space-x-2 py-3 pl-6 pr-0 text-base">
            <span>REGISTER NOW</span>
            <div className="bg-white rounded-full p-2.5">
              <FaArrowUp className="h-4 w-4 text-black transform rotate-45" />
            </div>
          </Button>
        </header>

        {/* ================================================================= */}
        {/* HERO SECTION                                                    */}
        {/* ================================================================= */}
        <main className="flex-grow flex items-center justify-center min-h-[calc(100vh-150px)] -mt-20">
          <div className="relative w-full max-w-4xl flex justify-center items-center">
            <img
              src="/Home.png"
              alt="A large red X graphic"
              className="w-full max-w-[75%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center font-black uppercase text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-widest -translate-y-1/4">
                IDEAS WORTH&nbsp;&nbsp;
                <span className="text-red-600">SPREADING</span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-widest translate-y-1/2">
                LOCALLY <span className="text-red-600">AMPLIFIED</span>
              </h2>
            </div>
          </div>
        </main>

        {/* ================================================================= */}
        {/* EVENT DETAILS SECTION (Design Preserved)                        */}
        {/* ================================================================= */}
        <section className="relative py-24">
          <div className="bg-black flex items-center justify-center p-4 font-sans">
            <div className="bg-[#1C1C1C] max-w-6xl w-full p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Image Column */}
                <div className="md:col-span-3 flex justify-center">
                  <div className="bg-white p-2 w-[250px] h-[275px] flex items-center justify-center">
                    {/* Placeholder for the red 'X' logo */}
                    <img
                      src="/Home.png"
                      alt="Event Logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Middle Content Column */}
                <div className="md:col-span-6 text-white">
                  {/* TEDx Logo */}
                  <div className="mb-4">
                    <img src="/Logo.png" alt="" className="h-20" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 -mt-1">
                    TEDxNITKSurathkal brings TED Talks and live speakers
                    together to inspire ideas and conversations. Our event
                    creates a space for meaningful discussions and connections.
                  </p>

                  {/* Info Bubbles - Updated with Flexbox */}
                  {/* Info Bubbles - Updated with Flexbox & Fixed Size */}
                  <div className="flex flex-col gap-y-4">
                    {/* First Row: Date and Speakers */}
                    <div className="flex justify-between items-center gap-x-4">
                      {/* Date Bubble */}
                      <div className="bg-black rounded-full w-52 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">DATE</p>
                        <p className="font-semibold whitespace-nowrap">
                          6:00 PM, 15th Feb, 2025
                        </p>
                      </div>
                      {/* Speakers Bubble */}
                      <div className="bg-black rounded-full w-48 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">SPEAKERS</p>
                        <p className="font-semibold">8</p>
                      </div>
                    </div>
                    {/* Second Row: Location */}
                    <div className="flex justify-center items-center">
                      {/* Location Bubble */}
                      <div className="bg-black rounded-full w-48 h-16 flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-xs">LOCATION</p>
                        <p className="font-semibold">SJA, NITK Surathkal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right QR Code Column */}
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
          {/* ================================================================= */}
          {/* COUNTDOWN TIMER (Design Preserved)                              */}
          {/* ================================================================= */}
          <section className="relative py-12 flex justify-center items-center">
            <CountdownTimer targetDate={futureDate.toISOString()} />
          </section>
        </section>

        {/* ================================================================= */}
        {/* WHAT IS TEDx SECTION (Improved Design)                          */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-5 flex justify-center">
                {/* Using a container to add a subtle glow effect behind the image */}
                <div className="relative">
                  <img
                    src="/hand.png"
                    alt="Hand reaching for a spark of an idea"
                    className="relative z-10 w-full max-w-sm lg:max-w-none"
                  />
                  {/* Subtle background glow for a more premium feel */}
                  <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full opacity-20"></div>
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="lg:col-span-7 text-white">
                {/* Section Header with a subtle red accent line */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                    What is <span className="text-red-600">TEDx</span>?
                  </h2>
                </div>

                {/* Main Paragraph with improved typography */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  A TEDx event is a local gathering where live TED-like talks
                  and performances are shared with the community. These events
                  are independently organized by volunteers, but they operate
                  under a free license from TED, following the same spirit of{" "}
                  <b>"ideas worth spreading."</b>
                </p>

                {/* Secondary Paragraph */}
                <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Our event,{" "}
                  <span className="font-semibold text-white">
                    TEDxNITKSurathkal
                  </span>
                  , brings together brilliant speakers and thought-provoking
                  video content to spark deep discussion and create lasting
                  connections right here in our community.
                </p>

                {/* Call to Action Button */}
                <div className="mt-8">
                  <a
                    href="#" // Replace with your link to the official TEDx program page
                    className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-md text-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* THE EXPERIENCE SECTION                                          */}
        {/* ================================================================= */}
        <section className="relative pt-24 pb-6 text-center">
          <h2 className="font-['Inter',Helvetica] font-bold text-white text-5xl">
            THE EXPERIENCE
          </h2>
          <Card className="bg-[#65656533] rounded-[20px] p-8 md:p-12 mt-10 border-0">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3 text-left space-y-6">
                <p className="font-['Inter',Helvetica] text-xl text-[#ffffff] leading-7">
                  Fostered By The Vision Of Bringing Innovative And Inspiring
                  Ideas To The Student Community, Tedxnitksurathkal Began At
                  Nitk In 2011. With Successful Editions In 2011, 2012, 2016,
                  2018, 2019, 2020, 2021, 2022, And 2023, The Event Continues To
                  Grow Each Year. Our Upcoming Annual Edition Aims To Push
                  Boundaries, Spark Curiosity, And Encourage People To Rethink
                  What&apos;s Possible.
                </p>
                <p className="font-['Inter',Helvetica] text-lg text-[#999999]">
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

        {/* ================================================================= */}
        {/* ASYMMETRICAL CARDS SECTION (Design Preserved)                   */}
        {/* ================================================================= */}
        <section className="relative pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <Card className="relative bg-[#65656533] rounded-[20px] p-8 h-auto md:h-[256px] flex flex-col justify-between border-0 overflow-hidden">
                {/* Text content remains in the normal flow */}
                <div>
                  <h3 className="font-['Inter',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    LOCATION
                  </h3>
                  <p className="font-['Inter',Helvetica] text-xl text-[#ffffffa6] max-w-md">
                    Hugging the Arabian sea along its length, our venue is a
                    welcoming retreat for sparking up conversations about things
                    that matter.
                  </p>
                </div>

                {/* The image is positioned absolutely relative to the card */}
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
                  <h3 className="font-['Inter',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    COMMUNITY STRENGTH
                  </h3>
                  <p className="font-['Inter',Helvetica] text-xl text-[#ffffffa6] max-w-xs">
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

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8">
              <Card className="bg-[#65656533] rounded-[20px] p-8 h-auto md:h-[346px] flex flex-col justify-between relative overflow-hidden border-0">
                <div>
                  <h3 className="font-['Inter',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                    LEGACY
                  </h3>
                  <p className="font-['Inter',Helvetica] text-xl text-[#ffffffa6] max-w-xs">
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
                <h3 className="font-['Inter',Helvetica] text-2xl font-bold text-[#ffffffd9] mb-4">
                  IMPACTFUL IDEAS
                </h3>
                <p className="font-['Inter',Helvetica] text-xl text-[#ffffffa6]">
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

        {/* ================================================================= */}
        {/* OUR SPEAKERS SECTION (Improved Design)                          */}
        {/* ================================================================= */}
        <section className="bg-black py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-0">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
                Our <span className="text-red-600">Speakers</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Prepare to be inspired by a curated lineup of brilliant
                thinkers, innovators, and storytellers.
              </p>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-50" />
              {/* Left Column: Text Content */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Meet The Minds Shaping Our Future
                </h3>
                <p className="mt-6 text-xl text-gray-300">
                  The full speaker lineup is coming soon. Get ready to explore
                  groundbreaking ideas and fresh perspectives.
                </p>

                {/* "Stay Tuned" Button */}
                <div className="mt-8">
                  <button
                    disabled
                    className="bg-gray-800 text-gray-400 font-semibold px-8 py-3 rounded-md text-lg cursor-not-allowed"
                  >
                    Full Lineup Coming Soon
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Element */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-80" />
                  {/* The main image */}
                  <img
                    src="/think.png" // Your placeholder image
                    alt="A silhouette representing an upcoming speaker"
                    className="relative z-10 rounded-lg"
                  />
                  {/* Decorative background shapes for a modern, abstract feel */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-600/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-lg transform rotate-45 blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* PAST SPEAKERS SECTION                                           */}
        {/* ================================================================= */}
        <section className="relative py-24 text-center">
          <h2 className="font-['Inter',Helvetica] font-bold text-white text-5xl">
            PAST SPEAKERS
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
            <div className="lg:w-1/2 relative flex items-center justify-center h-[646px]">
              <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-full blur-[60px] bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-50" />
              <div className="absolute w-[386px] h-[386px] bg-[#d9d9d9] rounded-full z-10" />{" "}
              {/* Main speaker image */}
              <div className="absolute w-[99px] h-[99px] top-[94px] right-[80px] bg-[#d9d9d9] rounded-full" />
              <div className="absolute w-[99px] h-[99px] top-[221px] right-[0px] bg-[#d9d9d9] rounded-full" />
              <div className="absolute w-[99px] h-[99px] top-[375px] right-[-6px] bg-[#d9d9d9] rounded-full" />
              <div className="absolute w-[99px] h-[99px] top-[518px] right-[81px] bg-[#d9d9d9] rounded-full" />
            </div>
            <div className="lg:w-1/2 text-left space-y-4">
              <h3 className="font-['Inter',Helvetica] font-bold text-[#e53e3e] text-[46px]">
                ARJUN MALHOTRA
              </h3>
              <p className="font-['Inter',Helvetica] text-[28px] text-[#ffffffa6]">
                Founder Of Edureach India
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-['Inter',Helvetica] text-2xl text-[#ffffffa6]">
                    &#34;breaking Barriers In Rural Education&#34;
                  </p>
                  <p className="font-['Inter',Helvetica] text-2xl text-[#ffffffa6] mt-4">
                    TEDXNITKSURATHKAL 2022
                  </p>
                </div>
              </div>
              <p className="font-['Inter',Helvetica] text-2xl text-[#ffffffa6] pt-4">
                Innovation Is Meaningless Unless It Reaches Everyone.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Button
                  size="icon"
                  className="bg-[#d9d9d9] hover:bg-white text-black rounded-full w-12 h-12"
                >
                  <FaArrowLeft size={20} />
                </Button>
                <Button
                  size="icon"
                  className="bg-[#d9d9d9] hover:bg-white text-black rounded-full w-12 h-12"
                >
                  <FaArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* A TRIBUTE SECTION (Corrected for Vertical Centering)            */}
        {/* ================================================================= */}
        <section className="relative py-24 text-center">
          <div className="text-center mb-12">
            <h2 className="font-['Inter',Helvetica] font-bold text-white text-5xl">
              A TRIBUTE
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>
          {/* Use Flexbox with `items-center` to vertically align both columns */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
            {/* 1. Text Column: This will now be vertically centered. */}
            <div className="md:w-1/2 text-left font-['Inter',Helvetica] text-lg text-[#ffffff] space-y-6">
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

            {/* 2. Image Column: This column sets the height reference. */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/Govind_jeevan.png"
                alt="In memory of Govind Jeevan"
                className="rounded-lg object-cover h-[650px]"
              />
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SIGN UP SECTION (Exact Replica)                                 */}
        {/* ================================================================= */}
        <section className="relative py-24 text-center">
          {/* Main Heading */}
          <h2 className="font-['Actor',Helvetica] font-normal text-white text-4xl md:text-5xl">
            Upcoming Events? Theme Reveal? Speaker List?
          </h2>

          {/* Sub-heading with decorative lines */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-gray-600"></div>
            <p className="font-['Actor',Helvetica] font-normal text-lg md:text-xl text-gray-300">
              Sign up below to receive latest{" "}
              <span className="text-[#ff2b06]">TEDx NITK</span> news
            </p>
            <div className="w-16 h-px bg-gray-600"></div>
          </div>

          {/* The Waitlist Form Card */}
          <div className="relative max-w-lg mx-auto mt-12">
            {/* This div creates the outer red glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur opacity-20"></div>

            {/* The main card container */}
            <Card className="relative bg-black border border-red-900/50 rounded-3xl p-8 md:p-10">
              <CardContent className="p-0">
                <form className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-center text-white">
                    Subscribe Now !! 🎉
                  </h3>

                  {/* First Name Input */}
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

                  {/* Last Name Input */}
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

                  {/* Email Address Input */}
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

                  {/* Submit Button */}
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
      {/* <RotatingInstagramLink /> */}
    </div>
  );
};
