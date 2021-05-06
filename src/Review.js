import React, { useState } from "react";
import people from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

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
    <div className="mainContainer">
      <button className="arrowBtn">
        <FiChevronLeft className="previousIcon" onClick={prevReview} />
      </button>
      <article className="review">
        <img className="img" src={image}></img>
        <h4 className="name">{name}</h4>
        <p className="role">{job}</p>
        <p className="desc">{text}</p>
        <button className="surpriseBtn" onClick={randomReview}>
          Surprise Me
        </button>
      </article>
      <button>
        <FiChevronRight className="nextIcon" onClick={nextReview} />
      </button>
    </div>
  );
};

export default Review;
