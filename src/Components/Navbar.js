import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Stack, Row, Col } from 'react-bootstrap';
import { ImProfile } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
export default function CollapsibleExample() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={"font-link"} sticky="top" style={{ backgroundColor: "#79D1C3", color: "#6892D5" }} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={require('../Picture/TestLogo.png')}
                            width="80"
                            height="70"
                            className="d-inline-block align-top"
                            alt="logoSmileDent"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home" style={{ fontSize: "48px", color: "#6892D5" }} >SmileDent.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-5">
                            <Nav.Link href="#register" ><ImProfile /> ลงทะเบียน</Nav.Link>
                            <Nav.Link href="#patient"><FaUserEdit /> คนไข้</Nav.Link>
                            <Nav.Link href="#appiontment"><IoCalendar /> ตารางนัด</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="#Profile">
                            <img
                                src={require('../Picture/exProfile.png')}
                                width="70"
                                height="70"
                                className="d-inline-block align-top"
                                alt="logoSmileDent"
                            />
                        </Navbar.Brand>
                        <Nav>
                            <NavDropdown title="User" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action1">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className={"font-link"} style={{ height: "62.5rem"}} >
                <Row >
                    <Col md={2}  style={{ width: "7.5rem",}} >
                        <Stack gap={0} className="text-center mt-5">
                            <Nav.Link href="#treatment" className='border-info rounded-top pt-5' style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลการรักษา
                            </Nav.Link>
                            <Nav.Link href="#Picture" className="border-top border-info pt-5" style={{ height: "7.5rem",backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                X-ray flim
                            </Nav.Link>
                            <Nav.Link href="#Contact" className="border-top border-info rounded-bottom pt-5" style={{ height: "7.5rem",backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลส่วนตัวคนไข้
                            </Nav.Link>
                        </Stack>
                    </Col>
                    <Col md={6} >2 of 3</Col>
                    <Col md={4}>3 of 3</Col>
                </Row>
                </Container>

            

        </>
    );
};
