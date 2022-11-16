import React from 'react';
import {Container, Nav, Stack, Row, Col,Tab,Tabs} from 'react-bootstrap';

export default function ServiceBar (){
    return(
        <>
        <Container fluid className={"font-link"} style={{ height: "62.5rem" }} >
                <Row >
                    <Col md={2} style={{ width: "7.5rem", }} >
                        <Stack gap={0} className="text-center shadow mt-5 pt-5">
                            <Nav.Link href="#treatment" className='border-info shadow rounded-top pt-5' 
                            style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลการรักษา
                            </Nav.Link>
                            <Nav.Link href="#Picture" className="border-top shadow border-info pt-5" 
                            style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                X-ray flim
                            </Nav.Link>
                            <Nav.Link href="#Contact" className="border-top shadow border-info rounded-bottom pt-5" 
                            style={{ height: "7.5rem", backgroundColor: "#C9FDD7", color: "#6892D5" }}>
                                ข้อมูลส่วนตัวคนไข้
                            </Nav.Link>
                        </Stack>
                        </Col>
                        </Row>
        </Container>
        </>
    )
}