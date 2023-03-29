import React from "react";
import ReactDOM from "react-dom";
// import Footer from "./components/FooterPreLander/index";
// import Header from "./components/HeaderPreLander/index";
import Testimonials1 from "./components/Testimonials1/index";
import "./index.css";

const App = () => (
  <div>
    {/* <Header
      eventID={""}
      number="(800) 888-9999"
      headerTitle={"QualifyBenefits.co"}
    /> */}
    <Testimonials1 />
    {/* <Footer
      footerTitle={"QualifyBenefits.co"}
      fullName="Qualify Benefits"
      eventID={"Some Event Id"}
      privacyPolicyRoute={""}
      termsAndConditionsRoute={""}
      partnerListRoute={""}
    /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
