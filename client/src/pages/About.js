import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus col-xs-12">
        <div className="col-md-6 col-xs-12">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <p className="text-justify mt-2 col-xs-12">
            We are a private organisation with an aim to eradicate
            poverty and to provide used books and notes at low cost to underpriveleged students!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;