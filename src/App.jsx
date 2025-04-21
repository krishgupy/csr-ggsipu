import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import EventPage from './EventPage';
import ThreeImageSection from './About';
import TeacherCard from './Teachers';
import OfficeBearersCard from './Officebearers';
import Footer from './Footer';
import ClubTeams from './clubteams';
import Navbar from './Navbar';
import IntroPage from './intro';
function App() {
  const [count, setCount] = useState(0);
  const officeBearersData = [
    {
      name:"Fahed Ahmed",
      designation:"President",
      photo:"fahed.png",
      about:"Leader of compassion and change, our President, Fahed, stands strong and wise, with a heart for service and a vision to rise.",
      linkedin:"https://www.linkedin.com/in/fahed-ahmad/",
      instagram:"https://www.instagram.com/fahed_.14/",
      whatsapp:"https://api.whatsapp.com/send/?phone=%2B919971937275&text&type=phone_number&app_absent=0",
    },
    {
      name:"Kavleen Kaur",
            designation:"Vice President",
            photo:"kavleen.png",
            about:"Champion of kindness, a beacon so bright, our Vice President, Kavleen, guides with insight, rooted in purpose, reaching for the light.",
            linkedin:"https://www.linkedin.com/in/kavleen-kaur-b93305270/",
            instagram:"https://www.instagram.com/kavleenspeaks/",
            whatsapp:"https://api.whatsapp.com/send/?phone=%2B919671455028&text&type=phone_number&app_absent=0",
    },
    {
      name:"Deekshant Tilwani",
      designation:"Secretary",
      photo:"deekshant.png",
      about:"Keeper of order, with a steady hand, our Secretary, Deekshant, helps us understand, with clarity and purpose, they lead the way, ensuring our mission shines bright every day.",
      linkedin:"https://www.linkedin.com/in/deekshant-tilwani/",
      instagram:"https://www.instagram.com/deekshant_9/",
      whatsapp:"https://api.whatsapp.com/send/?phone=%2B917014913931&text&type=phone_number&app_absent=0",
    },
    {
      name:"Ankit",
            designation:"Joint Secretary",
            photo:"ankit.png",
            about:"Bridge of collaboration, strong and sincere, our Joint Secretary, Ankit, brings ideas near, with a heart for teamwork and a vision so grand, they unite us all, hand in hand.",
            linkedin:"https://www.linkedin.com/in/ankit-parihar-666543293/",
            instagram:"https://www.instagram.com/ankitzthakur/",
            whatsapp:"https://api.whatsapp.com/send/?phone=%2B917217756273&text&type=phone_number&app_absent=0",
    },
    {
      name:"Bikash",
            designation:"Treasurer",
            photo:"bikash.png",
            about:"Guardian of resources, steady and true, our Treasurer, Bikash, ensures every plan comes through, with wisdom in numbers and a vision so clear, they guide us forward, year after year.",
            linkedin:"https://www.linkedin.com/in/bikash-kumar-040598229/",
            instagram:"https://www.instagram.com/vikash_kr_th/",
            whatsapp:"https://api.whatsapp.com/send/?phone=%2B919508644616&text&type=phone_number&app_absent=0",
    },
  ];
  return (
    <>
      
      <Navbar/>
      
      <section id='home'>
      <IntroPage />
      </section>
      
      <section id='about'>
      <ThreeImageSection />
      </section>
      <section id='events'>
      <EventPage />
      </section>
      <section id='mentors'>
      <div className='text-4xl font-bold text-center mt-8 select-none text-white mb-8 font-poppins'>Our Faculty Mentors</div>

      <div className="min-h-screen rounded-2xl select-none bg-custom-color flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins">
          {/* Example usage of TeacherCard */}
          <TeacherCard
            name="Dr. Arti Singh"
            photo="arti_mam2.png"
            teachings={[
              "Probability and Statistics",
              "Optimization techniques",
              "Financial Mathematics"
            ]}
            achievements={[
              "Awarded NPDF-SERB (National Post-Doctoral Fellowship - Science and Engineering Research Board)",
              "Received Prof. M. C. Puri Gold Medal for securing highest C.G.P.A. in M.Sc. Mathematics from Indian Institute of Technology Delhi.",
              "Achieved CSIR (Council for Scientific and Industrial Research)-JRF (Junior Research Fellowship) with All India Rank 147",
              "Achieved GATE (Graduate Aptitude Test for Engineering) fellowship in Mathematical Sciences, 2013 with All India Rank 5"
            ]}
          />
          <TeacherCard
            name="Dr. Ruchika Sehgal"
            photo="ruchika_mam2.png"
            teachings={["Foundation of Computer Science", "Convex Optimization", "Numerical Analysis"]}
            achievements={[
              "Received 'Excellent teaching feedback' in the course-Computed Oriented Numerical Methods with General Impression about Teacher at IIT(ISM) Dhanbad",
              "Awarded with Research Excellence Travel Award (RETA) by IIT Delhi",
              "All India GATE Mathematics Rank-14(2015)",
              "All India JRF Rank- 73 (June, 2015)"
            ]}
          />
          <TeacherCard
            name="Dr. Deekshali Anand"
            photo="deekshali_mam.png.jpeg"
            teachings={["Architecture Design", "Human Factors in Design", "Contextual Research Methods"]}
            achievements={[
              "Exhibition of toilet projects in Bill and Melissa Gate’s Foundation held at Hotel Taj Palace",
              "Design work published by S.P.A, Delhi in A+D magazine",
              "Award for Toilet projects by 'Washrooms and Beyond 2013' at Trident, Mumbai.",
              "Shortlisted for Grand Finale in TOYCATHON 2021"
            ]}
          />
        </div>
      </div>
      </section>

      {/* <div className='text-4xl text-white font-poppins font-bold text-center mt-8 mb-8'>Meet Our Office Bearers</div>
      <div className="min-h-screen bg-bg-color flex items-center justify-center p-6 font-poppins">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Example usage of OfficeBearersCard */}
          {/* <OfficeBearersCard
            name="Fahed Ahmed"
            designation="President"
            photo="fahed.png"
            about="Leader of compassion and change, our President, Fahed, stands strong and wise, with a heart for service and a vision to rise."
            linkedin="https://www.linkedin.com/in/fahed-ahmad/"
            instagram="https://www.instagram.com/fahed_.14/"
            whatsapp="https://api.whatsapp.com/send/?phone=%2B919971937275&text&type=phone_number&app_absent=0"
          />
          <OfficeBearersCard
            name="Kavleen Kaur"
            designation="Vice President"
            photo="kavleen.png"
            about="Champion of kindness, a beacon so bright, our Vice President, Kavleen, guides with insight, rooted in purpose, reaching for the light."
            linkedin="https://www.linkedin.com/in/kavleen-kaur-b93305270/"
            instagram="https://www.instagram.com/kavleenspeaks/"
            whatsapp="https://api.whatsapp.com/send/?phone=%2B919671455028&text&type=phone_number&app_absent=0"
          />
          <OfficeBearersCard
            name="Deekshant Tilwani"
            designation="Secretary"
            photo="deekshant.png"
            about="Keeper of order, with a steady hand,
our Secretary, Deekshant, helps us understand,
with clarity and purpose, they lead the way,
ensuring our mission shines bright every day."
            linkedin="https://www.linkedin.com/in/deekshant-tilwani/"
            instagram="https://www.instagram.com/deekshant_9/"
            whatsapp="https://api.whatsapp.com/send/?phone=%2B917014913931&text&type=phone_number&app_absent=0"
          />
          <OfficeBearersCard
            name="Ankit"
            designation="Joint Secretary"
            photo="ankit.png"
            about="Bridge of collaboration, strong and sincere, our Joint Secretary, Ankit, brings ideas near, with a heart for teamwork and a vision so grand, they unite us all, hand in hand."
            linkedin="https://www.linkedin.com/in/ankit-parihar-666543293/"
            instagram="https://www.instagram.com/ankitzthakur/"
            whatsapp="https://api.whatsapp.com/send/?phone=%2B917217756273&text&type=phone_number&app_absent=0"
          />
          <OfficeBearersCard
            name="Bikash"
            designation="Treasurer"
            photo="bikash.png"
            about="Guardian of resources, steady and true, our Treasurer, Bikash, ensures every plan comes through, with wisdom in numbers and a vision so clear, they guide us forward, year after year."
            linkedin="https://www.linkedin.com/in/bikash-kumar-040598229/"
            instagram="https://www.instagram.com/vikash_kr_th/"
            whatsapp="https://api.whatsapp.com/send/?phone=%2B919508644616&text&type=phone_number&app_absent=0"
          />
        </div>
      </div> */} 
      <section id="team">

      
      <div className='text-4xl select-none text-white font-poppins font-bold text-center mt-8 mb-8'>Meet Our Office Bearers</div>
    <div className="p-8 select-none bg-custom-color font-poppins rounded-2xl">
    
      <OfficeBearersCard officeBearers={officeBearersData} />

    </div>
    </section>
      
      <ClubTeams />
      <section id='contact'>
      <Footer/>
      </section>

    </>
  );
}

export default App;