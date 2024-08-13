import { Container, Row, Col } from "react-bootstrap"; 

function Landing(){


    return <>
    <section className="banner" id="home">
        <div className="banner__container">
        <Container id="landing">
            <div className="landing">
            <Row className="align-items-center">
                <div className="landing-cover">

                </div>
                <div className="landing-content">
                <Col xs={12}>
                    <div className="banner__content">
                    <h1 className="header">Education Today for Tommorow's Innovators</h1>
                    <p className="subhead">Here we empower youth with cutting-edge AI education, featuring special guest speakers from Amazon, Google, Tesla, and more. Through hands-on workshops and insights from industry leaders, we prepare the next generation to excel in the AI-driven future.</p>
                    </div>
                </Col>
                <Col xs={12}>
                <div className="btn-container"><button className="learnmore">Get Started</button></div>
                </Col>
                </div>
            </Row>
            </div>
        </Container>
        </div>
    </section>
    </>
}

export default Landing;