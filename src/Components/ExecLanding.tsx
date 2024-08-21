import {Container, Col, Row} from 'react-bootstrap'

function ExecLanding(){
    return(<>
    <Container id="landing">
            <div className="landing gradient-bg">
            <Row className="align-items-center">
                <div className="landing-cover">

                </div>
                <div className="landing-content">
                <Col xs={12}>
                    <div className="banner__content">
                    <h1 className="header">Meet the Visionaries Driving Our Company Forward</h1>
                    <p className="subhead">The leaders shaping our future. Explore the profiles of our executive team and see the vision and expertise driving our success.</p></div>
                </Col>
                <Col xs={12}>
                </Col>
                </div>
            </Row>
            </div>
        </Container>
    </>)
}

export default ExecLanding;