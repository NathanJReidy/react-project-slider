import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { id, name, job, image, text } = people[reviewIndex];

  const checkNumber = (newIndex) => {
    if (newIndex > people.length - 1) {
      return 0;
    } else if (newIndex < 0) {
      return people.length - 1;
    } else {
      return newIndex;
    }
  };

  const nextReview = () => {
    setReviewIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevReview = () => {
    setReviewIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length); // Generates random number between 0-3;
    // Ensure random number isn't the same as the existing index
    if (randomNumber === reviewIndex) {
      randomNumber = reviewIndex + 1;
    }
    setReviewIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <img className="img" src={image}></img>
      <h4>{name}</h4>
      <p className="role">{job}</p>
      <p className="desc">{text}</p>
      <div className="btnContainer">
        <FaChevronLeft className="previousIcon" onClick={prevReview} />
        <FaChevronRight className="nextIcon" onClick={nextReview} />
      </div>
      <button className="surpriseBtn" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
