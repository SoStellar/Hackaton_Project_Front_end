import React from "react";
import { Stack, Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import { ImProfile } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

export default function Home() {
    return (
        <>
            <Container fluid className="font-link" >
                <Row>
                    <Col md={12} sm={12} >
                        <Container fluid className="" style={{ marginTop: "2rem" }} >
                            <h1 className="fw-bold  ms-5 mb-3"
                                style={{ color: "#79D1C3", textShadow: "2px 2px 2px #6892D5" }}>
                                A happy smile with a healthy smile
                            </h1>
                            <Row>
                                <Col md={4} sm={4} className=" text-center ">
                                    <Card className='card card-inverse mt-2 rounded'
                                        style={{
                                            display: 'flex', flexDirection: 'row',
                                            width: "auto", height: "auto", backgroundColor: "#6892D5"
                                        }}>
                                        <Card.Body className='ms-10'>
                                            <Card.Link href="register" style={{ color: "white", fontSize: "32px" }} >
                                                <ImProfile style={{ width: "auto", height: "auto" }} /> <br />ลงทะเบียน </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} sm={4} className=" text-center">
                                    <Card className='card card-inverse mt-2 rounded'
                                        style={{
                                            display: 'flex', flexDirection: 'row',
                                            width: "auto", height: "auto", backgroundColor: "#6892D5"
                                        }}>
                                        <Card.Body className='ms-10'>
                                            <Card.Link href="treatment" className="text-center"
                                                style={{ color: "white", fontSize: "32px" }}>
                                                <FaUserEdit style={{ width: "auto", height: "auto" }} /> <br /> คนไข้ </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} sm={4} className=" text-center">
                                    <Card className='card card-inverse mt-2 rounded'
                                        style={{
                                            display: 'flex', flexDirection: 'row',
                                            width: "auto", height: "auto", backgroundColor: "#6892D5"
                                        }}>
                                        <Card.Body className='ms-10'>
                                            <Card.Link href="calendar" className="text-center"
                                                style={{ color: "white", fontSize: "32px" }}>
                                                <IoCalendar style={{ width: "auto", height: "auto" }} /> <br /> ตารางนัด </Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </Container>
                    </Col>
                    <Col md={12} sm={12}>
                        <Container fluid >
                            <img
                                src={require("../Picture/Docter2D.jpg")}
                                className="img-fluid mx-auto d-block"
                                style={{ maxWidth: "70%", height: "auto" }}
                            />
                        </Container>
                    </Col>

                </Row>
            </Container >
        </>
    );
}
