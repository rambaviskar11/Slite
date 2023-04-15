import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home(props) {
  return (
    <div className="back">
      <div className="box">
        <h1 >
          <Link to="/login" className="login">Login</Link>
        </h1>
       
        <h1 >
          <Link to="/signup" className="signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  );
}

export default Home;
