import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css";
import DashboardInfo1 from "./DashboardInfo1";
import DashboardInfo2 from "./DashboardInfo2";
import DashboardInfo3 from "./DashboardInfo3";
import DashboardInfo4 from "./DashboardInfo4";
import { DashboardPolarChart } from "./DashboardPolarChart";
import { DashboardVerticalBarChart } from "./DashboardVerticalBarChart";
import { DashboardDoughnutChart } from "./DashboardDoughnutChart";
import { DashboardRadarChart } from "./DashboardRadarChart";
import { DashboardLineChart } from "./DashboardLineChart";
import { DashboardBubbleChart } from "./DashboardBubbleChart";

const Dashboard = () => {
  return (
    <Container
      fluid
      className={"no-gutters mx-0 px-0 vh-100 d-flex flex-column"}
    >
      <Row nogutters="true" className="h-75">
        <Col xs={3} className="infoTile">
          <DashboardInfo1 />
        </Col>
        <Col xs={3} className="infoTile">
          <DashboardInfo2 />
        </Col>
        <Col xs={3} className="infoTile">
          <DashboardInfo3 />
        </Col>
        <Col xs={3} className="infoTile">
          <DashboardInfo4 />
        </Col>
      </Row>
      <Row nogutters="true" className="h-100">
        <Col xs={4} className="">
          <DashboardPolarChart />
        </Col>
        <Col xs={4} className="">
          <DashboardRadarChart />
        </Col>
        <Col xs={4} className="">
          <DashboardDoughnutChart />
        </Col>
      </Row>
      <Row nogutters="true" className="h-100">
        <Col xs={4} className="">
          <DashboardVerticalBarChart />
        </Col>
        <Col xs={4} className="">
          <DashboardLineChart/>
        </Col>
        <Col xs={4} className="">
          <DashboardBubbleChart/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
