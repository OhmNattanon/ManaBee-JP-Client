import React from "react";

function Landing() {
  return (
    <div className="landingContainer">
      <section className="landingMain">
        <div className="landingJp">
          <h1>楽しく学ぶ。</h1>
          <h1>楽しく身に付ける。</h1>
          <br />
          <h1>マナビー</h1>
        </div>
        <div className="landingEng">
          <h1>
            Discover fun new way to learn Japanese, as the way it suppose to be,
            with us at.
          </h1>
          <br />
          <h1 className="manabee">ManaBee</h1>
        </div>
      </section>
      <section className="whatwedo">
        <h1>What we do</h1>
      </section>
      <section className="course">
        <h1>Our Course</h1>
      </section>
      <section className="article">
        <h1>Article</h1>
      </section>
      <section className="aboutus">
        <h1>About us</h1>
      </section>
    </div>
  );
}

export default Landing;
