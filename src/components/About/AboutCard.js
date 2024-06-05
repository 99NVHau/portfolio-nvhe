import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Thanh Thong </span>
            from <span className="purple"> Ho Chi Minh city, VietNam.</span>
            <br />
              I am currently employed as a Devops Engineer at Apollo technology solutions.
            <br />
              I majored in information technology at Ho Chi Minh City University of Technical Education.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
