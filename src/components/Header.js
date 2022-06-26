import React from "react";
import ticketsImage from "./../img/ticket.png";
import { Link } from "react-router-dom";

function Header(props){
  const headerImageStyle = {
    width: "200px"
  }
  return (
    <React.Fragment>
      <img src={ticketsImage} style={headerImageStyle} alt="Two tickets" />
      <h1>Help Queue</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;