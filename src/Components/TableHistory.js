import React from "react";
import { Table } from "react-bootstrap";

export default function HistoryTable() {
  return (
    <>
      <Table striped hover className="text-center">
        <thead style={{backgroundColor: "#6892D5"}}>
          <tr >
            <th>Date</th>
            <th>Service</th>
            <th>Teeth code</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/Nov/2022</td>
            <td>ตรวจช่องปาก</td>
            <td>All</td>
            <td style={{color : "#5F6C72"}}>เจอฟันผุ 2 ซี่</td>
          </tr>
          <tr>
            <td>15/Nov/2022</td>
            <td>อุดฟัน</td>
            <td>2</td>
            <td style={{color : "#5F6C72"}}>อุดฟัน 2 ซี่</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}