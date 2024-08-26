import { Container } from "react-bootstrap";
import Guest1 from "../assets/Guest1.jpg"
import Lesson2 from "../assets/Lesson2.jpg"
import Lesson3 from "../assets/Lesson3.jpg"
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap"

function ImageGallery(){
    
    return(
        <>
            <Container className="gallery-container gradient-bg">
                <Row>
                   <div className="text-center mb-5 mt-1 gallery-head">
                   <h1>See samples from our lessons!</h1>
                    <h3 className="mb-5">Below are snippets from our lessons, we have various guest speakers, engaging presentations and fun games!</h3>
         </div>       </Row>
                <Row>
                    <Col xs={12} className="w-100 d-flex justify-content-center align-items-center">
                    <div className="gallery">
      <span style={{ '--i': 1 } as React.CSSProperties}>
        <img src={Guest1} alt="" />
      </span>
      <span style={{ '--i': 2 } as React.CSSProperties}>
        <img src={Lesson2} alt="" />
      </span>
      <span style={{ '--i': 3 } as React.CSSProperties}>
        <img src={Lesson3} alt="" />
      </span>
      <span style={{ '--i': 4 } as React.CSSProperties}>
        <img src={Guest1} alt="" />
      </span>
      <span style={{ '--i': 5 } as React.CSSProperties}>
        <img src={Lesson2} alt="" />
      </span>
      <span style={{ '--i': 6 } as React.CSSProperties}>
        <img src={Lesson3} alt="" />
      </span>
      <span style={{ '--i': 7 } as React.CSSProperties}>
        <img src={Guest1} alt="" />
      </span>
      <span style={{ '--i': 8 } as React.CSSProperties}>
        <img src={Lesson2} alt="" />
      </span>
      <span style={{ '--i': 9 } as React.CSSProperties}>
        <img src={Lesson3} alt="" />
      </span>
    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ImageGallery;