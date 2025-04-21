import React from "react";

const OfficeBearersCard = ({ officeBearers }) => {
  return (
    <div className="bg-box-color rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {officeBearers.map((bearer, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-between items-start ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } ${index > 0 ? "mt-8" : ""}`}
        >
          {/* Photo Section */}
          <div className={`w-full md:w-1/3 flex ${
            index % 2 !== 0 ? "justify-end" : "justify-start" // Align photo to end for second office bearer
          }`}>
            <div className="w-40 h-40 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={bearer.photo}
                alt={bearer.name}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`w-full md:w-2/3 mt-4 md:mt-0 ${
            index % 2 !== 0 ? "md:pr-6" : "md:pl-6" // Consistent gap for content
          }`}>
            {/* Designation */}
            <div className="bg-blue-col p-4 rounded-lg shadow-md w-80">
              <p className="text-lg font-semibold text-left">{bearer.designation}</p>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4 text-left">{bearer.name}</h2>

            {/* About Section */}
            <p className="text-gray-600 text-lg mt-4 text-left">{bearer.about}</p>

            {/* Social Media Icons */}
            <div className={`flex ${
              index % 2 !== 0 ? "justify-start" : "justify-end" // Align icons to start for second office bearer
            } space-x-4 mt-6`}>
              <a
                href={bearer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href={bearer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href={bearer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficeBearersCard;