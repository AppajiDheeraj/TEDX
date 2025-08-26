import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaArrowUp } from "react-icons/fa";

const countdownData = [
  { value: "00", label: "Days", className: "top-[1707px] left-[130px]" },
  { value: "00", label: "Hours", className: "top-[1707px] left-[269px]" },
  { value: "00", label: "Minutes", className: "top-[1707px] left-[452px]" },
  { value: "00", label: "Seconds", className: "top-[1707px] left-[591px]" },
  { value: "00", label: "", className: "top-[1707px] left-[768px]" },
  { value: "00", label: "", className: "top-[1707px] left-[907px]" },
  { value: "00", label: "", className: "top-[1707px] left-[1072px]" },
  { value: "00", label: "", className: "top-[1707px] left-[1211px]" },
];

const galleryImages = [
  { className: "top-[125px] left-[1061px]" },
  { className: "top-[125px] left-[1180px]" },
  { className: "top-[125px] left-[1299px]" },
  { className: "top-[213px] left-[1062px]" },
  { className: "top-[213px] left-[1181px]" },
  { className: "top-[213px] left-[1300px]" },
];

const logoUrl = "/Logo.png";
const heroXImageUrl = "/Home.png";
const handImageUrl = "/hand.png";
const growImageUrl = "/grow.png";
const globeIconUrl = "/globe.png";
const communityIconUrl = "/community.png";
const legacyIconUrl = "/9.png";
const impactIconUrl = "/brain.png";
const arrowUpRightUrl = "/arrow-up-right.svg"; // For the button
const rotatingTextUrl = "/follow-us-instagram-circle.svg"; // Using a pre-made SVG for simplicity
const instagramIconUrl = "/instagram.svg";

const RotatingInstagramLink = () => (
  <div className="fixed bottom-8 right-8 w-36 h-36 z-20">
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={rotatingTextUrl}
        alt="Follow Us on Instagram"
        className="absolute w-full h-full animate-spin-slow"
      />
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-lg transition-transform hover:scale-110"
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90% )",
        }}
      >
        <img src={instagramIconUrl} alt="Instagram Icon" className="w-8 h-8" />
      </a>
    </div>
  </div>
);

export const HomePage = () => {
  return (
    <div className="bg-black text-white w-screen min-h-screen font-sans">
      <div className="mx-auto w-full max-w-[1440px] relative bg-black">
        {/* ================================================================= */}
        {/* HEADER SECTION                                                  */}
        {/* ================================================================= */}
        <header className="w-full flex justify-between items-center p-6 sm:p-8 z-10 relative">
          <div>
            <img src={logoUrl} alt="TEDx Logo" className="h-16 sm:h-20" />
          </div>
          <Button className="bg-[#e62b1e] hover:bg-[#c52115] text-white font-bold rounded-full flex items-center space-x-2 py-3 pl-6 pr-0 text-base">
            <span>REGISTER NOW</span>
            <div className="bg-gray-200 rounded-full p-2.5">
              <FaArrowUp className="h-4 w-4 text-black transform rotate-45" />
            </div>
          </Button>
        </header>

        {/* ================================================================= */}
        {/* HERO SECTION                                                    */}
        {/* ================================================================= */}
        <main className="flex-grow flex items-center justify-center -mt-35 min-h-screen">
          <div className="relative w-full max-w-4xl p-4 flex justify-center items-center">
            <img
              src={heroXImageUrl}
              alt="A large red X graphic"
              className="mt--6 w-full max-w-[75%]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center font-black uppercase text-center">
              <h1
                className="text-2xl md:text-4xl tracking-widest"
                style={{ transform: "translateY(-20%)" }}
              >
                IDEAS WORTH&nbsp;&nbsp;
                <span className="text-red-600">SPREADING</span>
              </h1>
              <h2
                className="text-2xl md:text-4xl tracking-widest"
                style={{ transform: "translateY(80%)" }}
              >
                LOCALLY <span className="text-red-600">AMPLIFIED</span>
              </h2>
            </div>
          </div>
        </main>

        {/* Event Details Section */}
        <section className="absolute w-[1152px] h-[407px] top-[1213px] left-[153px]">
          <Card className="w-[1152px] h-[407px] bg-[#141414] border-0">
            <CardContent className="relative w-[1144px] h-[407px] p-0">
              <p className="w-[487px] h-[88px] top-[125px] left-[390px] text-lg absolute [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] tracking-[0] leading-[normal]">
                Tedxnitksurathkal Brings Ted Talks And Live Speakers Together To
                Inspire Ideas And Conversations.our Event Creates A Space For
                Meaningful Discussions And Connections.
              </p>

              <div className="h-8 top-[83px] left-[1035px] [font-family:'Luckiest_Guy',Helvetica] font-normal text-white text-[32px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
                2025
              </div>

              <div className="absolute w-[326px] h-[335px] top-10 left-[23px] bg-white">
                <img
                  className="absolute w-[304px] h-[259px] top-[39px] left-3.5 object-cover"
                  alt="Untitled x"
                  src="/untitled--1000-x-1200-px---7--1-1.png"
                />
              </div>

              <Separator
                className="absolute w-1.5 h-[296px] top-[42px] left-[888px] bg-white"
                orientation="vertical"
              />

              <div className="absolute h-8 top-10 left-[916px] [font-family:'Luckiest_Guy',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                ALCHEMY_NITK
              </div>

              <img
                className="absolute w-[102px] h-px top-[104px] left-[916px] object-cover"
                alt="Line"
                src="/line-5.svg"
              />

              <img
                className="absolute w-[182px] h-[182px] top-40 left-[931px] object-cover"
                alt="Image"
                src="/image-5.png"
              />

              <img
                className="absolute w-[187px] h-[66px] top-[33px] left-[390px]"
                alt="Image"
                src="/image-6.png"
              />

              <div className="w-[86px] h-[22px] top-[131px] left-[931px] font-normal text-white text-lg absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                Location
              </div>
            </CardContent>
          </Card>

          <Card className="absolute w-[257px] h-[60px] top-[242px] left-96 bg-black rounded-[15px] border-0">
            <CardContent className="p-0">
              <div className="absolute w-[291px] h-[78px] top-[232px] left-[361px] [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                DATE
                <br />
                6:00 PM, 15th Feb, 2025
              </div>
            </CardContent>
          </Card>

          <Card className="absolute w-[257px] h-[60px] top-[323px] left-[513px] bg-black rounded-[15px] border-0">
            <CardContent className="p-0">
              <div className="absolute w-[268px] h-[97px] top-[303px] left-[507px] [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                LOCATION
                <br />
                SJA, NITK Surathkal
              </div>
            </CardContent>
          </Card>

          <Card className="absolute w-[196px] h-[60px] top-60 left-[672px] bg-black rounded-[15px] border-0">
            <CardContent className="p-0">
              <div className="absolute w-[125px] h-[65px] top-[239px] left-[712px] [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                SPEAKERS
                <br />8
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Countdown Timer */}
        <section className="absolute top-[1707px] left-[130px]">
          {countdownData.map((item, index) => (
            <Card
              key={index}
              className={`absolute w-[121px] h-[118px] ${item.className} bg-[#d9d9d9] border-0`}
            >
              <CardContent className="p-0 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-black text-2xl font-bold">
                    {item.value}
                  </div>
                  {item.label && (
                    <div className="text-black text-sm">{item.label}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="left-[284px] absolute h-[54px] top-[31px] [font-family:'Inter',Helvetica] font-normal text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
            :
          </div>

          <div className="left-[603px] absolute h-[54px] top-[31px] [font-family:'Inter',Helvetica] font-normal text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
            :
          </div>

          <div className="left-[914px] absolute h-[54px] top-[31px] [font-family:'Inter',Helvetica] font-normal text-white text-[45px] tracking-[0] leading-[normal] whitespace-nowrap">
            :
          </div>

          <div className="absolute h-[30px] top-[140px] left-[101px] [font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
            Days
          </div>

          <div className="absolute h-[30px] top-[140px] left-[418px] [font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
            Hours
          </div>

          <div className="absolute h-[30px] top-[137px] left-[711px] [font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
            Minutes
          </div>

          <div className="absolute h-[30px] top-[137px] left-[1007px] [font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
            Seconds
          </div>
        </section>

        {/* What is TEDx Section */}
        <section className="absolute w-[1230px] h-[440px] top-[2100px] left-[115px]">
          <img
            className="absolute w-[75px] h-[5px] top-1 left-[492px]"
            alt="Line"
            src="/line-7.svg"
          />

          <div className="absolute w-[1230px] h-[440px] top-0 left-0">
            <h2 className="absolute top-3 left-[494px] [font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
              WHAT IS TEDX
            </h2>

            <div className="absolute w-[868px] h-[290px] top-[70px] left-0 [font-family:'Actor',Helvetica] font-normal text-transparent text-[65px] leading-8">
              <span className="text-white tracking-[-6.34px]">T</span>

              <span className="text-white text-[22px] tracking-[0]">
                EDx is a program of local, self-organized events inspired by the
                spirit of &quot;
              </span>

              <span className="text-[#e53e3e] text-[22px] tracking-[0]">
                ideas
                worth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spreading.
              </span>

              <span className="text-white text-[22px] tracking-[0]">
                &quot; Our event,
              </span>

              <span className="text-[#e53e3e] text-[22px] tracking-[0]">
                {" "}
                TEDxNITKSurathkal
              </span>

              <span className="text-white text-[22px] tracking-[0]">
                , combines TED Talks videos and live speakers to spark
                meaningful discussions and connections. While TED provides
                guidance for the TEDx program, each event, including ours, is
                independently organized. Learn more at the
                TEDx&nbsp;&nbsp;Program Initiative.
              </span>
            </div>

            <img
              className="absolute w-[442px] h-[440px] top-0 left-[788px]"
              alt="Element"
              src="/5-1.png"
            />
          </div>
        </section>

        <img
          className="absolute w-[75px] h-[5px] top-[2684px] left-[596px]"
          alt="Line"
          src="/line-7.svg"
        />

        <h2 className="absolute top-[2696px] left-[600px] [font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
          THE EXPERIENCE
        </h2>

        {/* The Experience Section */}
        <section className="absolute w-[1273px] h-[431px] top-[2787px] left-[91px]">
          <Card className="w-[1264px] h-[431px] bg-[#65656533] rounded-[20px] border-0">
            <CardContent className="p-0 relative">
              <p className="absolute w-[559px] top-[349px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-[#999999] text-lg tracking-[0] leading-[normal]">
                A Tale that leaves a mark and ignites inspiiration
              </p>

              <Button className="absolute w-[255px] h-[52px] top-[280px] left-[76px] bg-[#e32a1c] rounded-[35px] hover:bg-[#c22a1c] h-auto">
                <div className="absolute w-[164px] h-12 top-0.5 left-[42px] [font-family:'Inter',Helvetica] font-extrabold text-white text-[25px] tracking-[0] leading-[normal]">
                  TEDx NITK
                </div>

                <div className="absolute w-[52px] h-[52px] top-0 left-[201px] bg-[#d9d9d9] rounded-[26px]" />

                <img
                  className="absolute w-[41px] h-[41px] top-[5px] left-[206px]"
                  alt="Arrow up right"
                  src="/arrow-up-right.svg"
                />
              </Button>

              <p className="absolute w-[707px] top-[58px] left-[76px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-xl tracking-[0] leading-7">
                Fostered By The Vision Of Bringing Innovative And Inspiring
                Ideas To The Student Community, Tedxnitksurathkal Began At Nitk
                In 2011. With Successful Editions In 2011, 2012, 2016, 2018,
                2019, 2020, 2021, 2022, And 2023, The Event Continues To Grow
                Each Year. Our Upcoming Annual Edition Aims To Push Boundaries,
                Spark Curiosity, And Encourage People To Rethink What&apos;s
                Possible.
              </p>

              <div className="absolute w-[354px] h-[373px] top-[13px] left-[838px] bg-[#000000bf] rounded-[177px/186.5px] blur-[22.5px] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)]" />

              <img
                className="absolute w-[490px] h-[418px] top-[13px] left-[783px] object-cover"
                alt="Element"
                src="/6-1.png"
              />
            </CardContent>
          </Card>
        </section>

        {/* Location and Community Cards */}
        <section className="absolute w-[700px] h-[266px] top-[3255px] left-[104px]">
          <Card className="w-[694px] h-[266px] bg-[#65656533] rounded-[20px] border-0">
            <CardContent className="p-0 relative">
              <img
                className="absolute w-[309px] h-[190px] top-[76px] left-[385px] object-cover"
                alt="Untitled x"
                src="/untitled--1000-x-1200-px---3--1.png"
              />

              <p className="absolute w-[358px] top-[73px] left-[45px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-xl tracking-[0] leading-[normal]">
                Hugging the Arabian sea along its length, our venue is a
                welcoming retreat for sparking up conversations about things
                that matter.
              </p>

              <h3 className="w-[295px] top-[23px] left-[45px] font-bold text-[#ffffffd9] text-2xl absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                LOCATION
              </h3>
            </CardContent>
          </Card>
        </section>

        <section className="absolute w-[698px] h-[372px] top-[3548px] left-[104px]">
          <Card className="w-[681px] h-[325px] bg-[#65656533] rounded-[20px] border-0">
            <CardContent className="p-0 relative">
              <p className="absolute w-[260px] top-[116px] left-14 [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-xl tracking-[0] leading-[normal]">
                Standing 6000+ strong, our community comprises of curious
                individuals with an ever increasing appetite for learning.
              </p>

              <div className="absolute w-[571px] h-[237px] top-[58px] left-14">
                <h3 className="absolute w-[409px] top-[3px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#ffffffd9] text-2xl tracking-[0] leading-[normal]">
                  COMMUNITY STRENGTH
                </h3>

                <img
                  className="absolute w-[278px] h-[237px] top-0 left-[293px] object-cover"
                  alt="Untitled x"
                  src="/untitled--1000-x-1200-px---4--1.png"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="absolute w-[570px] h-[773px] top-[3255px] left-[812px]">
          <img
            className="absolute w-[304px] h-[267px] top-[506px] left-[266px] object-cover"
            alt="Element"
            src="/10-1.png"
          />

          <div className="absolute w-[556px] h-[683px] top-0 left-0">
            <Card className="absolute w-[542px] h-[356px] top-0 left-0 bg-[#65656533] rounded-[20px] border-0">
              <CardContent className="p-0 relative">
                <p className="absolute w-[177px] top-[73px] left-[42px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-xl tracking-[0] leading-[normal]">
                  Ranking amongst the top educational institutes in India, our
                  university adds a key ingredient in realising our vision.
                </p>

                <h3 className="absolute w-[379px] top-[23px] left-[42px] [font-family:'Inter',Helvetica] font-bold text-[#ffffffd9] text-2xl tracking-[0] leading-[normal]">
                  LEGACY
                </h3>

                <img
                  className="absolute w-[316px] h-[270px] top-12 left-[217px] object-cover"
                  alt="Element"
                  src="/9-1.png"
                />
              </CardContent>
            </Card>

            <Card className="absolute w-[542px] h-[233px] top-[380px] left-0 bg-[#65656533] rounded-[20px] border-0">
              <CardContent className="p-0 relative">
                <h3 className="absolute top-[45px] left-[42px] [font-family:'Inter',Helvetica] font-bold text-[#ffffffd9] text-2xl tracking-[0] leading-[normal]">
                  IMPACTFUL IDEAS
                </h3>

                <p className="absolute w-[442px] top-[90px] left-[42px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-xl tracking-[0] leading-[normal]">
                  We strive to bring forward powerful ideas that challenge the
                  norms and carry the potential to transform lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <img
          className="absolute w-[75px] h-[5px] top-[4144px] left-[536px]"
          alt="Line"
          src="/line-7.svg"
        />

        {/* Our Speakers Section */}
        <section className="absolute w-[1123px] h-[635px] top-[4158px] left-[162px]">
          <Card className="absolute w-[456px] h-[530px] top-[105px] left-0 bg-[#141414] rounded-[30px] border border-solid border-black">
            <CardContent className="p-0 relative">
              <img
                className="absolute w-[394px] h-[484px] top-[45px] left-[30px]"
                alt="Untitled x"
                src="/untitled--1000-x-1200-px---8--1.png"
              />
            </CardContent>
          </Card>

          <h2 className="absolute top-0 left-[374px] [font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
            OUR SPEAKERS
          </h2>

          <img
            className="absolute w-[584px] h-[3px] top-[402px] left-[533px] object-cover"
            alt="Line"
            src="/line-10.svg"
          />

          <p className="absolute w-[420px] top-[428px] left-[635px] [font-family:'Inter',Helvetica] font-normal text-[#fffdfda6] text-2xl tracking-[0] leading-[normal]">
            Stay Tuned To Know Our Speaker
          </p>

          <h3 className="absolute w-[582px] h-[102px] top-[278px] left-[533px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-[42px] text-center tracking-[0] leading-[normal]">
            Meet The Minds Shaping Our Future
          </h3>
        </section>

        <div className="absolute w-[391px] h-[62px] top-[5064px] left-[525px]">
          <img
            className="absolute w-[75px] h-[5px] top-0 left-0.5"
            alt="Line"
            src="/line-7.svg"
          />

          <h2 className="absolute top-1 left-0 [font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
            PAST SPEAKERS
          </h2>
        </div>

        {/* Past Speakers Section */}
        <section className="absolute w-[705px] h-[646px] top-[5158px] left-0">
          <div className="absolute w-[334px] h-[334px] top-0 left-0 rounded-[29826200px] blur-[60px] bg-blend-difference bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-[0.53]" />

          <div className="absolute w-[386px] h-[386px] top-[181px] left-[167px] bg-[#d9d9d9] rounded-[193px]" />

          <div className="absolute w-[99px] h-[99px] top-[94px] left-[518px] bg-[#d9d9d9] rounded-[49.5px]" />

          <div className="absolute w-[99px] h-[99px] top-[221px] left-[600px] bg-[#d9d9d9] rounded-[49.5px]" />

          <div className="absolute w-[99px] h-[99px] top-[375px] left-[606px] bg-[#d9d9d9] rounded-[49.5px]" />

          <div className="absolute w-[99px] h-[99px] top-[518px] left-[517px] bg-[#d9d9d9] rounded-[49.5px]" />

          <img
            className="absolute w-[211px] h-[576px] top-[70px] left-[457px]"
            alt="Vector"
            src="/vector-1.svg"
          />
        </section>

        <h3
          className="absolute top-
[5282px] left-[810px] [font-family:'Inter',Helvetica] font-bold text-[#e53e3e] text-[46px] tracking-[0] leading-[normal]"
        >
          ARJUN MALHOTRA
        </h3>

        <p className="absolute w-[503px] top-[5445px] left-[789px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-2xl tracking-[0] leading-[normal]">
          &#34;breaking Barriers In Rural Education&#34;
        </p>

        <div className="top-[5491px] left-[789px] text-2xl absolute [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] tracking-[0] leading-[normal]">
          TEDXNITKSURATHKAL 2022
        </div>

        <img
          className="absolute w-0.5 h-[188px] top-[5444px] left-[767px]"
          alt="Line"
          src="/line-1.svg"
        />

        <div className="absolute w-[670px] h-[353px] top-[5562px] left-[789px]">
          <div className="absolute w-[334px] h-[334px] top-[19px] left-[336px] rounded-[29826200px] blur-[60px] bg-blend-difference bg-[linear-gradient(180deg,rgba(230,43,30,0.35)_0%,rgba(128,24,17,0.35)_100%)] opacity-[0.53]" />

          <Button className="absolute w-[53px] h-[53px] top-[148px] left-[407px] bg-[#d9d9d9] rounded-[26.5px] p-0 h-auto">
            <img
              className="w-[33px] h-[33px]"
              alt="Arrow forward"
              src="/arrow-forward.svg"
            />
          </Button>

          <Button className="absolute w-[53px] h-[53px] top-[147px] left-[330px] bg-[#d9d9d9] rounded-[26.5px] rotate-180 p-0 h-auto">
            <img
              className="w-[33px] h-[33px]"
              alt="Arrow forward"
              src="/arrow-forward-1.svg"
            />
          </Button>

          <p className="absolute w-[572px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-2xl tracking-[0] leading-[normal]">
            Innovation Is Meaningless Unless It Reaches Everyone.
          </p>
        </div>

        <div className="absolute top-[5348px] left-[839px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-[28px] tracking-[0] leading-[normal]">
          {" "}
          Founder Of Edureach India
        </div>

        <img
          className="absolute w-[75px] h-[5px] top-[6056px] left-[560px]"
          alt="Line"
          src="/line-7.svg"
        />

        {/* A Tribute Section */}
        <section className="absolute w-[344px] top-[6061px] left-[517px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[normal]">
            A TRIBUTE
          </h2>
        </section>

        <div className="absolute w-[708px] top-[6164px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-[22px] tracking-[0] leading-[normal]">
          In Memory of Govind Jeevan
          <br />
          <br />
          The TEDxNITKSurathkal team deeply mourns the loss of Govind Jeevan, a
          bright student of NITK and a long-time member of our core team. Our
          sincerest condolences go out to his family and friends for this
          profound loss.
          <br />
          <br />
          Govind&apos;s journey with TEDxNITKSurathkal spanned multiple
          editions. From Speaker Curation, Website Management, Merchandise, and
          Creative Design in 2019 to leading the 2020 edition themed Mirrors and
          Windows, he brought dedication, creativity, and a vision for
          meaningful impact.
          <br />
          <br />
          He constantly sought ways to make TEDxNITKSurathkal more enriching for
          the community—facilitating interactions between students and speakers,
          brainstorming fresh ideas, and going above and beyond to create better
          experiences. Even during the pandemic, his guidance helped the 2021
          team navigate challenges and stay true to the TEDx spirit.
          <br />
          <br />
          Govind&apos;s passion, leadership, and unique perspective will be
          remembered and cherished. His legacy will continue to inspire us for
          years to come.
          <br />
          <br />
          May he rest in peace.
          <br />
          <br />
          Team TEDxNITKSurathkal
        </div>

        <img
          className="absolute w-[533px] h-[784px] top-[6160px] left-[842px] object-cover"
          alt="Govind jeevan"
          src="/govind-jeevan-1.png"
        />

        <img
          className="absolute w-[121px] h-0.5 top-[7229px] left-[232px]"
          alt="Line"
          src="/line-2.svg"
        />

        <img
          className="absolute w-[121px] h-0.5 top-[7229px] left-[1086px]"
          alt="Line"
          src="/line-2.svg"
        />

        <h2 className="absolute top-[7130px] left-[234px] [font-family:'Actor',Helvetica] font-normal text-white text-5xl text-center tracking-[0] leading-[normal]">
          Upcoming Events? Theme Reveal? Speaker List?
        </h2>

        <p className="absolute top-[7205px] left-[366px] [font-family:'Actor',Helvetica] font-normal text-transparent text-[34.9px] text-center tracking-[0] leading-[normal]">
          <span className="text-white">Sign up below to receive latest </span>

          <span className="text-[#ff2b06]">TEDx NITK</span>

          <span className="text-white"> news</span>
        </p>

        <img
          className="absolute w-[601px] h-[555px] top-[7350px] left-[410px]"
          alt="Frame"
          src="/frame-1.svg"
        />

        {/* Footer */}
        <footer className="absolute w-[1440px] h-[406px] top-[8036px] left-0 bg-[#161616]">
          <img
            className="absolute w-[249px] h-[88px] top-[62px] left-[49px]"
            alt="Image"
            src="/image-2.png"
          />

          <div className="absolute top-[367px] left-[283px] [font-family:'Inter',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[normal]">
            <span className="text-white">
              Copyright © 2025 All rights reserved | Made with by
              TEDxNITKSurathkal &amp;{" "}
            </span>

            <a
              href="https://colorlib.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-white underline">Colorlib</span>
            </a>

            <span className="text-white">
              {" "}
              | This independent TEDx event is operated under license from{" "}
            </span>

            <a
              href="https://www.ted.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-white underline">TED</span>
            </a>

            <span className="text-white">.</span>
          </div>

          <p className="absolute w-[341px] top-[124px] left-[408px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            We&#39;re on your favourite social media networks! Follow us on:
          </p>

          <p className="absolute w-[243px] top-[178px] left-[66px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-lg tracking-[0] leading-[normal]">
            Fostered by the vision of serving the student community with the
            most innovative and inspiring ideas.
          </p>

          <h3 className="absolute top-[71px] left-[409px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
            Spread the LOVE
          </h3>

          <h3 className="absolute top-[65px] left-[1061px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
            Gallery
          </h3>

          <img
            className="absolute w-[262px] h-12 top-[201px] left-[408px]"
            alt="Frame"
            src="/frame.svg"
          />

          <div className="inline-flex flex-col items-start gap-[24.46px] absolute top-[67px] left-[758px]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#f7fafc] text-2xl tracking-[0] leading-7 whitespace-nowrap">
              Contact
            </h3>

            <div className="flex flex-col items-start justify-center gap-3 pl-[0.44px] pr-[132.33px] pt-0 pb-[0.46px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-light text-[#a0aec0] text-base leading-6 whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0]">
                NITK Surathkal
              </div>

              <div className="relative w-fit [font-family:'Inter',Helvetica] font-light text-[#a0aec0] text-base tracking-[0] leading-6 whitespace-nowrap">
                Karnataka, India
              </div>

              <div className="relative w-fit [font-family:'Inter',Helvetica] font-light text-[#a0aec0] text-base tracking-[0] leading-6 whitespace-nowrap">
                tedx@nitk.edu.in
              </div>

              <div className="relative w-fit [font-family:'Inter',Helvetica] font-light text-[#a0aec0] text-base tracking-[0] leading-6 whitespace-nowrap">
                +91 824 247 3000
              </div>
            </div>
          </div>

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-[90px] h-16 ${image.className} bg-[#d9d9d9]`}
            />
          ))}
        </footer>
      </div>
    </div>
  );
};
