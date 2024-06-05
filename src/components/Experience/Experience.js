import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
import apollo from "../../Assets/Experience/Apollo-Solutions-logo.jpg";
import bin from "../../Assets/Experience/bin-group.png";
import kpmg from "../../Assets/Experience/kpmg.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCards
              imgPath={apollo}
              isBlog={false}
              title="APOLLO TECHNOLOGY SOLUTIONS COMPANY LIMITED"
              position="DevOps Engineer"
              projectDescription="I am responsible for the Social Media Network project and the AI platform, I also maintain the data pipeline daily"
              projectTechnologies= " Kubernetes, CICD, Git, GitLab, Docker, Helm, Ansible, Elasticsearch, Logstash, MinioS3, Mysql, Mongodb, Kafka, Kafka Connect, Neo4J, Spark, Airflow, NiFi."
              dailyTasks={[
              "My task is to configure and deploy data pipelines using Logstash, Spark, Airflow and NiFi for ETL.", 
              "Setting up CI/CD pipelines for Helm charts, data pipelines, and services developed.",
              "Backup, migration database, deployment of project.",
              "Monitor and troubleshoot production system.",
              "Write helmchart, technical document for stakeholders.",
              "Scan and check for CVE vulnerabilities."
              ]}
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
              imgPath={bin}
              isBlog={false}
              title="BIN CORPORATION GROUP JSC"
              position="Linux System Admin"
              projectDescription="I am responsible for the DNBC project, configure and mantain mail system, support for dev team."
              projectTechnologies= "Vmware, VoIP, iDRAC, MySql, Bash Script, Zimbra, AWS"            
              dailyTasks={[
                "Checking server and network performance, resource usage, and system logs to ensure everything is running smoothly.",
                "Installing updates and patches for operating systems and applications to ensure systems are up-to-date and secure.",
                "Diagnosing and resolving hardware, software, and network problems as they arise.",
                "Ensuring systems comply with organizational policies and industry regulations.",
                "Support dev team configure in production systems."
              ]}
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCards
              imgPath={kpmg}
              isBlog={false}
              title="KPMG VIETNAM"
              position="IT Service"
              projectDescription="I support users of departments with network and office equipment including: laptops, printers, wifi, etc,... 
              also I also provide training on the company's equipment system usage policy"
              projectTechnologies= "Vmware, Print Server, Windows, Laptop, Webinar, Basic systems and network."
              dailyTasks={[
                ""
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
