import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Intro() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const nameVariants = {
    hidden: {
      color: '#FFD700', // Cambia el color de tu nombre aquí
    },
    visible: {
      color: '#00BFFF', // Cambia el color de tu nombre aquí
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="relative text-white overflow-hidden bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/videolap.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>

      <motion.div className="flex items-center justify-center flex-col text-center pt-20 pb-16 relative z-10">
        <motion.h1
          variants={childVariants}
          className="text-5xl md:text-7xl font-extrabold"
        >
          ¡HELLO!
        </motion.h1>

        <motion.span
          variants={childVariants}
          initial="hidden"
          animate="visible"
          variants={nameVariants}
          className="text-5xl md:text-7xl font-extrabold"
        >
          I'm{' '}
          <motion.span
            initial="hidden"
            animate="visible"
            variants={nameVariants}
          >
            Luis Miguel Echeverry
          </motion.span>
        </motion.span>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl mb-6 font-medium text-blue-400"
        >
          Web Developer | Musician
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl max-w-3xl mb-6"
        >
          Welcome to my digital world! I am a passionate freelance web developer and musician. My passion is combining my musical creativity with my web development skills to create unique online experiences. In this space, you will be able to explore my portfolio and learn more about my exciting projects. Join me on this digital journey!
        </motion.p>

        <motion.a
          href="https://wa.me/+573144175184?text=%C2%A1Hola%20programador!%20:)"
          target="_blank"
          rel="noopener noreferrer"
          variants={childVariants}
          className="bg-black hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          ¡Talk to me by Whatsapp!
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Intro;
