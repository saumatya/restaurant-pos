import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Restaurant</h1>
      <Link to="/menu">View Menu</Link>
      <br />
      <Link to="/order">Create Order</Link>
    </div>
  );
};

export default Home;
