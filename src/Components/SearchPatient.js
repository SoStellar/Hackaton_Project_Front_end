import React, { useState } from "react";
import { Container, Stack, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function SearchPatient({ setUserId }) {
  const [search, setSearch] = useState("");
  function pushData(event) {
    console.log(search);
    setUserId(search)
  }
  function inputId(event) {
    // setSearch(e.target.searchValue.value);
    setSearch(event.target.value);
    // console.log(event.target.value);
  }
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
            style={{ color: "#6892D5", textShadow: "2px 2px 2px #79D1C3" }}
            className=""
          >
            Search Patient Information
          </h1>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              className="me-auto"
              placeholder="เลขประจำตัวประชาชน/พาสปอร์ต"
              id="searchValue"
              onChange={inputId}
            />
            <Button variant="outline-success" className="rounded-pill" onClick={pushData}><BsSearch /></Button>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}
