import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import data from "../../Assets/Projects/data.jpg";
import realestate from "../../Assets/Projects/realestate.jpg";
import rag from "../../Assets/Projects/RAG.png";
import weather from "../../Assets/Projects/lloyd-dirks-kz8pEH4IsUo-unsplash (1).jpg";
import whatsapp from "../../Assets/Projects/woliul-hasan-7FhOgd6itoU-unsplash (1).jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Automated Data Ingestion & Transformation"
              description="Designed and implemented a fully automated data ingestion pipeline using Snowflake,Pyspark and Python. The system ingests raw files from cloud storage, applies transformation logic, enforces data quality checks and loads curated datasets into analytics ready tables following medallion architecture."
              ghLink="https://github.com/Sowmya-Cherukupally/Agentic"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real Estate Comparison Tool"
              description="Developed a real estate comparison tool using vector search capabilities.The application allows users to compare properties based on features like price,location and amenities.It leverage vector embeddings for similarity matching and provides a Streamlit UI"
              ghLink="https://github.com/Sowmya-Cherukupally/PropelensRealestate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="RAG Application"
              description="Implementing Retrieval-Augmented Generation(RAG) significantly enhances a PDF-to-MCQ application by ensuring questions are grounded in the document's actual content rather than the AI's general training data"
              ghLink="https://github.com/Sowmya-Cherukupally/RAG_Application"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woliul-hasan-7FhOgd6itoU-unsplash}
              isBlog={false}
              title="WhatsApp Chatbot"
              description="WhatsApp Chatbot is a simple chatbot that responds to predefined messages.It can receive messages from WhatsApp,process them and send automated responses using the Gupshup API"
              ghLink="https://github.com/Sowmya-Cherukupally/WhatsApp_Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lloyd-dirks-kz8pEH4IsUo-unsplash (1).jpg}
              isBlog={false}
              title="Weather Application"
              description="Weather Application is a simple,user-friendly weather forecasting application that provides real-time weather information using the OpenWeatherMap API"
              ghLink="https://github.com/Sowmya-Cherukupally/Weather-Application"
            />
          </Col>

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
