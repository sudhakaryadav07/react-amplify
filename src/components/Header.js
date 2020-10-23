import React from "react";
import {Row,Col} from 'reactstrap';

function AppBar({ message }) {
  return (
    <>
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg14.jpg") + ")",
          }}
        ></div>
        <h3
          style={{
            display: 'flex', justifyContent: 'center', paddingTop: '20%',
            fontSize: 35, alignItems: 'center', fontFamily: 'fantasy',
            color: '#fff'
          }} data-rellax-speed="-1">

          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <h6 >"{message}"</h6>
            </Col>
          </Row>

        </h3>
      </div>
    </>
  );
}

export default AppBar;
