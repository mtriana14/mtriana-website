import { useEffect, useRef } from 'react';
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectRefs = useRef([]); // Array to hold references to project items

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp'); // Add animation class
          observer.unobserve(entry.target); // Stop observing after it's animated
        }
      });
    }, options);

    // Attach observer to each project item
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup the observer on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-6xl" style={{ color: '#2e1065' }}>
        Projects
      </h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            ref={el => projectRefs.current[index] = el} // Assigning ref to each project item
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 mt-8 font-semibold text-4xl text-purple-400 text-left">
                {project.title}
              </h6>
              <p className="mt-8 text-2xl text-left" style={{ color: '#500724' }}>
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
