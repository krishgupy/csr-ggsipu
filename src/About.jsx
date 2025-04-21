import React from 'react';

const ThreeImageSection = () => {
  return (
    <>
      {/* Section Title */}
      <div className="font-poppins select-none font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center my-6 text-white">
        About Us
      </div>

      {/* Main Section */}
      <section id="three-image-section" className="bg-custom-color mx-4 sm:mx-8 rounded-lg py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="font-poppins text-3xl select-none sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Welcome to CSR Club EDC
          </h2>

          {/* Paragraph */}
          <div className="flex justify-center">
            <p className="font-poppins select-none font-bold text-base sm:text-lg text-gray-700 text-center max-w-3xl mb-8">
              The Corporate Social Responsibility (CSR) Club comes under the umbrella of Srijan with the
              objective of promoting citizenship values vital for sustainable development among the students
              of the University. Students can take initiatives in teaching wards of housekeeping staff, guards
              and other employees of the university enabling them in improving their academic performance
              in critical subjects like Maths, English etc. Besides teaching, student volunteers can develop
              and maintain a library, stationary material, and other teaching aids for their overall growth.
            </p>
          </div>

          {/* Mission Card and Grid of Cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-12 lg:gap-20">
            {/* Mission Card */}
            <div className="bg-box-color p-6 sm:p-8 rounded-2xl shadow-lg w-full lg:w-1/3">
              <h3 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800  select-none mb-6 underline underline-offset-2">Our Mission</h3>
              <p className=" select-none font-poppins text-base sm:text-lg text-gray-600">
                Our mission is to cultivate a sense of responsibility towards the environment
                among our members and the larger community. We aim to collaborate with
                environmental organizations, engage in research, and work on initiatives that
                create a positive impact.
                <br />
                <br />
                Join us as we embark on this journey to reconnect with nature, learn from it, and take meaningful steps toward building a greener, cleaner, and more sustainable future. Together, let's be the change the world needs!
              </p>
            </div>

            {/* Grid for Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-2/3">
              {/* Card 1 */}
              <div className="group relative h-[20rem] sm:h-[28rem] w-full transform transition-transform duration-500 hover:scale-105 rounded-2xl overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/024/472/833/non_2x/green-earth-day-on-isolated-white-background-care-for-the-environment-and-ecology-resources-that-are-sustainable-renewable-and-green-graphic-resource-generative-ai-free-photo.jpg"
                  alt="Mission Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg">
                  <p className="font-poppins text-white select-none text-xl sm:text-2xl font-bold mb-4">Sustainability</p>
                  <p className="font-poppins text-white select-none text-sm sm:text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    We are committed to promoting sustainable practices and reducing our
                    environmental footprint.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative h-[20rem] sm:h-[28rem] w-full transform transition-transform duration-500 hover:scale-105 rounded-2xl overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg"
                  alt="Mission Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg">
                  <p className="font-poppins text-white select-none text-xl sm:text-2xl font-bold mb-4">Community</p>
                  <p className="font-poppins text-white select-none text-sm sm:text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    We strive to build a strong community that works together for a better
                    future.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative h-[20rem] sm:h-[28rem] w-full transform transition-transform duration-500 hover:scale-105 rounded-2xl overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/03/23/82/99/360_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"
                  alt="Mission Image 3"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg">
                  <p className="font-poppins text-white text-xl select-none sm:text-2xl font-bold mb-4">Innovation</p>
                  <p className="font-poppins text-white text-sm select-none sm:text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    We encourage innovative solutions to tackle environmental challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeImageSection;