import { React, useState, useEffect } from "react";
import ServiceBar from "./ServiceBar";
import SearchPatient from "./SearchPatient";
import { Container, Row, Col, Button, Image, Stack, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Opdcard() {
  const [opd, setOPD] = useState([]);
  // const [loading, setLoading] = useState([]);
  const bdate = moment(opd.birthdate).format('DD/MM/YYYY');
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [drug, setDrug] = useState("");
  const [sym, setSym] = useState("");
  const [surge, setSurge] = useState("");
  const [loadCheck, setLoadCheck] = useState(false);


  useEffect(() => {

    async function getOPD() {
      try {
        setLoadCheck(false);

        // setLoading(true);
        const opd = await axios.get(`http://localhost:8000/opd/${user}`);
        setOPD(opd.data);
        setDrug(opd.data.drug_allergy)
        setSym(opd.data.personal_sym)
        setSurge(opd.data.surge)
      }
      catch (e) {
        console.error(e);
      } finally {
        setLoadCheck(true);

      }
      // finally {
      //   setLoading(false);
      // }
    }
    getOPD();
  }, [user]);

  // if (loading) return <Loading />
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
          <Col md={9} className="ms-5">
            <SearchPatient className="mt-3" setUserId={setUser} />
            <div className={` ${opd._id == undefined ? "hide-container" : ""} `}>
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
                <div className="border border-info rounded shadow " style={{ width: "65rem", background: "#C9FDD7" }}>
                  <div className="d-flex align-items-end flex-column">
                    <Button className="mb-auto m-3 fw-bold font-link" style={{ backgroundColor: "#6892D5", borderColor: "#6892D5" }} >
                      Edit
                    </Button>
                  </div>

                  <Row>
                    <Col sm={12} md={6}>
                      <Container>
                        <Image
                          src={opd.myProfile}
                          fluid
                          roundedCircle
                          className="m-3"
                          style={{ width: "25rem", height: "25rem" }}
                        />
                      </Container>

                    </Col>
                    <Col sm={12} md={6} className="pt-5">
                      <Row className="py-3">
                        <Col xs={6}><div className="d-inline" style={{ color: '#6892D5' }}>CN: </div><div className="d-inline">{opd.client_id}</div></Col>
                        <Col xs={6}><div className="d-inline" style={{ color: '#6892D5' }}>เบอร์โทร: </div><div className="d-inline">{opd.tel}</div></Col>
                      </Row>
                      <Row className="py-3">
                        <Col xs={1} style={{ color: '#6892D5' }}>ชื่อ</Col>
                        <Col xs={1}>{opd.title}</Col>
                        <Col xs={3}>{opd.fname}</Col>
                        <Col xs={3}>{opd.lname}</Col>
                        <Col xs={4}><div className="d-inline" style={{ color: '#6892D5' }}>ว/ด/ป: </div><div className="d-inline">{bdate}</div></Col>
                      </Row>
                      <Row className="py-3">
                        <Col><div className="d-inline" style={{ color: '#6892D5' }}>ที่อยู่: </div><div className="d-inline">{opd.address}</div></Col>
                      </Row>
                      <Row className="py-3">
                        <Col><div className="d-inline" style={{ color: '#6892D5' }}>โรคประจำตัว: </div><div className="d-inline">{!loadCheck ? ("") : (`${sym}`)}</div></Col>
                      </Row>
                      <Row className="py-3">
                        <Col><div className="d-inline" style={{ color: '#6892D5' }}>ประวัติการแพ้ยา: </div><div className="d-inline">{
                          !loadCheck ? ("") : (`${drug}`)
                        }</div></Col>
                      </Row>
                      <Row className="py-3">
                        <Col><div className="d-inline" style={{ color: '#6892D5' }}>ประวัติการผ่าตัด: </div><div className="d-inline">{!loadCheck ? ("") : (`${surge}`)}</div></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Container>

            </div>
          </Col>
        </Row>

      </Container>


    </>
  );
}


