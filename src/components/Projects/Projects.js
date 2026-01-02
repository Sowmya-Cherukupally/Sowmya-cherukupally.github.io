import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import data from "../../Assets/Projects/data.jpg";
import realestate from "../../Assets/Projects/realestate.jpg";
import rag from "../../Assets/Projects/RAG.png";
import whatsapp from "../../Assets/Projects/woliul-hasan-7FhOgd6itoU-unsplash (1).jpg";
import weather from "../../Assets/Projects/lloyd-dirks-kz8pEH4IsUo-unsplash (1).jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              title="Automated Data Ingestion & Transformation"
              description="Designed and implemented a fully automated data ingestion pipeline using Snowflake, PySpark and Python following medallion architecture."
              ghLink="https://github.com/Sowmya-Cherukupally/Agentic"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              title="Real Estate Comparison Tool"
              description="Vector-search based real estate comparison tool using embeddings and Streamlit UI."
              ghLink="https://github.com/Sowmya-Cherukupally/PropelensRealestate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              title="RAG Application"
              description="Retrieval-Augmented Generation system for PDF-to-MCQ generation grounded in document context."
              ghLink="https://github.com/Sowmya-Cherukupally/RAG_Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              title="WhatsApp Chatbot"
              description="Automated WhatsApp chatbot using Gupshup API for predefined customer interactions."
              ghLink="https://github.com/Sowmya-Cherukupally/WhatsApp_Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather Application"
              description="Real-time weather forecasting app using OpenWeatherMap API."
              ghLink="https://github.com/Sowmya-Cherukupally/Weather-Application"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
