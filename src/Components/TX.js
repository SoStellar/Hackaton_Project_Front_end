import { React, useState } from 'react';
import { Container, Stack, Nav, Row, Col, Tab, Tabs, Card, Button, Modal, ListGroup, Form } from 'react-bootstrap';
import HistoryTable from './TableHistory';
import AddCaseTable from './TableAddCase';
import Datepicker from './Datepicker';
import { HiPlus } from 'react-icons/hi';
import { Checkbox } from '@mobiscroll/react';



export default function TX() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var Upper_teeth = document.getElementsByName('UpperTeeth') 


    return (
        <>
            <Container fluid className="font-link" style={{ height: "62.5rem" }} >
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
                    <Col md={6}>
                        <Card className='mt-2 rounded' style={{ display: 'flex', flexDirection: 'row', width: '24rem', backgroundColor: "#C9FDD7" }}>
                            <Card.Img
                                variant='left'
                                src={require('../Picture/exPatient.png')}
                                width="60"
                                height="60"
                                className='mt-2 ms-2 mb-2'
                            />
                            <Card.Body className='ms-10'>
                                <Card.Text style={{ color: "#6892D5" }}> CN 0001 <br /> นาย อีธาน วินเทอร์ </Card.Text>
                            </Card.Body>
                        </Card>
                        <Col md={6}>
                            <Container fluid className='border border-secondary  rounded mt-3 font-link'
                                style={{ height: "35rem", width: "50rem" }}  >
                                <Row >
                                    <Col md={2} className="d-flex align-items-start flex-column"
                                        style={{ height: "35rem", color: "#6892D5" }}>
                                        <div class="mb-auto p-2">Upper right</div>
                                        <div class="p-2">Lower right</div>
                                    </Col>
                                    <Col md={8} className="img-responsive center-block"
                                        style={{ height: "35rem" }}>
                                        <Form className='teethCheckbox'>
                                            <idTeeth />
                                        </Form>

                                        <img src={require("../Picture/TeethDiagram.png")} class="img-fluid align-self-center" alt="TeethDiagram"
                                            style={{}} />
                                    </Col>
                                    <Col md={2} className="d-flex align-items-end flex-column"
                                        style={{ height: "35rem", color: "#6892D5" }}>
                                        <div class="mb-auto p-2">Upper left</div>
                                        <div class="p-2">Lower left</div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Col>
                    <Col md={5}>
                        <Tabs
                            defaultActiveKey="history"
                            id="TabsTx"
                            style={{ width: "34rem", marginTop: "3.5rem" }}

                        >
                            <Tab eventKey="history" title="History" >
                                <HistoryTable />
                            </Tab>
                            <Tab eventKey="addCase" title="Add case">
                                <AddCaseTable />
                                <Button className='bg-white text-center'
                                    style={{
                                        borderRadius: "3rem", borderColor: "#6892D5",
                                        borderWidth: "2px", color: "#6892D5", marginLeft: "15rem"
                                    }}
                                    value={'input'}
                                    onClick={handleShow}>
                                    <HiPlus />
                                </Button>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        keyboard={false}
                        size="lg"
                        style={{ marginTop: "8rem" }}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#6892D5" }}>Add Case</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <h2>Date picker</h2>
                                        <Datepicker style={{ color: "#6892D5" }} />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <Card className='font-link ms-5' style={{ width: '10rem', }}>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item style={{ color: "#79D1C3" }}>อุดฟัน</ListGroup.Item>
                                                <ListGroup.Item style={{ color: "#79D1C3" }}>ถอนฟัน</ListGroup.Item>
                                                <ListGroup.Item style={{ color: "#79D1C3" }}> ขูดหินปูน</ListGroup.Item>
                                                <ListGroup.Item style={{ color: "#79D1C3" }}>รักษารากฟัน</ListGroup.Item>
                                                <ListGroup.Item style={{ color: "#79D1C3" }}>ฟอกฟันขาว</ListGroup.Item>
                                                <ListGroup.Item style={{ color: "#79D1C3" }}>ผ่าฟันคุด</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Add</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </>
    )
}