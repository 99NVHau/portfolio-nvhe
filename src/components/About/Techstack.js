import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { SiGrafana } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";
import { SiRancher } from "react-icons/si";
import { SiLogstash } from "react-icons/si";
import { SiElasticsearch } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiMinio } from "react-icons/si";
import { SiHelm } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLogstash   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRancher  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMinio  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAmazon   />
      </Col>
    </Row>
  );
}

export default Techstack;
