import { Container, Row, Col } from 'react-bootstrap';

function MissionPage() {
    return (
        <section className="missionpage" id="mission">
        <div className="missionpage__container">
        <Container id="mission-landing">
            <div className="mission-landing">
            <Row className="align-items-center">
                <div className="mission-landing-cover">

                </div>
                <div className="mission-landing-content">
                <Col xs={12}>
                    <div className="missionpage__content">
                    <h1 className="header">Our Mission</h1>
                    <p className="subhead"> At Mini AI, we are dedicated to achieving excellence and driving innovation in AI education for youth. Our mission is to make a meaningful impact through our work and contribute positively to our community.
                    </p>
                    </div>
                </Col>
                <Col xs={12}>
                <div className="btn-container"><button className="learnmore">Learn More</button></div>
                </Col>
                </div>
            </Row>
            </div>
        </Container>
        </div>
    </section>
    );
}

export default MissionPage;
