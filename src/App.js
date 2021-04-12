import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <h2 className="title">Our Reviews</h2>
        <article className="review">
          <img
            className="img"
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
          ></img>
          <h4>Peter Jones</h4>
          <p className="role">Intern</p>
          <p className="desc">Desc</p>
          <div className="btnContainer">
            <button className="leftIcon"> v </button>
            <button className="rightIcon"> m </button>
          </div>
          <button className="surpriseBtn">Surprise Me</button>
        </article>
      </section>
    </main>
  );
}

export default App;
