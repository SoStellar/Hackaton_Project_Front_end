import { React, useState, useEffect, useRef } from "react";
import { Carousel, Container, Row, Col, Form, Stack, Nav, Button } from "react-bootstrap";
import { MdUploadFile } from 'react-icons/md'
import axios from "axios";

export default function XRayFilm() {
  const [xRayFilm, setxRayFilm] = useState([]);
  const [loading, setLoading] = useState([]);
  const [postImage, setPostImage] = useState();
  const inputFileRef = useRef(null)
  useEffect(() => {
    async function getxRayfilm() {
      try {
        setLoading(true);
        const xRayFilm = await axios.get(`http://localhost:8000/tx/xrayfilm/3000`);
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
    axios.put(`http://localhost:8000/tx/updateArray/3000?update=xray_film`, {
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
  return (
    <>
      <Container fluid className="font-link" >
        <Row>
          <Col md={3} style={{ width: "7.5rem", marginTop: "4.5rem" }} >
            <Stack gap={0} className="text-center  mt-5 pt-5">
              <Nav.Link href="treatment" className='rounded-top pt-5'
                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                ข้อมูลการรักษา
              </Nav.Link>
              <Nav.Link href="Picture" className="border-top border-info pt-5"
                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                X-ray flim
              </Nav.Link>
              <Nav.Link href="searchPatients" className="border-top border-info rounded-bottom pt-5"
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
              <Carousel className="d-flex justify-content-center " style={{ width: "55rem" }}>
                {xRayFilm.map((data) =>
                  <Carousel.Item>
                    <img src={`${data}`} className="d-block w-100" style={{ height: "30rem" }} />
                  </Carousel.Item>
                )}
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
                <MdUploadFile style={{
                  width: "15rem", height: "15rem", opacity: "30%",
                  marginTop: "3rem", marginLeft: "5rem"
                }} />
              </Container>

              <Form className="d-flex" onSubmit={SubmitHandler}>
                <Form.Group controlId="formFile" className="mb-3 mt-3 ms-2" style={{ width: "19rem" }}>
                  <Form.Control type="file" multiple accept=".jpeg, .png, .jpg" ref={inputFileRef} onChange={handleChange} />
                </Form.Group>
                <Button
                  className="mt-2 ms-3"
                  type="submit"
                  style={{
                    borderColor: "#6892D5", backgroundColor: "#6892D5",
                    borderWidth: "2px", color: "white", height: "50px"
                  }}>
                  Upload
                </Button>
              </Form>

            </Container>
          </Col>
        </Row>
      </Container >
    </>
  );
}
