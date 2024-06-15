import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container col-xs-12" style={{ marginTop: "100px" }}>
        <div className="row container col-xs-12">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3 col-xs-12" key={c._id}>
              <div className="card col-xs-12">
                <Link to={`/category/${c.slug}`} className="btn cat-btn col-xs-12">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;