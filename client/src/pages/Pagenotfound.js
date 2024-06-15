import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf col-xs-12">
        <h1 className="pnf-title col-xs-12">404</h1>
        <h2 className="pnf-heading col-xs-12">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn col-xs-12">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;