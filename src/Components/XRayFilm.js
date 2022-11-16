import React from "react";
import { Carousel, Container, Row, Col, Form, Image } from "react-bootstrap";

export default function XRayFilm() {
  return (
    <Container
      style={{ marginTop: "4rem", marginBottom: "3rem" }}
      className="font-link"
    >
      <Row>
        <Col xs={12} sm={9}>
          <Carousel className="d-flex justify-content-center align-item-center">
            <Carousel.Item>
              <img
                src={require("../Picture/xrayfilm1.jpg")}
                className="d-block w-100"
                style={{ height: "30rem" }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../Picture/xrayfilm2.jpg")}
                className="d-block w-100"
                style={{ height: "30rem" }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../Picture/xrayfilm3.jpg")}
                className="d-block w-100"
                style={{ height: "30rem" }}
              ></img>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} sm={3}>
          <Row className="m-3">
            <h1
              className="d-flex justify-content-end"
              style={{ color: "#6892D5", textShadow: "1px 1px 1px black" }}
            >
              {" "}
              Upload File
            </h1>
          </Row>
          <Form>
            <Image src={require("../Picture/filefolder.png")} fluid></Image>
            <Form.Control type="file" multiple />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
