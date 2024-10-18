import React, { PropsWithChildren } from "react";
import Header from "./layout/header";
import Hero from "./hero";
import AboutMe from "./layout/about-me"; // AboutMe bileşenini içe aktar
import Projects from "./layout/projects"; // Projects bileşenini içe aktar
import ContactMe from "./layout/contact-me";
import Footer from "./layout/footer";

const Wrapper = () => {
  return (
    <div className="bg-background text-white min-h-screen font-poppins">
      <Header />
      <div className="px-[80px]">
        <Hero />
      </div>
      <div className="mt-10">
        <AboutMe /> {/* AboutMe bileşenini ekle */}
      </div>
      <div className="mt-10">
        <Projects /> {/* Projects bileşenini ekle */}
      </div>
      <div className="mt-10">
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
