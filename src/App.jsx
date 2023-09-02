import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion

function App() {
  const [theme, setTheme] = useState(null);
  const controls = useAnimation(); // Animation controller

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to start continuous animation
  const startContinuousAnimation = async () => {
    while (true) {
      await controls.start({
        x: 100,
        transition: { duration: 4, ease: "easeInOut" },
      });
      await controls.start({
        x: 0,
        transition: { duration: 4, ease: "easeInOut" },
      });
    }
  };

  useEffect(() => {
    startContinuousAnimation();
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen font-inter">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-6 top-6 bg-blue-600 dark:bg-orange-500 text-lg p-1 rounded-full"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div className="max-w-5xl w-11/12 mx-auto">
       
        <nav className="bg-gray-800 text-white py-4">
          <div className="max-w-5xl w-11/12 mx-auto flex justify-center space-x-8">
            <a
              href="#intro"
              onClick={() => scrollToSection("intro")}
              className="hover:text-blue-400 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-blue-400 cursor-pointer"
            >
              Portfolio
            </a>
            <a
              href="#timeline"
              onClick={() => scrollToSection("timeline")}
              className="hover:text-blue-400 cursor-pointer"
            >
              Timeline
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </nav>
        <section id="intro">
          <Intro name="Luis Miguel Echeverry" />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <Contact />
        </section>
        <Footer />

        {/* Animated phrase with Framer Motion and Tailwind CSS */}
        <motion.div
          animate={controls} // Use the animation controller
          className="bg-black text-white py-2 px-4 text-center mt-6 rounded-full"
        >
          <p className="text-sm">Thanks for visiting my website!</p>
        </motion.div>
        {/* End of the animated phrase */}
      </div>
    </div>
  );
}

export default App;
