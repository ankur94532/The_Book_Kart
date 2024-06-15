import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category col-xs-12">
        <h4 className="text-center col-xs-12">Category - {category?.name}</h4>
        <h6 className="text-center col-xs-12">{products?.length} result found </h6>
        <div className="row col-xs-12">
          <div className="col-md-9 offset-1 col-xs-12">
            <div className="d-flex flex-wrap col-xs-12">
              {products?.map((p) => (
                <div className="card m-2 col-xs-12" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top col-xs-12"
                    alt={p.name}
                  />
                  <div className="card-body col-xs-12">
                    <div className="card-name-price col-xs-12">
                      <h5 className="card-title col-xs-12">{p.name}</h5>
                      <h5 className="card-title card-price col-xs-12">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <p className="card-text col-xs-12">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price col-xs-12">
                      <button
                        className="btn btn-info ms-1 col-xs-12"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      {/* <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;