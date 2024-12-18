import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard -The Book-Kart App"}>
      <div className="container-fluid m-3 p-3 dashboard col-xs-12">
        <div className="row col-xs-12">
          <div className="col-md-3 col-xs-12">
            <UserMenu />
          </div>
          <div className="col-md-9 col-xs-12">
            <div className="card w-75 p-3 col-xs-12">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;