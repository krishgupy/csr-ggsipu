import React from "react";

const TeacherCard = ({ name, photo, teachings, achievements }) => {
  return (
    <div className="bg-box-color rounded-2xl shadow-lg overflow-hidden w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Photo Section */}
      <div className="flex justify-center mt-6">
        <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden">
          <img
            className="w-full h-full object-cover" // Circular photo with black border
            src={photo}
            alt={name}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>

        {/* Teachings Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Teachings</h3>
          <ul className="list-disc list-inside text-gray-600 inline-block text-left">
            {teachings.map((teaching, index) => (
              <li key={index}>{teaching}</li>
            ))}
          </ul>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Achievements</h3>
          <ul className="list-disc list-inside text-gray-600 inline-block text-left">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;