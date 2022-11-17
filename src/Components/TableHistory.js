import React from "react";
import { Table } from "react-bootstrap";

export default function HistoryTable (){
    return(
        <>
        <Table striped bordered   hover className="text-center" style={{ width: "34rem"}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Service</th>
          <th>Unit</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10/Nov/2022</td>
          <td>ตรวจช่องปาก</td>
          <td>1</td>
          <td>เจอฟันผุ 2 ซี่</td>
        </tr>
        <tr>
          <td>15/Nov/2022</td>
          <td>อุดฟัน</td>
          <td>2</td>
          <td>อุดฟัน 2 ซี่</td>
        </tr>
        </tbody>
    </Table>
        </>
    )
}