import { React, useState } from "react";
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

export default function FormPatient() {
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
              <Form className="font-link">
                <h1 className="mb-5" style={{ color: "#6892D5", textShadow: "2px 2px 2px #79D1C3" }}>เพิ่มประวัติคนไข้</h1>
                <Row>
                  <Col xs={12} sm={4}>
                    <Image
                      src={require("../Picture/exPatient.png")}
                      fluid className="mb-3"
                    ></Image>
                    <Form.Control type="file" size="md" style={{ width: "15rem", marginLeft: "5.5rem", marginBottom: "4rem" }} />
                  </Col>
                  <Col xs={12} sm={8}>
                    <Row className="mb-3 ">
                      <Form.Group as={Col} controlId="formGridTitle">
                        <FloatingLabel controlId="floatingTitle" label="คำนำหน้า" >
                          <Form.Select style={{ width: "7rem", background: '#C9FDD7' }}>
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
                          <Form.Control type="text" placeholder="ชื่อ" style={{ background: '#C9FDD7' }} />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridLname">
                        <FloatingLabel controlId="floatingLname" label="นามสกุล">
                          <Form.Control type="text" placeholder="นามสกุล" style={{ background: '#C9FDD7' }} />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridBD">
                        <FloatingLabel controlId="floatingBD" label="ว/ด/ป เกิด">
                          <Form.Control type="date" style={{ background: '#C9FDD7' }}></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">

                      <Form.Group as={Col} controlId="fromGridID">
                        <FloatingLabel controlId="floatingIDcard" label="เลขบัตรปชช/พาสสปอร์ต">
                          <Form.Control type="text" placeholder="เลขบัตรปชช/พาสสปอร์ต" style={{ background: '#C9FDD7' }} />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridAddress">
                        <FloatingLabel
                          controlId="floatingAddress"
                          label="ที่อยู่"
                        >
                          <Form.Control type="text" placeholder="ที่อยู่" style={{ background: '#C9FDD7' }} />
                        </FloatingLabel></Form.Group>

                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridEmail">
                        <FloatingLabel controlId="floatingEmail" label="อีเมล">
                          <Form.Control type="text" placeholder="อีเมล" style={{ background: '#C9FDD7' }}></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridPhone">
                        <FloatingLabel controlId="floatingPhone" label="เบอร์โทร">
                          <Form.Control type="text" placeholder="เบอร์โทร" style={{ background: '#C9FDD7' }}></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="fromGridSymtoms">
                        <FloatingLabel controlId="floatingSymtoms" label="โรคประจำตัว">
                          <Form.Control type="text" placeholder="โรคประจำตัว" style={{ background: '#C9FDD7' }}></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="fromGridTX">
                        <FloatingLabel controlId="floatingTX" label="ประวัติการแพ้ยา">
                          <Form.Control type="text" placeholder="ประวัติการแพ้ยา" style={{ background: '#C9FDD7' }}></Form.Control>
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridSurge">
                        <FloatingLabel
                          controlId="floatingSurge"
                          label="ประวัติการผ่าตัด"
                        >
                          <Form.Control type="text" placeholder="ประวัติการผ่าตัด" style={{ background: '#C9FDD7' }}></Form.Control>
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
