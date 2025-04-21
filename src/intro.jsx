import React from "react";

const IntroPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-start items-start bg-custom-color rounded-2xl text-black p-4 sm:p-8 pt-32" // Adjusted pt-32 to account for navbar height
      style={{
        backgroundImage: `url('bg1.png.png')`, // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >    
      {/* Subheading */}
      <p className="text-xl sm:text-2xl  select-none font-semibold font-poppins mt-20">
        WELCOME TO CORPORATE SOCIAL RESPONSIBILITY CLUB | EDC
      </p>

      {/* Yellow Divider */}
      <div className="bg-yellow-col w-48 sm:w-64 h-2 sm:h-3 mb-6 sm:mb-10 font-poppins"></div>

      {/* Paragraph Text */}
      <p className="text-base sm:text-lg max-w-2xl   select-none mb-6 sm:mb-8 font-poppins">
        The Corporate Social Responsibility (CSR) Club is all about making a real difference. We’re a group of passionate individuals who believe in doing good while doing business. Whether it’s supporting local communities, protecting the environment, or promoting ethical practices, we’re here to take action and inspire others to join us. Together, we can create a brighter, more sustainable future for everyone. Let’s make an impact that matters!
      </p>
    </div>
  );
};

export default IntroPage;