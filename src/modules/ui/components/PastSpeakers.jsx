import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PastSpeakers.css';

const speakersData = [
  { id: 1, name: 'ARJUN MALHOTRA', title: 'Founder Of EduReach India', quote: '"Breaking Barriers In Rural Education"', event: 'TEDXNITKSURATHKAL 2022', philosophy: 'Innovation Is Meaningless Unless It Reaches Everyone.', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop', color: '#E62B1E' },
  { id: 2, name: 'PRIYA SHARMA', title: 'AI Ethicist & Author', quote: '"Navigating the Ethical Landscape of AI"', event: 'TEDXNITKSURATHKAL 2023', philosophy: 'Technology must serve humanity, not the other way around.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop', color: '#285AEB' },
  { id: 3, name: 'VIKRAM SINGH', title: 'Sustainable Architect', quote: '"Building a Greener Future"', event: 'TEDXNITKSURATHKAL 2021', philosophy: 'Every structure tells a story of its impact on the planet.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop', color: '#009E60' },
  { id: 4, name: 'ANJALI GUPTA', title: 'Neuroscientist & Educator', quote: '"Unlocking the Brain\'s Potential"', event: 'TEDXNITKSURATHKAL 2020', philosophy: 'Understanding the mind is the first step to empowering it.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3161&auto=format&fit=crop', color: '#D6249F' },
  { id: 5, name: 'ROHAN MEHTA', title: 'Quantum Computing Pioneer', quote: '"The Next Leap in Computation"', event: 'TEDXNITKSURATHKAL 2019', philosophy: 'The impossible is often just the untried.', image: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=3164&auto=format&fit=crop', color: '#6A0DAD' },
];

const PastSpeakers = ( ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSpeaker = speakersData[currentIndex];

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakersData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + speakersData.length) % speakersData.length);
  };

  return (
    <section className="relative bg-black text-white py-20 sm:py-24 px-4 overflow-hidden font-sans min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${currentSpeaker.color}20 0%, transparent 50%)`,
        }}
      />
      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-['Roboto',Helvetica] font-bold text-white text-5xl">PAST SPEAKERS</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative h-[450px] flex items-center justify-center">
            <div className="orbital-container">
              <svg className="arc-path" viewBox="0 0 400 400">
                <path id="arc" fill="none" stroke="url(#arc-gradient)" strokeWidth="2" d="M 200, 0 A 200 200 0 0 1 200, 400" />
                <defs>
                  <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                    <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="active-speaker-image-wrapper">
                <img
                  key={`active-${currentSpeaker.id}`}
                  src={currentSpeaker.image}
                  alt={`Portrait of ${currentSpeaker.name}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="orbiting-speakers">
                {speakersData.map((speaker, index) => (
                  <button
                    key={speaker.id}
                    onClick={() => goToIndex(index)}
                    className={`orbiting-speaker ${currentIndex === index ? 'active' : ''}`}
                    style={{ '--i': index }}
                    aria-label={`Select speaker ${speaker.name}`}
                  >
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover rounded-full" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative text-center lg:text-left min-h-[350px]">
            <div key={currentSpeaker.id} className="speaker-details-container">
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-red-500 mb-2">
                {currentSpeaker.name}
              </h3>
              <p className="text-xl text-gray-300 mb-6">{currentSpeaker.title}</p>
              <div className="border-l-2 border-red-500/50 pl-6 space-y-4">
                <p className="text-2xl font-light italic text-gray-200">
                  {currentSpeaker.quote}
                </p>
                <p className="text-lg text-gray-400">{currentSpeaker.event}</p>
              </div>
              <p className="text-xl text-gray-200 mt-6 pl-6">{currentSpeaker.philosophy}</p>
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:bottom-0 lg:translate-x-0 flex items-center justify-center mt-8 lg:mt-0">
              <div className="flex items-center bg-[#1C1C1C] border border-gray-800 rounded-full p-1 space-x-1">
                <button
                  onClick={goToPrevious}
                  className="p-3 text-gray-400 rounded-full hover:bg-red-500/20 hover:text-white focus:outline-none transition-all duration-300"
                  aria-label="Previous speaker"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 text-gray-400 rounded-full hover:bg-red-500/20 hover:text-white focus:outline-none transition-all duration-300"
                  aria-label="Next speaker"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
