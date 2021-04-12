import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviewNumber, setReviewNumber] = useState(0);
  const [review, setReview] = useState(people[reviewNumber]);
  console.log(review);
  const { id, image, job, name, text } = review;

  return (
    <article className="review">
      <img className="img" src={image}></img>
      <h4>{name}</h4>
      <p className="role">{job}</p>
      <p className="desc">{text}</p>
      <div className="btnContainer">
        <button
          className="previousIcon"
          onClick={() => {
            setReview(people[reviewNumber - 1]);
            setReviewNumber(reviewNumber - 1);
          }}
        >
          {" "}
          <FaChevronLeft />{" "}
        </button>
        <button
          className="nextIcon"
          onClick={() => {
            setReview(people[reviewNumber + 1]);
            setReviewNumber(reviewNumber + 1);
          }}
        >
          {" "}
          <FaChevronRight />{" "}
        </button>
      </div>
      <button className="surpriseBtn">Surprise Me</button>
    </article>
  );
};

export default Review;
