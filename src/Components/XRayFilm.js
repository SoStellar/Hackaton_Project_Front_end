import axios from "axios";
import { React, useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Form, Image } from "react-bootstrap";
import Loading from "./Loading";
export default function XRayFilm() {
  const [xRayFilm, setxRayFilm] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function getxRayfilm() {
      try {
        setLoading(true);
        const xRayFilm = await axios.get(`http://localhost:8000/tx/100`);
        setxRayFilm(xRayFilm.data.xray_film);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setLoading(false);
      }
    }
    getxRayfilm();
  }, []);

  console.log(xRayFilm);

  if (loading) return <Loading />
  return (
    <Container
      style={{ marginTop: "4rem", marginBottom: "3rem" }}
      className="font-link"
    >
      <Row>
        <Col xs={12} sm={9}>
          <Carousel className="d-flex justify-content-center align-item-center">
            {xRayFilm.map((data) =>
              <Carousel.Item>
                <img src={`${data}`} className="d-block w-100" style={{ height: "30rem" }} />
              </Carousel.Item>
            )}
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
