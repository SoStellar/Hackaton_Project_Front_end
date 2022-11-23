import React from "react";
import moment from "moment";
export default function HistoryTable({ item }) {
  const cureDate = moment(item.cure_date).format('DD/MM/YYYY');
  return (
    <>
      <tr>
        <td>{cureDate}</td>
        <td>{item.treat}</td>
        <td>{item.teeth_po.join()}</td>
        <td style={{ color: "#5F6C72" }}>{item.comment}</td>
      </tr>
    </>
  )
}