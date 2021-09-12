import React from "react";
import Accomplish from "./Accomplishments";
import CommitmentsMade from "./CommitmentsMade";
import CommitmentsReceived from "./CommitmentsReceived";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "./style.css";
import "../../assets/styles/action.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <Header />
        <Accomplish />
        <CommitmentsMade />
        <CommitmentsReceived />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
