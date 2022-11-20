import React from "react";
import { Carousel, Container, Row, Col, Form, Stack, Nav } from "react-bootstrap";
import { MdUploadFile } from 'react-icons/md'

export default function XRayFilm() {
  return (
    <>
      <Container fluid className="font-link" >
        <Row>
          <Col md={3} style={{ width: "7.5rem", marginTop: "4.5rem" }} >
            <Stack gap={0} className="text-center  mt-5 pt-5">
              <Nav.Link href="#treatment" className='rounded-top pt-5'
                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                ข้อมูลการรักษา
              </Nav.Link>
              <Nav.Link href="#Picture" className="border-top border-info pt-5"
                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                X-ray flim
              </Nav.Link>
              <Nav.Link href="#Contact" className="border-top border-info rounded-bottom pt-5"
                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                ข้อมูลส่วนตัวคนไข้
              </Nav.Link>
            </Stack>
          </Col>
          <Col md={6}>
            <Container fluid>
              <h1 className=" mt-5 mb-3" style={{ color: "#6892D5", textShadow: "2px 2px 2px #79D1C3" }}>
                รูปภาพ/X-ray Flim
                </h1>
              <Carousel className="d-flex justify-content-center " style={{ width : "55rem"}}>
                <Carousel.Item>
                  <img
                    src={require("../Picture/xrayfilm1.jpg")}
                    className="d-flex w-100"
                    style={{ height: "30rem" }}
                  ></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={require("../Picture/xrayfilm2.jpg")}
                    className=" d-flex w-100"
                    style={{ height: "30rem" }}
                  ></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={require("../Picture/xrayfilm3.jpg")}
                    className="d-flex w-100"
                    style={{ height: "30rem" }}
                  ></img>
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        

        <Col md={3} className="ms-5">
          <Container fluid>
            <h1
              className="d-flex justify-content-center mt-5"
              style={{ color: "#6892D5", textShadow: "2px 2px 2px #79D1C3" }}
            >
              Upload File
            </h1>
            <Container className="border border-secondary  border-3 rounded mt-3" 
            style={{ width: "26rem", height: "24rem", borderStyle: "dashed" }}>
              <MdUploadFile  style={{ width: "15rem", height: "15rem", opacity: "30%",
              marginTop: "3rem",marginLeft: "5rem" }} />
            </Container>

            <Form>
              <Form.Group controlId="formFile" className="mb-3 mt-3 ms-5" style={{ width: "19rem" }}>
                <Form.Control type="file" multiple />
              </Form.Group>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container >
    </>
  );
}
