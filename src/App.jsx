import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer1/index";
import Header from "./components/Header1/index";
import Testimonials1 from "./components/Testimonials1/index";

import "./index.css";

const App = () => (
  <div className="container">
    <Header
      eventID={""}
      number="(800) 888 99"
      headerTitle={"QualifyBenefits.co"}
    />
    <Testimonials1 />
    <Footer
      footerTitle={"QualifyBenefits.co"}
      fullName="Qualify Benefits"
      eventID={"Some Event Id"}
      privacyPolicyRoute={""}
      termsAndConditionsRoute={""}
      partnerListRoute={""}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
