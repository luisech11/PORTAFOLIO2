import React from 'react';
import Title from './Title';

function Contact() {
  const whatsappURL = 'https://api.whatsapp.com/send?phone=573144175184'; 

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
          <textarea
            name="message"
            placeholder="Mensaje"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4 text-fluorescent-green"
            rows="4"
          />

          <input
            type="hidden"
            name="_gotcha"
            style={{ display: 'none !important' }}
          />

<button
  type="submit"
  className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-black bg-white hover:bg-green-600 hover:shadow-lg transition duration-300"
>
  Send
</button>

        </form>
      </div>

      <div className="flex justify-center items-center mt-4">
      <a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 hover:shadow-lg transition duration-300 mr-4"
>
  WhatsApp
</a>

      </div>
    </div>
  );
}

export default Contact;
