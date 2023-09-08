import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > window.scrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollVariants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 20 : -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuVariants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const introVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const portfolioVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const contactVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <div className={`relative bg-white ${theme === "dark" ? "dark:bg-gray-900" : ""} text-gray-800 ${theme === "dark" ? "dark:text-gray-100" : ""} min-h-screen font-inter`}>
      {/* Contenido principal */}
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro variants={introVariants} />
        <Portfolio variants={portfolioVariants} />
        <Timeline variants={timelineVariants} />
        <Contact variants={contactVariants} />
        <Footer />
      </div>

      <motion.div
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-md ${menuOpen ? "" : "hidden"}`}
        variants={menuVariants}
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
      >
        <div className="flex justify-between items-center">
          {/* Logotipo del menú */}
          <div className="block text-gray-800 dark:text-gray-100 text-xl font-bold mx-2">Menú</div>
          <div className="flex space-x-4 items-center">
            <button
              className="text-2xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              🏠
            </button>
            <button
              className="text-2xl"
              onClick={() => window.scrollTo({ top: document.querySelector("#portfolio").offsetTop, behavior: "smooth" })}
            >
              📚
            </button>
            <button
              className="text-2xl"
              onClick={() => window.scrollTo({ top: document.querySelector("#Timeline").offsetTop, behavior: "smooth" })}
            >
              📆
            </button>
            <button
              className="text-2xl"
              onClick={() => window.scrollTo({ top: document.querySelector("#Contact").offsetTop, behavior: "smooth" })}
            >
              ✉️
            </button>
          </div>
        </div>
      </motion.div>

      {/* Botón para abrir/cerrar el menú */}
      <button
        className="fixed bottom-10 right-4 p-4 rounded-full bg-gray-800 text-white hover:bg-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? "Cerrar" : "Menú"}
      </button>
    </div>
  );
}

export default App;
