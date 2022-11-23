import { React, useState } from "react";
import { Table, Button, Modal, Container, Row, Col, Form } from "react-bootstrap";
import Datepicker from "./Datepicker";
import { BiEdit } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';
import moment from "moment";

export default function HistoryTable({ item }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cureDate = moment(item.cure_date).format('DD/MM/YYYY');
    const [serviceList, setServiceList] = useState([{ id: "อุดฟัน", value: "อุดฟัน" }, { id: "ถอนฟัน", value: "ถอนฟัน" }, { id: "ขูดหินปูน", value: "ขูดหินปูน" },
    { id: "รักษารากฟัน", value: "รักษารากฟัน" }, { id: "ฟอกฟันขาว", value: "ฟอกฟันขาว" }])
    const [teethCodeList, setTeethCodeList] = useState([{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }, { id: 4, value: 4 }, { id: 5, value: 5 }, { id: 6, value: 6 },
    { id: 7, value: 7 }, { id: 8, value: 8 }, { id: 9, value: 9 }, { id: 10, value: 10 }, { id: 11, value: 11 }, { id: 12, value: 12 },
    { id: 13, value: 13 }, { id: 14, value: 14 }, , { id: 15, value: 15 }, { id: 16, value: 16 }, { id: 17, value: 17 }, { id: 18, value: 18 },
    { id: 19, value: 19 }, { id: 20, value: 20 }, { id: 21, value: 22 }, { id: 23, value: 23 }, { id: 24, value: 24 }, { id: 25, value: 25 },
    { id: 26, value: 26 }, { id: 27, value: 27 }, { id: 28, value: 28 }, { id: 29, value: 29 }, { id: 30, value: 30 }, { id: 31, value: 31 }, { id: 32, value: 32 }])

    const IdTeethCode = () => {
        return (
            <>
                {
                    teethCodeList.map(
                        (code, i) => {
                            return (
                                <option
                                    aria-label="Default select example"
                                    className='font-link'
                                    id={`teeth-code-` + { code }}
                                    key={`TeethCode` + code.id}

                                > {code.value} </option>
                            )
                        }
                    )

                }

            </>
        )
    }
    const IdService = () => {
        return (
            <>
                {
                    serviceList.map(
                        (service, i) => {
                            return (
                                <option
                                    className='font-link'
                                    id={`teeth-code-` + { service }}
                                    key={`TeethCode` + service.id}

                                > {service.value} </option>
                            )
                        }
                    )

                }

            </>
        )
    }
    return (
        <tr>
            <td>{cureDate}</td>
            <td>{item.treat}</td>
            <td>{item.teeth_po.join()}</td>
            <td style={{ color: "#5F6C72" }}>{item.comment}</td>
            <td> <Button variant="danger" onClick={handleShow}>
                <BiEdit />
            </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                    size="xl"
                    style={{ marginTop: "8rem" }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "#6892D5" }}>Add Case</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Container>
                            <Row>
                                <Col xs={12} md={8}>
                                    <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >วันที่</h3>
                                    <Datepicker style={{ color: "#6892D5" }} />
                                    <Container fluid className='border border-primary  rounded mt-3 font-link'
                                        style={{ height: "35rem", width: "40rem" }}  >
                                        <Row >
                                            <img src={require("../Picture/toothnumberingLR.jpg")}
                                                className="img-fluid align-self-center" alt="TeethDiagram"
                                            />
                                        </Row>
                                    </Container>
                                </Col>
                                <Col xs={6} md={4}>
                                    <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >ตำแหน่งฟัน</h3>
                                    <Form.Select
                                        className='pre-scrollable fw-bold'
                                        aria-label="Default select example"
                                        style={{
                                            backgroundColor: "#C9FDD7", borderColor: "#79D1C3",
                                            color: "#5F6C72", maxHeight: "150px", overflowY: "auto", width: "8.5rem"
                                        }}>
                                        <option>Select code</option>
                                        <IdTeethCode />
                                    </Form.Select>

                                    <Button className='text-center m-2'
                                        style={{
                                            borderRadius: "3rem", borderColor: "#6892D5", backgroundColor: "#6892D5",
                                            borderWidth: "2px", color: "white",
                                        }}
                                        value={'input'}
                                        onClick={handleShow}>
                                        <HiPlus />
                                    </Button>
                                    <h3 className="mb-3 font-link" style={{ color: "#79D1C3", textShadow: "1px 1px 1px #6892D5" }} >บริการ</h3>
                                    <Form.Select
                                        className='pre-scrollable font-link fw-bold'
                                        aria-label="Default select example"
                                        style={{
                                            backgroundColor: "#C9FDD7", borderColor: "#79D1C3",
                                            color: "#5F6C72", maxHeight: "150px", overflowY: "auto", width: "9.5rem"
                                        }}>
                                        <option>Select service</option>
                                        <IdService />
                                    </Form.Select>
                                    <Form>

                                        <Form.Group className="mt-4 fw-bold" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control as="textarea" className='font-link' rows={3} />
                                        </Form.Group>
                                    </Form>


                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    )
}