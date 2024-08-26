import { Col, Container, Row } from "react-bootstrap"
import Alert from 'react-bootstrap/Alert';
import MiniAiLong from "../assets/MiniAiLong.png"

function Footer(){

    return(
        <>
        <footer>
            <Container className="d-flex justify-content-center foot-bg">
                <Row className="align-item-center footer">
                    <Col sm={6} className="d-flex align-items-center">
                    <Alert variant="success">
                    <div className="">
                            <table>
                                <tr>
                                    <td onClick={()=>{window.location.href = "mission.html"}}><a>Mission</a></td>
                                    <td onClick={()=>{window.location.href = "executives.html"}}>
                                        <a>Executives</a>
                                    </td>
                                    <td><a href="https://www.linkedin.com/company/mini-ai/">LinkedIn</a></td>
                                    <td><a href="mailto:miniai.toronto@gmail.com">Email</a></td>
                                    <td>
                                        <a href="https://www.instagram.com/miniai.to?igsh=dnpydmc3aGQwY2Fr">Instagram</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Alert>
                        
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="footer-left">
                        <img src={MiniAiLong}/>
                        </div>
                    </Col>
                    <p className="cr">CopyRight 2024. All Rights Reserved. MiniAi</p>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer;