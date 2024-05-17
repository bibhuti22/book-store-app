import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Send the form data to your backend here.
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/4 mx-auto">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

const ContactsPage = () => {
  return (
    <div className="flex flex-col w-screen mx-10 h-screen items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 items-center">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
