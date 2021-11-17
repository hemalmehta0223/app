import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Pencil } from "heroicons-react";
import { useState } from "react";
import NumberFormat from "react-number-format";
import clientData from "../../__mocks__/clientData";
import StyledLabel from "../common/StyledLabel";

const PairoffList = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
            <TableCell align="center">Pairoff Id</TableCell>
            <TableCell align="center">Client</TableCell>
            <TableCell align="center">Trade Id</TableCell>
            <TableCell align="center">Pairoff Date</TableCell>
            <TableCell align="center">Trade Date</TableCell>
            <TableCell align="right">Pairoff Amount</TableCell>
            <TableCell align="right">Trade Amount</TableCell>
            <TableCell align="right">Amount Due</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={index + 1}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">
                  {clientData.find((c) => c.id === item.clientId).name}
                </TableCell>
                <TableCell align="center">{item.tradeId}</TableCell>
                <TableCell align="center">{item.pairoffDate}</TableCell>
                <TableCell align="center">{item.tradeDate}</TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.pairoffAmount}
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
                    value={item.tradeAmount}
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
                    value={item.amountDue}
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
                    label={item.status}
                    bgColor={
                      item.status === "Pending"
                        ? "rgb(255, 152, 0)"
                        : "rgb(76, 175, 80)"
                    }
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="medium"
                    href={`/app/billtypes/pairoff/${item.id}/edit`}
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

export default PairoffList;
