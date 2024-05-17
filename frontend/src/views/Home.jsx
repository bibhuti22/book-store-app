import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Books from "../components/Books";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/slices/booksSlice";

const Home = () => {
  const [freeBooks, setFreeBooks] = useState([]);

  const books = useSelector((state) => {

    return state.books.books;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchBooks());
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const freeBooks = books.filter((book) => book.category === "Free");

    setFreeBooks(freeBooks);
  }, [books]);

  return (
    <>
      <HeroSection />
      <Books books={freeBooks} />
      <Footer />
    </>
  );
};

export default Home;
