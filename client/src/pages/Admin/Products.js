import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard col-xs-12">
        <div className="col-md-3 col-xs-12">
          <AdminMenu />
        </div>
        <div className="col-md-9 col-xs-12">
          <h1 className="text-center col-xs-12">All Products List</h1>
          <div className="d-flex flex-wrap col-xs-12">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link col-xs-12"
              >
                <div className="card m-2 col-xs-12" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top col-xs-12"
                    alt={p.name}
                  />
                  <div className="card-body col-xs-12">
                    <h5 className="card-title col-xs-12">{p.name}</h5>
                    <p className="card-text col-xs-12">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;