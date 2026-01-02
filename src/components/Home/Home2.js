import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I’m a Data Engineer who loves to design, build and optimize data pipelines
             that turn raw data into reliable, analytics-ready data insights.
             I enjoy working across the full data lifecycle from ingestion and transformation
             to modeling and performance tuning across various kinds of data. 
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Snowflake,Python, SQL,and  Spark {" "} 
                </b>
              </i>
              — and I enjoy working across both data and python developer. 
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Generative AI, Agentic AI,{" "} 
                </b>
              </i>
              and exploring new methods for rapid data bridging. 
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Gen AI </b> and modern frameworks like{" "} 
              <i>
                <b className="purple">RAG</b> and{" "} 
                <b className="purple">Agentic AI</b>. 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
