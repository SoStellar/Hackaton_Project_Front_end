import axios from "axios";
import { React, useEffect, useState, useRef } from "react";
import { Carousel, Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import Loading from "./Loading";
export default function XRayFilm() {
  const [xRayFilm, setxRayFilm] = useState([]);
  const [loading, setLoading] = useState([]);
  const [postImage, setPostImage] = useState();
  const inputFileRef = useRef(null)
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

  const SubmitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/tx/updateArray/100?update=xray_film`, {
      value: postImage
    })
    window.location.reload();
  }
  const fileToBase64 = (filename, filepath) => {
    return new Promise((resolve) => {
      var file = new File([filename], filepath);
      var reader = new FileReader(); // Read file content on file loaded event
      reader.onload = function (event) {
        resolve(event.target.result);
      }; // Convert data to base64
      reader.readAsDataURL(file);
    });
  };
  const handleChange = async (e) => {
    setPostImage(await fileToBase64(inputFileRef.current.files[0]))
  };
  console.log(postImage);

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
          <Form onSubmit={SubmitHandler}>
            <Image src={require("../Picture/filefolder.png")} fluid></Image>
            <Form.Control type="file" multiple accept=".jpeg, .png, .jpg"
              ref={inputFileRef}
              onChange={handleChange} />
            <Button type="submit">Confirm</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
