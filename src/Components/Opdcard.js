import axios from "axios";
import {React, useEffect, useState} from "react";
import Loading from "./Loading";
// import ServiceBar from "./ServiceBar";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";
export default function Opdcard() {
  const [opd,setOPD] = useState([]);
  const [loading,setLoading] = useState([]);
  const bdate = moment(opd.birthdate).format('DD/MM/YYYY');
  const  {citizen_id} = useParams();
  useEffect(() => {
    async function getOPD(){
      try{
        setLoading(true);
        const opd = await axios.get(`http://localhost:8000/opd/1103000170208`);
        setOPD(opd.data);
      }
      catch(e){
        console.error(e);
      }
      finally{
        setLoading(false);
      }
    }
    getOPD();
  },[]); 
  
  if (loading) return <Loading />

  const editFrom = () => {

  }
  function deleteForm(e){
    e.preventDefault();
    axios.delete(`http://localhost:8000/opd/delete/${opd.citizen_id}`)
            .then(() => alert("Delete Complete"))
            .catch((err) => alert(err));
  }
  return (
    <>
      <Col md={10}>
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
              <Button variant="success" className="fw-bold font-link" onClick={editFrom}>
                EDIT
              </Button>
              <Button variant="danger" className="fw-bold font-link" onClick={deleteForm}>
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
                  <Col xs={6}>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      CN:{" "}
                    </div>
                    <div className="d-inline">{opd.client_id}</div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      เบอร์โทร:{" "}
                    </div>
                    <div className="d-inline">{opd.tel}</div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col xs={1} style={{ color: "#6892D5" }}>
                    ชื่อ
                  </Col>
                  <Col xs={1}>{opd.title}</Col>
                  <Col xs={3}>{opd.fname}</Col>
                  <Col xs={3}>{opd.lname}</Col>
                  <Col xs={4}>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      ว/ด/ป:{" "}
                    </div>
                    <div className="d-inline">{bdate}</div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      ที่อยู่:{" "}
                    </div>
                    <div className="d-inline">
                      {opd.address}
                    </div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      โรคประจำตัว:{" "}
                    </div>
                    <div className="d-inline">{opd.personal_sym.join(" ")}</div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      ประวัติการแพ้ยา:{" "}
                    </div>
                    <div className="d-inline">{opd.drug_allergy.join(" ")}</div>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <div className="d-inline" style={{ color: "#6892D5" }}>
                      ประวัติการผ่าตัด:{" "}
                    </div>
                    <div className="d-inline">{opd.surge.join(" ")}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    </>
  );
}
