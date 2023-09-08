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
      color: '#FFD700',
    },
    visible: {
      color: '#ff9900',
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9, 
    },
    visible: {
      opacity: 1,
      scale: 1, 
      transition: {
        duration: 1, 
        delay: 1, 
      },
    },
  };

  const borderVariants = {
    hidden: {
      width: 5, 
    },
    visible: {
      width: '100%', 
      transition: {
        duration: 1, 
        delay: 1, 
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
      <div className="flex flex-col md:flex-row items-center justify-center text-center pt-12 pb-8 md:pt-16 md:pb-12 relative z-10">
        <div className="md:w-1/2 md:text-center">
          <motion.div
            className="rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 mt-4 mx-auto relative"
            variants={imageVariants} // Aplicar animación a la imagen
          >
            <motion.img
              src="/assets/Imgmia.png"
              alt="My Image"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="border-4 border-blue-400 absolute inset-0"
              variants={borderVariants} // Aplicar animación al borde
            ></motion.div>
          </motion.div>
        </div>

        <div className="md:w-1/2 md:pl-6">
          <motion.h1
            variants={childVariants}
            className="text-3xl md:text-5xl font-extrabold text-blue-400"
          >
            Welcome to My World!
          </motion.h1>

          <motion.span
            variants={childVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold"
          >
            I'm{' '}
            <motion.span
              initial="hidden"
              animate="visible"
              variants={nameVariants}
              className="text-orange-500"
            >
              Luis Miguel Echeverry
            </motion.span>
          </motion.span>

          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl mb-4 md:mb-6 font-medium text-blue-400"
          >
            Web Developer | Musician
          </motion.p>
        </div>
      </div>
      <div className="md:text-center">
        <motion.p
          variants={childVariants}
          className="text-sm md:text-base max-w-md mb-4 md:mb-6"
        >
          Welcome to my digital world! I am a passionate freelance web developer and musician. My passion is combining my musical creativity with my web development skills to create unique online experiences. In this space, you will be able to explore my portfolio and learn more about my exciting projects. Join me on this digital journey!
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Intro;
