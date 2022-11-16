import React from 'react';
import { Container, Stack, Nav, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';

export default function TX() {
    return (
        <>
            <Container fluid className={"font-link"} style={{ height: "62.5rem" }} >
                <Row >
                    <Col md={2} className='mt-5' style={{ width: "7.5rem", }} >
                        <Stack gap={0} className="text-center mt-5 pt-5">
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
                                <Card.Text > CN 0001 <br /> นาย อีธาน วินเทอร์ </Card.Text>
                                {/* <Card.Text> นาย อีธาน วินเทอร์ </Card.Text> */}
                            </Card.Body>
                        </Card>
                    <Container fluid className='border  rounded mt-2 font-link' style={{ height: "31rem", borderColor: "#BFBFBF", borderWidth: "2px" }}  >

                    </Container>
                    </Col>
                    <Col md={4}>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mt-5 mb-3"

                        >
                            <Tab eventKey="history" title="History">

                            </Tab>
                            <Tab eventKey="case" title="Add case">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}