import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3 col-xs-12">
        <div className="row col-xs-12">
          <div className="col-md-3 col-xs-12">
            <AdminMenu />
          </div>
          <div className="col-md-9 col-xs-12">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;