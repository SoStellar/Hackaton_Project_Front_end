import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function Opdcard() {
  return (
    <Container
      style={{
        marginTop: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderRadius: 5,
        
      }}
      className="font-link"
    >
      <div style={{ width: "65rem", background: "#C9FDD7" }}>
        <div className="d-flex justify-content-end p-2 d-grid gap-2">
          <Button variant="success" className="fw-bold font-link" >
            EDIT
          </Button>
          <Button variant="danger" className="fw-bold font-link">
            DELETE
          </Button>
        </div>

        <Row>
          <Col sm={12} md={6}>
            <Image
              src={require("../Picture/exProfile.png")}
              fluid
              roundedCircle
            />
          </Col>
          <Col sm={12} md={6} className="pt-5">
            <Row className="py-3">
              <Col xs={6}><div className="d-inline" style={{color:'#6892D5'}}>CN: </div><div className="d-inline">001</div></Col>
              <Col xs={6}><div className="d-inline" style={{color:'#6892D5'}}>เบอร์โทร: </div><div className="d-inline">0903216866</div></Col>
            </Row>
            <Row className="py-3">
              <Col xs={1} style={{color:'#6892D5'}}>ชื่อ</Col>
              <Col xs={1}>นาย</Col>
              <Col xs={3}>พีระวิทย์</Col>
              <Col xs={3}>เขินประติยุทธ</Col>
              <Col xs={4}><div className="d-inline" style={{color:'#6892D5'}}>ว/ด/ป: </div><div className="d-inline">19/10/2545</div></Col>
            </Row>
            <Row className="py-3">
                <Col><div className="d-inline" style={{color:'#6892D5'}}>ที่อยู่: </div><div className="d-inline">22/150 หมู่3 หมู่บ้านกุลพันธ์วิลล์12 ต.ป่าบง อ.สารภี จ.เชียงใหม่</div></Col>
            </Row>
            <Row className="py-3">
                <Col><div className="d-inline" style={{color:'#6892D5'}}>โรคประจำตัว: </div><div className="d-inline">G6PD</div></Col>
            </Row>
            <Row className="py-3">
                <Col><div className="d-inline" style={{color:'#6892D5'}}>ประวัติการแพ้ยา: </div><div className="d-inline">Aspirin Amphetamine</div></Col>
            </Row>
            <Row className="py-3">
                <Col><div className="d-inline" style={{color:'#6892D5'}}>ประวัติการผ่าตัด: </div><div className="d-inline">ไม่มี</div></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
