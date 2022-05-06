import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Layout.css";
import LeftNav from "./components/LeftNav";
import TicketsByTimeOfDay from "./components/TicketsByTimeOfDay";
import TicketsByLocationHeatMapContainer from "./components/TicketsByLocationHeatMapContainer";
import Dashboard from "./components/Dashboard";

const Layout = () => {

  const handleClickEvent = (e) => {
    changeQueryClicked(e);
  }
  
  const [queryClicked, changeQueryClicked] = useState();

  return (
    <Container
      fluid
      className={"no-gutters mx-0 px-0 vh-100 d-flex flex-column"}
    >
      <Row nogutters="true" className="h-100">
        <Col xs={3}>
          <LeftNav handleClickEventProps={handleClickEvent}/>
        </Col>
        <Col xs={9} className={"border"}>
          {queryClicked === "q1" && <TicketsByTimeOfDay />}
          {queryClicked === "q2" && <Dashboard />}
          {queryClicked === "q3" && <TicketsByLocationHeatMapContainer />}
          {queryClicked === undefined && <div className="centered">Choose an option from the left ...</div>}

        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
