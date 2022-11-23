import { React, useState, useEffect, useRef } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Image,
  FloatingLabel, Stack, Nav
} from "react-bootstrap";
import ServiceBar from "./ServiceBar";
import { HiOutlineUpload } from 'react-icons/hi'
import axios from "axios";

export default function FormPatient() {
  const [postImage, setPostImage] = useState();
  const inputFileRef = useRef(null)
  const SubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/opd/`, {
        client_id: Math.floor(Math.random() * 1000000),
        title: e.target.title.value,
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        birthdate: e.target.bdate.value,
        citizen_id: e.target.citizen_id.value,
        tel: e.target.tel.value,
        address: e.target.address.value,
        personal_sym: e.target.personal_sym.value,
        drug_allergy: e.target.drug_allergy.value,
        surge: e.target.surge.value,
        myProfile: postImage,
      })
      .then((response) => {
        console.log(response);
        alert("Add Complete");
        window.location.href = ('http://localhost:3000/searchPatients');
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.href = ('http://localhost:3000/searchPatients');
  };
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
      <Container fluid className={"font-link"} style={{ height: "62.5rem" }} >
        <Row >
          <Col md={2} style={{ width: "7.5rem", marginTop: "4.5rem" }} >
            <Stack gap={0} className="text-center  mt-5 pt-5">
              <Nav.Link href="#treatment" className='border-info rounded-top pt-5'
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
          <Col md={10}>
            <Container style={{ marginTop: "2rem" }}>
              <Form className="font-link" onSubmit={SubmitHandler}>
                <h1 className="mb-5" style={{ color: "#6892D5", textShadow: "2px 2px 2px #79D1C3" }}>เพิ่มประวัติคนไข้</h1>
                <Row>
                  <Col xs={12} sm={4}>
                    <Image
                      src={require("../Picture/exPatient.png")}
                      fluid className="mb-3"
                    ></Image>
                    <Form.Control type="file" size="md" style={{ width: "15rem", marginLeft: "5.5rem", marginBottom: "4rem" }}
                      accept=".jpeg, .png, .jpg"
                      ref={inputFileRef}
                      onChange={handleChange} />
                  </Col>
                  <Col xs={12} sm={8}>
                    <Row className="mb-3 ">
                      <Form.Group as={Col} controlId="formGridTitle">
                        <FloatingLabel controlId="floatingTitle" label="คำนำหน้า">
                          <Form.Select style={{ width: "7rem", background: '#C9FDD7' }} id="title" required>
                            <option value="1">นาย</option>
                            <option value="2">นาง</option>
                            <option value="3">นางสาว</option>
                            <option value="4">ด.ช.</option>
                            <option value="5">ด.ญ.</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridFname">
                        <FloatingLabel controlId="floatingFname" className="justify-content-start" label="ชื่อจริง" >
                          <Form.Control type="text" placeholder="ชื่อ" style={{ background: '#C9FDD7' }} id="fname" required />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridLname">
                        <FloatingLabel controlId="floatingLname" label="นามสกุล">
                          <Form.Control type="text" placeholder="นามสกุล" style={{ background: '#C9FDD7' }} id="lname" required />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridBD">
                        <FloatingLabel controlId="floatingBD" label="ว/ด/ป เกิด">
                          <Form.Control type="date" style={{ background: '#C9FDD7' }} id="bdate" required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">

                      <Form.Group as={Col} controlId="fromGridID">
                        <FloatingLabel controlId="floatingIDcard" label="เลขบัตรปชช/พาสสปอร์ต">
                          <Form.Control type="text" placeholder="เลขบัตรปชช/พาสสปอร์ต" style={{ background: '#C9FDD7' }} id="citizen_id" required />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridAddress">
                        <FloatingLabel
                          controlId="floatingAddress"
                          label="ที่อยู่"
                        >
                          <Form.Control type="text" placeholder="ที่อยู่" style={{ background: '#C9FDD7' }} id="address" required />
                        </FloatingLabel></Form.Group>

                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridEmail">
                        <FloatingLabel controlId="floatingEmail" label="อีเมล">
                          <Form.Control type="text" placeholder="อีเมล" style={{ background: '#C9FDD7' }} required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridPhone">
                        <FloatingLabel controlId="floatingPhone" label="เบอร์โทร">
                          <Form.Control type="text" placeholder="เบอร์โทร" style={{ background: '#C9FDD7' }} id="tel" required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridSymtoms">
                        <FloatingLabel controlId="floatingSymtoms" label="โรคประจำตัว">
                          <Form.Control type="text" placeholder="โรคประจำตัว" style={{ background: '#C9FDD7' }} id="personal_sym" required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridTX">
                        <FloatingLabel controlId="floatingTX" label="ประวัติการแพ้ยา">
                          <Form.Control type="text" placeholder="ประวัติการแพ้ยา" style={{ background: '#C9FDD7' }} id="drug_allergy" required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridSurge">
                        <FloatingLabel
                          controlId="floatingSurge"
                          label="ประวัติการผ่าตัด"
                        >
                          <Form.Control type="text" placeholder="ประวัติการผ่าตัด" style={{ background: '#C9FDD7' }} id="surge" required></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="btnConfirm">
                        <div className="d-flex justify-content-end">
                          <Button type="submit" style={{ height: '3rem', backgroundColor: "#6892D5", borderColor: "#6892D5" }} className="fw-bold shadow" variant="primary"> Add Patient</Button>
                        </div>
                      </Form.Group>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>

      </Container>
    </>
  );
}
