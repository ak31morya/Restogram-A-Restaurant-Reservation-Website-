import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to <b>RESTOGRAM</b>, where culinary excellence meets unparalleled hospitality.
            Nestled in the heart of <b>Mohali (Punjab)</b>, we offer a fusion of flavors inspired by local traditions and global influences. Our menu features succulent steaks, delicate seafood, vegetarian delights, and gourmet burgers—all crafted with fresh, locally sourced ingredients.
            Beyond our delectable dishes, we are dedicated to providing an unforgettable dining experience. Our warm and attentive staff ensure that every visit is a celebration of flavor and hospitality.
            Join us at <b>RESTOGRAM</b> for a culinary journey that will leave you craving more.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About