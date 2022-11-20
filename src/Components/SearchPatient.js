import React from "react";
import { Container, Stack, Form,Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function SearchPatient() {
  return (
    <>
    <Container
      style={{
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderRadius: 5,
      }}
      className="font-link"
    >
      <Stack gap={2}>
        <h1
          style={{ color: "#6892D5", textShadow: "1px 1px 1px #79D1C3" }}
          className=""
        >
          ค้นหาข้อมูลผู้ป่วย
        </h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="เลขประจำตัวประชาชน/พาสสปอร์ต"
          />
          <Button className="rounded-pill" variant="dark"  > <BsSearch /></Button>
          
        </Stack>
      </Stack>
    </Container>
    </>
  );
}
