import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  TableFooter,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import StyledLabel from "../common/StyledLabel";

const ImportedDataList = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="simple-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Export to Excel</MenuItem>
        <MenuItem>Copy</MenuItem>
      </Menu>
      <Card>
        <CardHeader
          title={<Typography variant="h4">Bill Type Data</Typography>}
          avatar={<Avatar>ID</Avatar>}
          action={
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
          }
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Channel</TableCell>
              <TableCell align="center">Bill Type</TableCell>
              <TableCell align="right">Total Amount</TableCell>
              <TableCell align="right">Amount Pending</TableCell>
              <TableCell align="right">Amount Billed</TableCell>
              <TableCell align="right">Amount Closed</TableCell>
              <TableCell align="right">Payments & Adjustments</TableCell>
              <TableCell align="right">Amount Due</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell align="center">{item.Brand}</TableCell>
                <TableCell align="center">{item.Channel}</TableCell>
                <TableCell align="center">{item.BillType}</TableCell>
                <TableCell align="right">
                  <NumberFormat
                    value={item.TotalAmount}
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
                    value={item.AmountPending}
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
                    value={item.AmountBilled}
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
                    value={item.AmountClosed}
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
                    value={item.PaymentAdjustment}
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
                    value={item.TotalAmount - item.PaymentAdjustment}
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
                  {item.TotalAmount - item.PaymentAdjustment > 0 ? (
                    <StyledLabel
                      label="outstanding"
                      bgColor="rgb(255, 152, 0)"
                    />
                  ) : (
                    <StyledLabel label="Paid" bgColor="rgb(76, 175, 80)" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align="right" colSpan={11}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    variant="body1"
                    style={{ marginRight: "50px" }}
                  >
                    Total Amount:{" "}
                    <NumberFormat
                      value={data.reduce((f, s) => (f = f + s.TotalAmount), 0)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalSeparator="."
                      thousandsGroupStyle="thousand"
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    style={{ marginRight: "25px" }}
                  >
                    Total Amount Due:{" "}
                    <NumberFormat
                      value={data.reduce(
                        (f, s) =>
                          (f = f + (s.TotalAmount - s.PaymentAdjustment)),
                        0
                      )}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalSeparator="."
                      thousandsGroupStyle="thousand"
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </>
  );
};

ImportedDataList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImportedDataList;
