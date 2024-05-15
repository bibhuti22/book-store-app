import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="hero min-h-screen z-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src\assets\stack-books-education-day.png"
            className="rounded-lg w-1/2"
          />
          <div className="container w-100">
            <h1 className="text-5xl font-bold">Welcome to Learn & <span className="text-pink-500"> Share!</span></h1>
            <p className="text-2xl py-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              quaerat quasi. Quo quas quisquam enim tempora saepe iste molestias
              ullam nemo deleniti perspiciatis et, aliquid labore ad distinctio
              dolor dolore, dolorum doloribus laudantium. Porro consequatur
              dolore sit sequi omnis amet optio voluptatibus inventore quaerat
              saepe libero, molestiae laborum similique.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn mt-10 bg-pink-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
