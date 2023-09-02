import React from 'react';

function Footer() {
  return (
    <div className="py-5 text-center bg-gray-900 text-white">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://twitter.com/forrestpknight"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-miguel-echeverry-6506571a7/"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              </svg>
            </a>
            
            <a
              href="https://github.com/luisech11?tab=repositories"
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
            >
              <svg
                aria-hidden="true"
                role="img"
                className="w-5"
                viewBox="0 0 24 24"
              >
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Luis Miguel Echeverry. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
