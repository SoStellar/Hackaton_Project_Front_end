import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadEvents from './LoadEvent.js';
import TimelinePage from './Timeline.js'

export default function Appointment() {
    return (
        <>
            <Container fluid className="font-link" style={{marginTop: "2rem"}}>
                <Row >
                    <Col md={12} sm={12} style={{ backgroundColor: "##C9FDD7" }}>
                        <h1 className="mt-2  mb-5 " 
                        style={{ color: "#6892D5",
                        textShadow: "2px 2px 2px #79D1C3",marginLeft:"12rem" }}>
                             ตารางนัด 
                             </h1>
                        <Container fluid className="border border-info rounded shadow pt-3 pb-3"
                         style={{ height: "auto", backgroundColor: "#C9FDD7" }} >
                            <TimelinePage />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}