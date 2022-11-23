import { React, useState, useEffect } from 'react';
import { Container, Stack, Nav, Row, Col, Tab, Tabs, Card, Button, Modal, ListGroup, Form, Dropdown, Table } from 'react-bootstrap';
import HistoryTable from './TableHistory';
import AddCaseTable from './TableAddCase';
import Datepicker from './Datepicker';
import { HiPlus } from 'react-icons/hi';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function TX() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [txshow, setTxshow] = useState([]);
    const [loading, setLoading] = useState(false);
    let { citizen_id } = useParams();
    const [user, setUser] = useState("");
    const [teeth_code, setTeethcode] = useState([]);
    const [treat, setTreat] = useState("");
    const [comment, setComment] = useState("");
    const [cure_date, setCureDate] = useState("");
    const [opdX, setOPD] = useState([]);

    const [x, setx] = useState(0);
    const [y, sety] = useState([]);
    let teethCodeArray = [];

    useEffect(() => {
        async function getTX() {
            try {
                setLoading(false);
                const opd = await axios.get(
                    `http://localhost:8000/opd/100`
                )
                setOPD(opd.data)
                setUser(opd.data.client_id);
                console.log(user)
                const tx = await axios.get(
                    `http://localhost:8000/tx/${user}`
                );
                setTxshow(tx.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(true);
            }
        }
        getTX();
    }, []);


    const SubmitHandler = () => {
        axios.post(`http://localhost:8000/tx`, {
            client_id: user,
            cure_date: cure_date,
            teeth_po: y,
            treat: treat,
            comment: comment
        })
            .then((response) => {
                console.log(response);
                alert("Add Complete");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const addInTeethArray = (e) => {
        teethCodeArray = y;
        teethCodeArray.push(x);
        sety(teethCodeArray);
        console.log(teethCodeArray)
    }

    console.log(loading);
    if (loading) console.log(txshow);

    return (
        <>
            <Container fluid className="font-link" style={{ height: "62.5rem" }} >
                <Row >
                    <Col md={2} style={{ width: "7.5rem", marginTop: "4.5rem" }} >
                        <Stack gap={0} className="text-center  mt-5 pt-5">
                            <Nav.Link href="treatment" className='border-info rounded-top pt-5'
                                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลการรักษา
                            </Nav.Link>
                            <Nav.Link href="picture" className="border-top border-info pt-5"
                                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                X-ray flim
                            </Nav.Link>
                            <Nav.Link href="searchPatients" className="border-top border-info rounded-bottom pt-5"
                                style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลส่วนตัวคนไข้
                            </Nav.Link>
                        </Stack>
                    </Col>
                    <Col md={10}>

                        <Card className='mt-2 rounded' style={{ display: 'flex', flexDirection: 'row', width: '24rem', backgroundColor: "#C9FDD7" }}>
                            <Card.Img
                                variant='left'
                                src={require('../Picture/exPatient.png')}
                                width="60"
                                height="60"
                                className='mt-2 ms-2 mb-2'
                            />
                            <Card.Body className='ms-10'>
                                <Card.Text style={{ color: "#6892D5" }}> CN {opdX.client_id} <br /> {opdX.title} {opdX.fname} {opdX.lname} </Card.Text>
                            </Card.Body>
                        </Card>

                        <Tabs
                            defaultActiveKey="history"
                            id="TabsTx"
                            className='mt-3'
                            style={{ width: "60rem" }}

                        >
                            <Tab eventKey="history" title="History" >
                                <Table striped hover className="text-center">
                                    <thead style={{ backgroundColor: "#6892D5" }}>
                                        <tr >
                                            <th>Date</th>
                                            <th>Service</th>
                                            <th>Teeth code</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <>
                                                {txshow.map((data) => (
                                                    <HistoryTable key={data.client_id} item={data} />
                                                ))}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="addCase" title="Add case">
                                <Table striped hover className="text-center">
                                    <thead style={{ backgroundColor: "#6892D5" }}>
                                        <tr>
                                            <th>Date</th>
                                            <th>Service</th>
                                            <th>Teeth code</th>
                                            <th>Comment</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {loading ? (
                                            <>
                                                {txshow.map((data) => (
                                                    <AddCaseTable key={data.client_id} item={data} />
                                                ))}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </tbody>
                                </Table>
                                <Button className='bg-white text-center position-absolute top-50 start-50 translate-middle-x'
                                    style={{
                                        borderRadius: "3rem", borderColor: "#6892D5",
                                        borderWidth: "2px", color: "#6892D5",
                                    }}
                                    value={'input'}
                                    onClick={handleShow}>
                                    <HiPlus />
                                </Button>
                            </Tab>
                        </Tabs>
                        <Form>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                keyboard={false}
                                size="xl"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "#6892D5" }}>Add Case</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >

                                    <Container>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >วันที่</h3>
                                                <Form.Control type="date" placeholder="วว/ดด/ปป" style={{ background: '#C9FDD7' }} id="cure_date" required onChange={(e) => setCureDate(e.target.value)} />
                                                <Container fluid className='border border-primary  rounded mt-3 font-link'
                                                    style={{ height: "35rem", width: "40rem" }}  >
                                                    <Row >
                                                        <img src={require("../Picture/toothnumberingLR.jpg")}
                                                            className="img-fluid align-self-center" alt="TeethDiagram"
                                                        />
                                                    </Row>
                                                </Container>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >ตำแหน่งฟัน</h3>
                                                <Form.Select
                                                    className='pre-scrollable fw-bold'
                                                    aria-label="Default select example"
                                                    style={{
                                                        backgroundColor: "#C9FDD7", borderColor: "#79D1C3",
                                                        color: "#5F6C72", maxHeight: "150px", overflowY: "auto", width: "8.5rem"
                                                    }}
                                                    id="teeth_po"
                                                    onChange={(e) => setx(e.target.value)}
                                                >
                                                    <option>เลือกตำแหน่งฟันที่ทำ</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                </Form.Select>

                                                <Button className='text-center m-2'
                                                    style={{
                                                        borderRadius: "3rem", borderColor: "#6892D5", backgroundColor: "#6892D5",
                                                        borderWidth: "2px", color: "white",
                                                    }}
                                                    onClick={addInTeethArray}>
                                                    <HiPlus />
                                                </Button>
                                                <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >บริการ</h3>
                                                <Form.Select
                                                    className='pre-scrollable font-link fw-bold'
                                                    aria-label="Default select example"
                                                    style={{
                                                        backgroundColor: "#C9FDD7", borderColor: "#79D1C3",
                                                        color: "#5F6C72", maxHeight: "100px", overflowY: "auto", width: "9.5rem"
                                                    }}
                                                    id="treat"
                                                    onChange={e => setTreat(e.target.value)}
                                                    required
                                                >
                                                    <option>เลือกบริการ</option>
                                                    <option value="อุดฟัน">อุดฟัน</option>
                                                    <option value="ถอดฟัน">ถอดฟัน</option>
                                                    <option value="รักษารากฟัน">รักษารากฟัน</option>
                                                    <option value="ขูดหินปูน">ขูดหินปูน</option>
                                                    <option value="ฟอกฟันขาว">ฟอกฟันขาว</option>
                                                </Form.Select>
                                                <Form.Group className="mt-4 fw-bold" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Comment</Form.Label>
                                                    <Form.Control as="textarea" className='font-link' rows={3} id="comment"
                                                        onChange={e => setComment(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit" onClick={SubmitHandler} >Add</Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Col>


                </Row>
            </Container>
        </>
    )
}