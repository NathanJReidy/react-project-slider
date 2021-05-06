import React, { useState, useEffect } from "react";
import people from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { id, image, name, title, quote } = people[reviewIndex];

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

  useEffect(() => {
    let slider = setInterval(() => {
      setReviewIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [reviewIndex]);

  return (
    <div className="mainContainer">
      <button className="arrowBtnLeft">
        <FiChevronLeft
          className="previousIcon"
          onClick={prevReview}
          size={24}
          style={{ color: "white", margin: 0 }}
        />
      </button>

      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = "nextSlide";
        if (personIndex === reviewIndex) {
          position = "activeSlide";
        }
        if (
          personIndex === reviewIndex - 1 ||
          (reviewIndex === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={position}>
            <img className="img" src={image}></img>
            <h4 className="name">{name}</h4>
            <p className="role">{title}</p>
            <p className="desc">{quote}</p>
            <FaQuoteRight size={48} style={{ color: "#ba5d2c", margin: 0 }} />
          </article>
        );
      })}

      <button className="arrowBtnRight">
        <FiChevronRight
          className="nextIcon"
          onClick={nextReview}
          size={24}
          style={{ color: "white", margin: 0 }}
        />
      </button>
    </div>
  );
};

export default Review;
