import {React} from "react";
import { Table, Button } from "react-bootstrap";
import { BiEdit } from 'react-icons/bi';
export default function HistoryTable() {
    return (
        <>
            <Table striped hover className="text-center" style={{ width: "34rem" }}>
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
                        <td> <Button variant="danger"> <BiEdit /></Button></td>
                    </tr>

                </tbody>
            </Table>
        </>
    )
}