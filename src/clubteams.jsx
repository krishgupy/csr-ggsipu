import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

function ClubTeams() {
  // State to track the active team
  const [activeTeam, setActiveTeam] = useState(null);

  // Team data
  const teams = [
    {
      id: 1,
      name: "Management Team",
      icon: "team.png", // Path to your .png image
      description: "The Management Team handles the overall operations, planning, and coordination of the club.",
      members: [
        { name: "Shashwat Tiwari", designation: "Lead", photo: "management1.png.jpeg" },
        { name: "Abhijith", designation: "Co-Lead", photo: "management2.png.jpeg" },
        { name: "Shonal", designation: "Executed Member", photo: "shonal.png.png" },
        { name: "kartik", designation: "Executed Member", photo: "management4.png.jpeg" },
      ],
    },
    {
      id: 2,
      name: "Content and PR Team",
      icon: "public-relation.png", // Path to your .png image
      description: "The Content and PR Team is responsible for creating engaging content and managing public relations.",
      members: [
        { name: "Kardam", designation: "Lead", photo: "pr1.png.jpeg" },
        { name: "Sachin", designation: "Co-Lead", photo: "pr2.png.jpeg" },
      ],
    },
    {
      id: 3,
      name: "Tech Team",
      icon: "connection.png", // Path to your .png image
      description: "The Tech Team develops and maintains the club's technical infrastructure and digital presence.",
      members: [
        { name: "Krish Gupta", designation: "Web Admin", photo: "krish.png.jpeg" },
      ],
    },
    {
      id: 4,
      name: "Graphics and Design Team",
      icon: "vector.png", // Path to your .png image
      description: "The Graphics and Design Team creates visual content, including posters, logos, and social media graphics.",
      members: [
        { name: "Achint Kaur", designation: "Lead", photo: "desgin1.png.jpeg" },
        { name: "Arman", designation: "Co-Lead", photo: "design2.png.jpeg" },
        { name: "Devanshu", designation: "Executive-Member", photo: "design2=3.png.jpeg" },
        { name: "Shruti", designation: "Executive-Member", photo: "design4.png.jpeg" },
      ],
    },
  ];

  // Handle team card click
  const handleTeamClick = (team) => {
    setActiveTeam(activeTeam?.id === team.id ? null : team);
  };

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 font-poppins select-none text-white mt-8">Club Teams</h1>
      <div className="p-4 sm:p-8 min-h-screen rounded-2xl bg-custom-color">
        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teams.map((team) => (
            <motion.div
              key={team.id}
              className="p-4 sm:p-6 bg-box-color font-poppins rounded-lg shadow-md cursor-pointer"
              onClick={() => handleTeamClick(team)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Team Icon (PNG Image) */}
              <div className="flex justify-center mb-4">
                <img
                  src={team.icon} // Use the .png image path
                  alt={team.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain" // Adjust size as needed
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-2">{team.name}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center">{team.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Display Active Team Members */}
        {activeTeam && (
          <motion.div
            className="mt-8 p-4 sm:p-6 bg-bg-color rounded-lg shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">{activeTeam.name} Members</h3>
            <div
              className={`grid gap-4 sm:gap-6 ${
                activeTeam.members.length === 1
                  ? "grid-cols-1 justify-center" // Center for 1 member
                  : activeTeam.members.length === 2
                  ? "grid-cols-1 sm:grid-cols-2 justify-center" // Center for 2 members
                  : activeTeam.members.length === 4
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // 3 columns for 4 members
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // Default for 3+ members
              }`}
            >
              {activeTeam.members.map((member, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center text-center bg-box-color p-4 rounded-lg shadow-md cursor-pointer ${
                    activeTeam.members.length === 4 && index === 3 ? "sm:col-start-2" : "" // Center the 4th member
                  }`}
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }} // Hover effect
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-4 border-black" // Added black border
                  />
                  <h4 className="text-lg sm:text-xl font-semibold">{member.name}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{member.designation}</p>
                  {/* Add Instagram and LinkedIn icons for Krish Gupta */}
                  {activeTeam.id === 3 && member.name === "Krish Gupta" && (
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.instagram.com/krishgupta6499/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                      >
                        <FaInstagram className="text-2xl" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/krishgupta04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default ClubTeams;