import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import brandListData from "../../__mocks__/brandListData";
import channelListData from "../../__mocks__/channelListData";
import billingPeriods from "../../__mocks__/billingPeriods";
import paymentTypeData from "../../__mocks__/paymentTypeData";
import adjustmentTypeData from "../../__mocks__/adjustmentTypeData";
import adjustmentSubTypeData from "../../__mocks__/adjustmentSubTypeData";

import NumberFormat from "react-number-format";
import StyledLabel from "../common/StyledLabel";
import { Pencil } from "heroicons-react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const Row = (props) => {
  const { row, index } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          {brandListData.find((x) => x.id === row.brand).name}
        </TableCell>
        <TableCell align="center">
          {channelListData.find((x) => x.id === row.channel).name}
        </TableCell>
        <TableCell align="center">
          {
            billingPeriods.find((x) => x.value === row.billingPeriod)
              .description
          }
        </TableCell>
        <TableCell align="center">{row.loanNumber}</TableCell>
        <TableCell align="center">
          <NumberFormat
            value={row.amountDue}
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
          <NumberFormat
            value={
              row.amountDue -
              row.payments.reduce((s, n) => s + n.amount, 0) -
              row.adjustments.reduce((s, n) => s + n.amountDue, 0)
            }
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
              label={row.status}
              bgColor={
                row.status === "Pending"
                  ? "rgb(255, 152, 0)"
                  : "rgb(76, 175, 80)"
              }
            />
          }
        </TableCell>
        <TableCell align="center">{row.comments}</TableCell>
        <TableCell align="center">
          <IconButton size="medium" href={`/app/billtypes/epo/${row.id}`}>
            <Pencil size="20" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Payments
              </Typography>
              <Table size="small" aria-label="payments">
                <TableHead>
                  <TableRow>
                    <TableCell>Received Date</TableCell>
                    <TableCell>Check #</TableCell>
                    <TableCell>Payment Type</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell component="th" scope="row">
                        {payment.receivedDate}
                      </TableCell>
                      <TableCell>{payment.checkNumber}</TableCell>
                      <TableCell>
                        {
                          paymentTypeData.find(
                            (x) => x.id === payment.paymentTypeId
                          ).name
                        }
                      </TableCell>
                      <TableCell align="right">
                        <NumberFormat
                          value={payment.amount}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalSeparator="."
                          thousandsGroupStyle="thousand"
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Adjustments
              </Typography>
              <Table size="small" aria-label="payments">
                <TableHead>
                  <TableRow>
                    <TableCell>Adjustment Type</TableCell>
                    <TableCell>Adjustment Sub Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Amount Due</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.adjustments.map((adjustment) => (
                    <TableRow key={adjustment.id}>
                      <TableCell>
                        {
                          adjustmentTypeData.find(
                            (x) => x.id === adjustment.adjustmentTypeId
                          ).name
                        }
                      </TableCell>
                      <TableCell>
                        {
                          adjustmentSubTypeData.find(
                            (x) => x.id === adjustment.adjustmentSubTypeId
                          ).name
                        }
                      </TableCell>
                      <TableCell>{adjustment.status}</TableCell>
                      <TableCell align="right">
                        <NumberFormat
                          value={adjustment.amountDue}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalSeparator="."
                          thousandsGroupStyle="thousand"
                          decimalScale={2}
                          fixedDecimalScale={true}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const EpoBox = ({ data }) => {
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
            <TableCell />
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Channel</TableCell>
            <TableCell align="center">Billing Period</TableCell>
            <TableCell align="center">Loan Number</TableCell>
            <TableCell align="center">Total Amount Due</TableCell>
            <TableCell align="center">Balance Amount</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <Row key={item.id} row={item} index={index} />
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

export default EpoBox;
