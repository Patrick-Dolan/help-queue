import React from "react";
import ticketsImage from "./../img/ticket.png";
import { DateTime } from "luxon";

function Header(props){
  const headerImageStyle = {
    width: "200px"
  }
  // const oldTime = DateTime.fromISO("2022-06-10").toLocaleString(DateTime.DATE_SHORT);
  // const oldTimeObj = DateTime.fromISO("2022-06-11")
  // const time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
  // const diffTime = oldTimeObj.toRelative(oldTimeObj);
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} style={headerImageStyle} alt="Two tickets" />
      {/* <p>Current Time: {time}</p>
      <p>Old Time: {oldTime}</p>
      <p>Diff in Time: {diffTime}</p> */}
    </React.Fragment>
  );
}

export default Header;