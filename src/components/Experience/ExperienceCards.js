import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCards(props) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const summaryDescription = props.projectDescription.substring(0, 100) + "...";

  return (
    <Card className="experience-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.position}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {showDetail ? (
            <>
              <strong>Description:</strong> {props.projectDescription}
              <br />
              <strong>Technologies:</strong> {props.projectTechnologies}
              <br />
              <strong>Main Responsibilities:</strong>
              <ul>
                {props.dailyTasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </>
          ) : summaryDescription}

        </Card.Text>
        <Button variant="secondary" onClick={toggleDetail}>
          {showDetail ? "Show Less" : "Show More"}
        </Button>
        <br />
        <br />
      </Card.Body>
    </Card>
  );
}

export default ExperienceCards;
