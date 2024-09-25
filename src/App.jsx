import React from 'react';
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './app.css'; // Ensure CSS is imported

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div>
        {/* Fixed background div */}
        <div className="fixed top-0 -z-10 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>

        <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px), linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>

        <NavBar />
        <Hero />
        <Technologies /> {/* Moved Technologies component here */}
        <Projects /> {/* Ensure Projects component is added here */}
        <Contact /> {/* Added Contact component here */}
      </div>
    </div>
  );
};

export default App;
