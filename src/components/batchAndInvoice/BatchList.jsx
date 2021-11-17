import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import { Pencil } from "heroicons-react";
import NumberFormat from "react-number-format";
import StyledLabel from "../common/StyledLabel";

const BatchList = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="center">Batch ID</TableCell>
            <TableCell align="center">Branch</TableCell>
            <TableCell align="right">No of. Client</TableCell>
            <TableCell align="right">No of. Invoice</TableCell>
            <TableCell align="right">Outstanding Amount</TableCell>
            <TableCell align="right">New Amount</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="center">Batch Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index + 1}>
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="center">{item.batchId}</TableCell>
                <TableCell align="center">{item.branch}</TableCell>
                <TableCell align="right">{item.clientCount}</TableCell>
                <TableCell align="right">{item.invoiceCount}</TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.outstandingAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.newAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.totalAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalSeparator="."
                    thousandsGroupStyle="thousand"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </TableCell>
                <TableCell align="center">
                  <StyledLabel
                    label={item.batchStatus}
                    bgColor={
                      item.batchStatus === "Pending"
                        ? "rgb(255, 152, 0)"
                        : "rgb(76, 175, 80)"
                    }
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="medium"
                    href={`/app/batches/${item.batchId}/edit`}
                  >
                    <Pencil size="20" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default BatchList;
