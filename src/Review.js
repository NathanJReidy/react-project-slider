import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { id, name, job, image, text } = people[reviewIndex];

  //   const nextReview = () => {
  //     if (0 <= reviewIndex < 3) {
  //       setReviewIndex(reviewIndex + 1);
  //     } else if (reviewIndex >= 3) {
  //       setReviewIndex(0);
  //     }
  //   };

  const nextReview = () => {
    setReviewIndex((index) => {
      if (index === people.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const prevReview = () => {
    setReviewIndex((index) => {
      if (index === 0) {
        return people.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  const randomReview = () => {
    const randomNumber = Math.floor(Math.random() * 4); // Generates random number between 0-3;
    setReviewIndex(randomNumber);
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
