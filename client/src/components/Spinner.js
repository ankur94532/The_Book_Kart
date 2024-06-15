import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center col-xs-12"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center col-xs-12">redirecting to you in {count} second </h1>
        <div className="spinner-border col-xs-12" role="status">
          <span className="visually-hidden col-xs-12">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;