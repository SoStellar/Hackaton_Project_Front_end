import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadEvents from './LoadEvent.js';
import TimelinePage from './Timeline.js'

export default function Appointment() {
    return (
        <>
            <Container fluid className="font-link">
                <Row >
                    <Col md={4} style={{ backgroundColor: "##C9FDD7" }}>
                        <h3 className="mt-2 ms-5 " style={{ color: "#6892D5", fontSize: "36px", textShadow: "5px" }}> ตารางนัด </h3>
                        <Container fluid className="border border-info rounded shadow ms-5 pt-3" style={{ height: "30rem", backgroundColor: "#C9FDD7" }} >
                            <TimelinePage />
                        </Container>

                    </Col>
                    <Col md={8}>
                        <Container fluid className="border border-info rounded shadow ms-5 pt-3" style={{ width: "52rem", height: "30rem", marginTop: "3.5rem", backgroundColor: "#C9FDD7" }}>
                            <LoadEvents />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}