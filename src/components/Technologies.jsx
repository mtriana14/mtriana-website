import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiCplusplus } from 'react-icons/si';

const Technologies = () => {
    const [isVisible, setIsVisible] = useState(false); // State to track visibility
    const technologiesRef = useRef(null); // Ref for the technologies section
    const itemsRef = useRef([]); // Ref for technology items

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Set visible to true when in view
                    } else {
                        setIsVisible(false); // Reset visibility when out of view
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (technologiesRef.current) {
            observer.observe(technologiesRef.current); // Observe the technologies section
        }

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
        };
    }, []);

    // Function to add items to the itemsRef
    const addToRef = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <div ref={technologiesRef} className="technologies-section text-center py-0">
            {/* Title for Technologies */}
            <h2 className="text-5xl font-bold mb-20" style={{ color: '#2e1065' }}>
                Technologies and Languages
            </h2>

            {/* Technologies Content */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <FaHtml5 className="mx-auto text-6xl" style={{ color: '#E34F26' }} />, label: 'HTML' },
                    { icon: <FaCss3Alt className="mx-auto text-6xl" style={{ color: '#1572B6' }} />, label: 'CSS' },
                    { icon: <FaJsSquare className="mx-auto text-6xl" style={{ color: '#F7DF1E' }} />, label: 'JavaScript' },
                    { icon: <FaReact className="mx-auto text-6xl" style={{ color: '#61DAFB' }} />, label: 'React' },
                    { icon: <FaNode className="mx-auto text-6xl" style={{ color: '#339933' }} />, label: 'Node.js' },
                    { icon: <SiCplusplus className="mx-auto text-6xl" style={{ color: '#00599C' }} />, label: 'C++' },
                    { icon: <SiMongodb className="mx-auto text-6xl" style={{ color: '#47A248' }} />, label: 'MongoDB' },
                    { icon: <SiTailwindcss className="mx-auto text-6xl" style={{ color: '#38B2AC' }} />, label: 'Tailwind CSS' },
                ].map((item, index) => (
                    <div
                        key={item.label}
                        ref={addToRef} // Attach each item to the ref
                        className={`tech-item ${isVisible ? 'fadeInUp' : 'opacity-0 translate-y-10'} transition-opacity transition-transform duration-500`}
                    >
                        {item.icon}
                        <p className="text-lg mt-2" style={{ color: '#082f49' }}>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
