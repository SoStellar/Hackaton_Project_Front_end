import React from 'react';
import { Container, Stack, Nav, Row, Col, Tab, Tabs, Card, Button } from 'react-bootstrap';
import HistoryTable from './TableHistory';
import AddCaseTable from './TableAddCase';
import { HiPlus } from 'react-icons/hi';
export default function TX() {
    return (
        <>
            <Container fluid className="font-link" style={{ height: "62.5rem" }} >
                <Row >
                    <Col md={2} style={{ width: "7.5rem" }} >
                        <Stack gap={0} className="text-center  mt-5 mt-5 pt-5">
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
                                {/* <Card.Text> นาย อีธาน วินเทอร์ </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Col md={6}></Col>
                        <Container fluid className='border  rounded mt-2 font-link' style={{ height: "31rem", borderColor: "#BFBFBF", borderWidth: "2px" }}  >
                            <Row >
                                <Col sm={1} className="text-center" style={{ height: "31rem" }}>
                                    Right
                                </Col>
                                <Col md={10} style={{ height: "31rem" }}>

                                </Col>
                                <Col sm={1} className="text-center" style={{ height: "31rem" }}>
                                    Left
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={5}>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mt-5"
                            style={{ width: "34rem" }}
                        >
                            <Tab eventKey="history" title="History">
                                <HistoryTable />
                            </Tab>
                            <Tab eventKey="case" title="Add case">
                                <AddCaseTable />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}