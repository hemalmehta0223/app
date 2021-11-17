import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import NumberFormat from "react-number-format";
import StyledLabel from "../common/StyledLabel";
import { Pencil } from "heroicons-react";
import billTypeData from "../../__mocks__/billTypeData";
import epoData from "../../__mocks__/epoData";

const PaymentBox = ({ data }) => {
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
      <Table size="small" padding="none">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Bill Type</TableCell>
            <TableCell align="center">Loan Number</TableCell>
            <TableCell align="center">Received Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  {billTypeData.find((x) => x.id === item.billTypeId).name}
                </TableCell>
                <TableCell align="center">
                  {
                    epoData.find((x) => x.id === item.sourceBillTypeId)
                      .loanNumber
                  }
                </TableCell>
                <TableCell align="center">{item.receivedDate}</TableCell>
                <TableCell align="center">
                  <NumberFormat
                    value={item.amount}
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
                  {
                    <StyledLabel
                      label={item.status}
                      bgColor={
                        item.status === "Pending"
                          ? "rgb(255, 152, 0)"
                          : "rgb(76, 175, 80)"
                      }
                    />
                  }
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="medium"
                    //href={`/app/billtypes/epo/${row.id}/edit`}
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

export default PaymentBox;
