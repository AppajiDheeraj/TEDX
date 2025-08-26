import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// --- DUMMY DATA ---
const pastSpeakers = [
  { name: "ARJUN MALHOTRA", title: "Founder Of EduReach India", talkTitle: "Breaking Barriers In Rural Education", year: 2022, quote: "Innovation Is Meaningless Unless It Reaches Everyone.", imageUrl: "/speaker-arjun.png" },
  { name: "PRIYA SHARMA", title: "Astrophysicist & Author", talkTitle: "The Cosmos Within Us", year: 2021, quote: "We are all made of stardust, connected to the universe.", imageUrl: "/speaker-priya.png" },
  { name: "ROHAN DESAI", title: "AI Ethicist", talkTitle: "The Moral Compass of Machines", year: 2020, quote: "The true test of AI will not be its intelligence, but its humanity.", imageUrl: "/speaker-rohan.png" },
  { name: "ANNA IVANOVA", title: "Bio-Tech Pioneer", talkTitle: "Genetics and the Future of Food", year: 2019, quote: "Sustainable innovation begins at the cellular level.", imageUrl: "/speaker-anna.png" },
];

// --- REACT COMPONENT ---
export default function PastSpeakersFinalCorrected() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? pastSpeakers.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === pastSpeakers.length - 1 ? 0 : prev + 1));

  const activeSpeaker = pastSpeakers[currentIndex];
  const circlePositions = [{ cx: 300, cy: 80 }, { cx: 330, cy: 160 }, { cx: 310, cy: 240 }, { cx: 260, cy: 310 }];

  return (
    <section className="bg-black text-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-red-600"></div>
            <h2 className="text-3xl font-semibold tracking-widest">PAST SPEAKERS</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: The Correct Visual Element */}
          <div className="relative w-full h-96 flex justify-center items-center">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
              {/* Small placeholder circles */}
              {circlePositions.map((pos, index) => (
                <circle key={index} cx={pos.cx} cy={pos.cy} r="25" fill="#D9D9D9" fillOpacity="0.5" />
              ))}
              {/* The highlighted active circle */}
              <circle
                cx={circlePositions[currentIndex].cx}
                cy={circlePositions[currentIndex].cy}
                r="25"
                fill="#D9D9D9"
                stroke="#4299E1"
                strokeWidth="3"
                className="transition-all duration-500 ease-in-out"
              />
              {/* The white curved path on top */}
              <path d="M 280 40 Q 400 160 260 340" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
            {/* Main Speaker Image */}
            <div className="relative w-64 h-64">
              <img
                key={activeSpeaker.imageUrl}
                src={activeSpeaker.imageUrl}
                alt={`Portrait of ${activeSpeaker.name}`}
                className="w-full h-full rounded-full object-cover animate-fade-in"
              />
            </div>
          </div>
          {/* Right Column: Speaker Details */}
          <div className="relative text-center lg:text-left animate-fade-in">
            <h3 className="text-4xl sm:text-5xl font-bold text-red-600">{activeSpeaker.name}</h3>
            <p className="mt-2 text-lg text-gray-400">{activeSpeaker.title}</p>
            <div className="mt-8 space-y-4 text-gray-300">
              <p className="text-xl italic">"{activeSpeaker.talkTitle}"</p>
              <p className="text-sm tracking-wider text-gray-500">TEDxNITKSurathkal {activeSpeaker.year}</p>
              <p className="text-lg text-gray-400 pt-4">{activeSpeaker.quote}</p>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start space-x-4">
              <button onClick={handlePrev} aria-label="Previous" className="bg-[#2D2D2D] hover:bg-white hover:text-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"><FaArrowLeft /></button>
              <button onClick={handleNext} aria-label="Next" className="bg-[#2D2D2D] hover:bg-white hover:text-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"><FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
