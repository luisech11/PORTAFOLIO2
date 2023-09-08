import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import { motion } from 'framer-motion';
function Portfolio() {
   return (
      <section id="portfolio" className="py-12">
         <div className="container mx-auto">
         <motion.h2
      className="text-2xl font-semibold text-center mb-8 transform hover:scale-110 transition-transform duration-300 ease-in-out"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Content
    </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {portfolio.map((project, index) => (
                  <PortfolioItem 
                     key={index}
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Portfolio;
