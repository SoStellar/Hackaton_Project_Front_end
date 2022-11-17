import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import CalendarPage from './Calendar.js';
import TimelinePage from './Timeline.js'

export default function Appointment() {
    return(
        <>
        <Container fluid className="font-link">
            <Row className="p-3">
            <h3 className="mt-2 ms-5" style={{ color: "#6892D5"}}> ตารางนัด </h3>
                    <TimelinePage />
            </Row>
        </Container>
        </>
    )
}