import { React, useState } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Image,
  FloatingLabel,
} from "react-bootstrap";

export default function FormPatient() {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Form>
        <Row>
          <Col xs={12} sm={4} className="mb-3">
            <Image
              src={require("../Picture/exProfile.png")}
              fluid
              roundedCircle
            ></Image>
            <Form.Control type="file" size="sm" />
          </Col>
          <Col xs={12} sm={8}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTitle">
                <FloatingLabel controlId="floatingTitle" label="คำนำหน้า" >
                  <Form.Select style={{background:'#C9FDD7'}}>
                    <option value="1">นาย</option>
                    <option value="2">นาง</option>
                    <option value="3">นางสาว</option>
                    <option value="3">ด.ช.</option>
                    <option value="3">ด.ญ.</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFname">
                <FloatingLabel controlId="floatingFname" label="ชื่อ">
                  <Form.Control type="text" placeholder="ชื่อ" style={{background:'#C9FDD7'}}/>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLname">
                <FloatingLabel controlId="floatingLname" label="นามสกุล">
                  <Form.Control type="text" placeholder="นามสกุล"  style={{background:'#C9FDD7'}}/>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="fromGridBD">
                <FloatingLabel controlId="floatingBD" label="ว/ด/ป เกิด">
                  <Form.Control type="date" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="fromGridID">
                <FloatingLabel
                  controlId="floatingID"
                  label="เลขประจำตัวประชาชนหรือพาสปอร์ต"
                >
                  <Form.Control type="text" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <FloatingLabel
                controlId="floatingTextarea2"
                label="ทีอยู่"
                className="my-2 px-2"
              >
                <Form.Control as="textarea" placeholder="ที่อยู่" style={{background:'#C9FDD7'}}/>
              </FloatingLabel>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="fromGridEmail">
                <FloatingLabel controlId="floatingEmail" label="อีเมล">
                  <Form.Control type="email" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="fromGridPhone">
                <FloatingLabel controlId="floatingPhone" label="เบอร์โทร">
                  <Form.Control type="text" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="fromGridSymtoms">
                <FloatingLabel controlId="floatingSymtoms" label="โรคประจำตัว">
                  <Form.Control type="text" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="fromGridTX">
                <FloatingLabel controlId="floatingTX" label="ประวัติการแพ้ยา">
                  <Form.Control type="text" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSurge">
                <FloatingLabel
                  controlId="floatingSurge"
                  label="ประวัติการผ่าตัด"
                >
                  <Form.Control type="text" style={{background:'#C9FDD7'}}></Form.Control>
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="btnConfirm">
                <div className="d-flex justify-content-end">
                <Button type="submit" style={{height:'4rem'}} className="fw-bold" variant="outline-primary">Add Patient</Button>
                </div>
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
