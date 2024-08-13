import { Container, Row, Col } from "react-bootstrap";
function LearnMore(){
    return ( <> <section className="banner" id="home">
        <div className="banner__container">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div className="banner__content">
                    <h3><span className="tagline">Welcome to Techfluences</span></h3>
                    <h1 className="header"></h1>
                    <p className="subhead">We are a youth organization dedicated to fostering a passion for technology and computer science in individuals of all ages. <br/><br/>Please check out our website/blog, and follow & support us at @techfluences on Instagram to hear about future events! </p>
                    <button className="learnmore" onClick={()=>{console.log("clicked")}}>Follow Us</button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
                    <img className="fluid banner__image"></img>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    </>)
}

export default LearnMore;