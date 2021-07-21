import React from "react";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";

const List = ({ expenses }) => {
  return (
    <div className="list">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableBody>
        {expenses.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="item-name" align="left">
              {item.name}
            </TableCell>{" "}
            <TableCell className="item-amount" align="right">
              ${item.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </div>
  );
};

export default List;
