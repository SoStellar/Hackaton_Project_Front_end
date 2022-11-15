import React from "react";
import { Container, Stack, Form,Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function SearchPatient() {
  return (
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
          style={{ color: "#6892D5", textShadow: "1px 1px 1px black" }}
          className=""
        >
          Search Patient Information
        </h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="เลขประจำตัวประชาชน/พาสปอร์ต"
          />
          <Button variant="outline-success" className="rounded-pill"><BsSearch /></Button>
          
        </Stack>
      </Stack>
    </Container>
  );
}
