import React from 'react'; 
import { HERO_CONTENT } from '../constants'; 
import profilePic from "../assets/fotobroma.jpg"; 

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap min-h-screen'>
        {/* Left Side: Text Content */}
        <div className='w-full lg:w-1/2'>
          <div className='p-4 lg:p-6'>
            <p className="text-lg text-blue-600 mb-2">Hi! My name is</p>
            <h1 className="text-5xl lg:text-6xl font-thin tracking-tight" style={{ color: '#082f49' }}>
              Melani Triana
            </h1>
            <span className="text-2xl lg:text-2xl tracking-tight" style={{ color: '#082f49' }}>
              - University Student - Developer -
            </span>
            <p className="my-4 max-w-xl font-light tracking-tighter text-base lg:text-2xl" style={{ color: '#082f49' }}>
              {HERO_CONTENT}
            </p>
            {/* New line of text with shaking animation */}
            <p className="my-2 max-w-xl font-light tracking-tighter text-base lg:text-2xl shake" style={{ color: '#082f49' }}>
              Available for new opportunities
            </p>
            {/* Learn More Button */}
            <a 
              href="#technologies" 
              className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Profile Picture with animation and rounded corners */}
        <div className='w-full lg:w-1/2 flex justify-center items-center h-full'>
          <img 
            src={profilePic} 
            alt="Melani Triana" 
            className='rounded-full animate-slideInRight' 
            style={{ width: '600px', height: '600px' }} // Set size to 600px for a smaller circular image
          />
        </div>
      </div>

      {/* Add Tailwind keyframe animations */}
      <style jsx>{`
        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
        }

        .shake {
          animation: shake 1s infinite; /* Shake for 1 second, repeat infinitely */
        }
      `}</style>
    </div>
  );
}

export default Hero;
