import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/bb06ee09-65e2-4983-a7f6-8f62751cee54"
               method="POST"
               className="flex flex-col w-full md:w-7/12 bg-gradient-to-r from-fluorescent-yellow to-fluorescent-pink rounded-lg border border-black shadow-md p-4"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4 text-fluorescent-green"
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4 text-fluorescent-green"
               />
               <input
                  type="text"
                  name="message"
                  placeholder="Mensaje"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4 text-fluorescent-green"
               />

               <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: 'none !important' }}
               />

               <input
                  type="checkbox"
                  name="subscribe"
                  value="yes"
                  checked
                  className="hidden"
               />
               <input
                  type="hidden"
                  name="subscribe"
                  value="no"
               />
               <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked
                  className="hidden"
               />
               <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="hidden"
               />
               <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="hidden"
               />
               
               
                 
               
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-fluorescent-green hover:bg-fluorescent-pink hover:shadow-lg transition duration-300"
               >
                  Send
               </button>
            </form>
         </div>
      </div>
   );
}

export default Contact;
