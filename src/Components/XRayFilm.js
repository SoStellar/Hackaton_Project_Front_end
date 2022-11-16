import React from "react";
import { Carousel, Container,Row,Col } from "react-bootstrap";

export default function XRayFilm(){
    return(
        <Container style={{marginTop: "1rem", marginBottom:"3rem"}}
          className="font-link">
            <Row>
                <h1 className="d-flex-end"> Upload File</h1>
            </Row>
            <Row>
                <Col xs={12} sm={9}>
                    <Carousel>
                        <Carousel.Item>
                            <img require src={require('../Picture/xrayfilm1.jpg')} className="d-block w-100" style={{height:'20rem'}}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img require src={require('../Picture/xrayfilm2.jpg')} className="d-block w-100" style={{height:'20rem'}}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img require src={require('../Picture/xrayfilm3.jpg')} className="d-block w-100" style={{height:'20rem'}}></img>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} sm={3}>

                </Col>
            </Row>
        </Container>
    )
}