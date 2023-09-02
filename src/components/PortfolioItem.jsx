import React from 'react';
import { motion } from 'framer-motion';

function PortfolioItem({ title, imgUrl, stack, link }) {
  const itemVariants = {
    hover: {
      scale: 1.05,
      rotate: 10,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-stone-900 dark:border-white rounded-md overflow-hidden"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={itemVariants}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <motion.img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <motion.h3
          className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item, index) => (
            <motion.span
              key={index}
              className="inline-block px-2 py-1 bg-stone-900 dark:bg-white dark:text-stone-900 text-white dark:border-stone-900 border border-stone-900 dark:border-white rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default PortfolioItem;
