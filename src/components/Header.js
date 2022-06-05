import React from "react";
import ticketsImage from "./../img/ticket.png";

function Header(props){
  const headerImageStyle = {
    width: "200px"
  }

  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} style={headerImageStyle} alt="Two tickets" />
    </React.Fragment>
  );
}

export default Header;