import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoadEvents from './LoadEvent.js';
import TimelinePage from './Timeline.js'

export default function Appointment() {
    return (
        <>
            <Container fluid className="font-link">
                <Row >
                    <Col md={4}>
                        <h3 className="mt-2 ms-5 " style={{ color: "#6892D5", fontSize: "36px", textShadow: "5px" }}> ตารางนัด </h3>
                        <Container fluid className="border-top border-info shadow ms-5 " style={{ height: "29.5rem",backgroudColor: "#C9FDD7" }} >
                            <TimelinePage />
                        </Container>

                    </Col>
                    <Col md={8}>
                        <Container fluid className="border shadow ms-5 mt-5 " style={{width: "52rem",height: "30rem"}}>
                            <LoadEvents />
                        </Container>

                    </Col>

                </Row>
            </Container>
        </>
    )
}