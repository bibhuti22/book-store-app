import React from "react";

const BookCard = ({ image, title, price, category }) => {
  return (
    <>
      <div className="card hover:scale-105 dark:bg-slate-900 dark:text-white duration-200 flex w-80 bg-base-100 shadow-xl max-h-450px">
        <figure>
          <img src={image} alt="Books" height="100" />
        </figure>
        <div className="card-body flex">
          <div className="card-title">
            {title}
            <span className="badge bg-pink-500 text-white">{category}</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elipse.
          </p>
          <div className="card-actions justify-between">
            <button className="btn bg-red-50 text-red-500 w-16">{`$${price}`}</button>
            <button className="btn badge bg-pink-500 text-white">{`Buy Now`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
