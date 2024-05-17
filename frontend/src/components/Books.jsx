import React from "react";
import BookCard from "./BookCard";
import Slider from "react-slick";

const Books = ({ books }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-slate-700 dark:text-white container mx-auto md:px-20 px-4 bg-base-200">
        <h1 className="font-semibold text-xl pt-10">Check out these Free Books to explore</h1>
        <p className="pb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat commodi expedita praesentium laborum optio molestias omnis dicta cumque voluptatibus. Cupiditate earum quidem eveniet labore ab nemo rem iste magnam!</p>
        <div className="slider-container dark:bg-slate-700 dark:text-white bg-base-200">
          <Slider {...settings}>
            {books.map((book) => (
              <li key={book.id}>
                <BookCard
                  image={book.imageLink}
                  title={book.title}
                  price={book.price}
                  category={book.category}
                ></BookCard>
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Books;
