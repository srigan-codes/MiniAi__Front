import { Container, Row, Col } from "react-bootstrap";
import MiniAiHeadWhite from "../assets/miniaiheadwhite.png"
import Testimonials from '../Components/Testimonials';
function LearnMore(){
    const handleClick = ()=>{
        console.log("clicked")
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdaus9hKPUaws1zPxHIfev2tSm5vdjoJtkZA1hnvJPoqJB_9g/viewform?usp=embed_facebook"
    }
    return ( <> <section className="banner" id="home">
        <div className="more-info">
        <Container>
            <Row className="align-items-center info-card">
                <Col xs={12} md={6}>
                    <div className="info-text">
                    <h3><span className="info-head">Sign Up Today</span></h3>
                    <p className="info-p">
                    Sign up for Mini AI to gain a hands-on introduction to artificial intelligence, sparking creativity and building essential future skills.
                    </p>
                    <button className="learnmore" id="formLink" onClick={handleClick}>Sign Up Now!</button>
                    </div>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center miniSvg">
                    <img src={MiniAiHeadWhite}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    </>)
}

export default LearnMore;