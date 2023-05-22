import React, { useState,useEffect } from "react";

// import components
import Banner from "./Components/Banner";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import NavMobile from "./Components/NavMobile";
import Video from "./Components/Video";
import Headset from './Components/Headsets'
import Testimonial from "./Components/Testimonial";
import Explore from './Components/Explore'

// import aos (animate on scroll)
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  const [navMobile, setNavMobile] = useState(false);
  // aos initialization
  useEffect(()=>{
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  })
    return (
      <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
        <Header setNavMobile={setNavMobile} />
        <Banner />
        {/* mobile nav */}
        <div
          className={`${
            navMobile ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-48 transition-all`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        <Experience />
        <Video />
        <Headset />
        <Testimonial />
        <Explore />
    </div>
  );
}

export default App;
