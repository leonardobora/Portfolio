/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/meatjungle.jpeg";

const imageAltText = "";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" style={{ filter: "blur(0px)" }} />
      <div style={{ position: "absolute", top: "5rem", left: "50%", transform: "translateX(-50%)", width: "17rem", color: "#FFFFFF", textShadow: "2px 2px #000000" }}>
        <h1>{name}</h1>
        <h2 style={{ whiteSpace: "pre-wrap", width: "15rem" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
