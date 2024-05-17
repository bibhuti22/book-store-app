import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-gray-700 mt-4">
        This is a simple About page built with React and Tailwind CSS.
      </p>
      <Link to="/home">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default About;
