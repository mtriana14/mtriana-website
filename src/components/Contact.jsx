import { CONTACT } from "../constants"; // Ensure the path is correct
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons
import Graph from './Graph'; // Import the Graph component

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-[#E9F1F5] to-[#C9EBFF] border-b border-l-black pb-20 flex flex-col items-center p-8 rounded-lg shadow-lg">
            <h1 className="my-10 text-center text-4xl font-bold" style={{ color: '#082f49' }}>
                Get in Touch!
            </h1>
            <div className="flex flex-col items-center">
                {/* Changed text color to black */}
                <p className="flex items-center my-4 text-center border-b-2 border-[#082f49] text-black"> {/* Added blue border to address */}
                    <FaMapMarkerAlt className="mr-2 text-[#082f49] text-xl" /> {/* Location icon */}
                    {CONTACT.address}
                </p>
                <p className="flex items-center border-b-2 border-[#082f49] text-center mb-4 text-black"> {/* Changed the border color for email */}
                    <FaEnvelope className="mr-2 text-[#082f49] text-xl" /> {/* Email icon */}
                    {CONTACT.email}
                </p>
            </div>
            <a 
                href={`mailto:${CONTACT.email}`} 
                className="mt-4 bg-[#082f49] text-white py-2 px-4 rounded hover:bg-[#0A2A4D] transition duration-300"
            >
                Send a Message
            </a>

            {/* Include the Graph component */}
            <div className="mt-10 w-full">
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#082f49' }}>
                    
                </h2>
                <Graph /> {/* Render the 3D graph */}
            </div>
        </div>
    );
}

export default Contact;
