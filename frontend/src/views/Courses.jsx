import React from "react";
import mockBooks from "../../mocks/books.json";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const Courses = () => {
  const paidBooks = mockBooks.filter((book) => book.category !== "Free");
  return (
    <>
      <div className=" max-w-screen-2xl dark:bg-slate-700 dark:text-white container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/home">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {paidBooks.map((item) => (
            <BookCard
              key={item.id}
              image={item.imageLink}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
