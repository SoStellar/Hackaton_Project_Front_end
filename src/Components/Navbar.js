import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import {Tab,Tabs} from 'react-bootstrap';
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
    



        </>
    );
};
