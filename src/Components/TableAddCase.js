import { React, useState } from "react";
import { Table, Button, Modal, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Datepicker from "./Datepicker";
import { BiEdit } from 'react-icons/bi';
export default function HistoryTable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Table striped fixed hover className="text-center" style={{ width: "34rem" }}>
                <thead style={{ backgroundColor: "#6892D5" }}>
                    <tr>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Unit</th>
                        <th>Comment</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>10/Nov/2022</td>
                        <td>ตรวจช่องปาก</td>
                        <td>1</td>
                        <td style={{ color: "#5F6C72" }}>เจอฟันผุ 2 ซี่</td>
                        <td> <Button variant="danger" onClick={handleShow}>
                            <BiEdit />
                        </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                keyboard={false}
                                size="lg"
                                style={{ marginTop: "8rem" }}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: "#6892D5",fontSize:"36px" }}>Add Case</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <h4 className="mb-3" style={{ color: "#6892D5" }} >Date picker</h4>
                                                <Datepicker style={{ color: "#6892D5" }} />
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <Card className='font-link ms-5' style={{ width: '10rem', }}>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            อุดฟัน
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            ถอนฟัน
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            ขูดหินปูน
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            รักษารากฟัน
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            ฟอกฟันขาว
                                                        </ListGroup.Item>
                                                        <ListGroup.Item style={{ color: "#79D1C3" }}>
                                                            ผ่าฟันคุด
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="success" onClick={handleClose}>Update</Button>
                                </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}