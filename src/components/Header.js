import React from "react";

function AppBar({ message }) {
  return (
    <>
      <div className="page-header clear-filter" >
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{ backgroundImage: "url(" + require("assets/img/bg30.jpg") + ")" }}
          ></div>
        </div>
        <h3
          style={{
            display: 'flex', justifyContent: 'center', paddingTop: '15%',paddingRight:'20%',
            fontSize: 35, alignItems: 'center', fontFamily: 'fantasy',
            color:'#ce6363',transform: 'rotate(-33deg)'
          }} data-rellax-speed="-1">
          "{message}"
        </h3>
      </div>
    </>
  );
}

export default AppBar;
