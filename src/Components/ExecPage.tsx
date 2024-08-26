import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExecCard from './ExecCard';
import ExecCardSmall from './ExecCardSmall';

function ExecPage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pd">
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 1 */}
        <Col md={8} lg={6}>
          <ExecCard
            imgURL="[img]"
            name="Srigan Siva"
            subname="CEO and Outreach Lead"
            desc="Srigan is a motivated high school student from Northview Heights Secondary. He spends his days learning about the ever-growing industry of artificial intelligence. Through emails and messages, Srigan has generated hundreds of connections to start this project. In his spare time, he loves to learn about quantum mechanics. Srigan is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 2 */}
        <Col md={8} lg={6}>
          <ExecCard
            imgURL="[img]"
            name="Vedant Kansara"
            subname="COO and Curriculum Developer"
            desc="Vedant is a motivated high school student from Northview Heights Secondary. He constantly spends time learning about the latest applications of artificial intelligence. In his spare time, he tutors children in math and helps refine their learning. Vedant is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-none d-md-block justify-content-center">
        {/* Big Card 3 */}
        <Col md={8} lg={6}>
          <ExecCard
            imgURL="[img]"
            name="Hani Mahdi"
            subname="Lead Web Developer"
            desc="I'm a talented teenage front-end web developer who served as the lead developer at Mini Ai, where I recently spearheaded the design of our cutting-edge website."
          />
        </Col>
      </Row>

      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 1 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL="[img]"
            name="Srigan Siva"
            subname="CEO and Outreach Lead"
            desc="Srigan is a motivated high school student from Northview Heights Secondary. He spends his days learning about the ever-growing industry of artificial intelligence. Through emails and messages, Srigan has generated hundreds of connections to start this project. In his spare time, he loves to learn about quantum mechanics. Srigan is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 2 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL="[img]"
            name="Vedant Kansara"
            subname="COO and Curriculum Developer"
            desc="Vedant is a motivated high school student from Northview Heights Secondary. He constantly spends time learning about the latest applications of artificial intelligence. In his spare time, he tutors children in math and helps refine their learning. Vedant is a passionate educator."
          />
        </Col>
      </Row>
      <Row className="d-block d-md-none justify-content-center sml">
        {/* Small Card 3 */}
        <Col xs={10} sm={8} md={6}>
          <ExecCardSmall
            imgURL="[img]"
            name="Hani Mahdi"
            subname="Lead Web Developer"
            desc="I'm a talented teenage front-end web developer who served as the lead developer at Mini Ai, where I recently spearheaded the design of our cutting-edge website."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ExecPage;
