import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus col-xs-12">
        <div className="col-md-6 col-xs-12">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <h1 className="bg-dark p-2 text-white text-center col-xs-12">CONTACT US</h1>
          <p className="text-justify mt-2 col-xs-12">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3 col-xs-12">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3 col-xs-12">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 col-xs-12">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;