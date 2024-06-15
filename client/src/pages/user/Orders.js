import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        // data[i].createdAt = moment(data[i].createdAt).format("MMMM Do YYYY");
        // convert to ist and then format it to date and time
        data[i].createdAt = moment(data[i].createdAt)
          .utcOffset("+05:30")
          .format("MMMM Do YYYY, h:mm:ss a");

        // also add time at the end
      }
      console.log(data);
      setOrders(data);


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard col-xs-12">
        <div className="row col-xs-12">
          <div className="col-md-3 col-xs-12">
            <UserMenu />
          </div>
          <div className="col-md-9 col-xs-12">
            <h1 className="text-center col-xs-12">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow col-xs-12">
                  <table className="table col-xs-12">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{o?.createdAt}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container col-xs-12">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row col-xs-12" key={p._id}>
                        <div className="col-md-4 col-xs-12">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top col-xs-12"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8 col-xs-12">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;