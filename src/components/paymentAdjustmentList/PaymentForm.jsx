import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Cancel, Save } from "@material-ui/icons";
import epoData from "../../__mocks__/epoData";
import epdData from "../../__mocks__/epdData";
import pairoffData from "../../__mocks__/pairoffData";
import paymentData from "../../__mocks__/paymentData/paymentData";
import billTypeData from "../../__mocks__/billTypeData";
import paymentTypeData from "../../__mocks__/paymentTypeData";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    "& .MuiCardHeader-action": {
      marginTop: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  cardActions: {
    padding: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

const PaymentForm = ({ paymentId }) => {
  const classes = useStyles();

  const [payment, setPayment] = useState(
    paymentData.find((x) => x.id === paymentId) || {
      id: undefined,
      billTypeId: undefined,
      sourceBillTypeId: undefined,
      paymentTypeId: undefined,
      receivedDate: undefined,
      status: undefined,
      checkNumber: undefined,
      wireRefNumber: undefined,
      amount: undefined,
      comments: undefined,
    }
  );

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  function getBillTypes() {
    const billTypeId = parseInt(payment.billTypeId);
    if (billTypeId === 1) {
      return epoData.map((x) => ({
        id: x.id,
        item: `EPO Loan: ${x.loanNumber} (${x.status}) (Total Amount $${x.amountDue})`,
      }));
    } else if (billTypeId === 2) {
      return epdData.map((x) => ({
        id: x.id,
        item: `EPD Loan: ${x.loanNumber} (${x.status}) (Total Amount $${x.amountDue})`,
      }));
    } else if (billTypeId === 3) {
      return pairoffData.map((x) => ({
        id: x.id,
        item: `Trace Id: ${x.tradeId} (${x.status}) (Total Amount $${x.amountDue})`,
      }));
    } else {
      return [{}];
    }
  }

  return (
    <form autoComplete="off" noValidate>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title={
              payment.id ? `Edit Payment Id: ${payment.id}` : "Add new Payment"
            }
            action={
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Cancel />}
                href="/app/paymentadjustments/payments"
              >
                Cancel
              </Button>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Bill Type"
                  name="billTypeId"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={payment.billTypeId}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  {billTypeData.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Payment Type"
                  name="paymentTypeId"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={payment.paymentTypeId}
                >
                  <option value=""></option>
                  {paymentTypeData.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Bill Type Source Id"
                  name="sourceBillTypeId"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={payment.sourceBillTypeId}
                >
                  {getBillTypes().map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.item}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Received Date"
                  name="receivedDate"
                  defaultValue="2021-11-01"
                  variant="outlined"
                  value={payment.receivedDate}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Payment Status"
                  name="status"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={payment.status}
                >
                  <option value=""></option>
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Check Number"
                  name="checkNumber"
                  variant="outlined"
                  value={payment.checkNumber}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Wire Fed Ref Number"
                  name="wireRefNumber"
                  variant="outlined"
                  value={payment.wireRefNumber}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  label="Amount"
                  name="amount"
                  required
                  variant="outlined"
                  value={payment.amount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Comments"
                  name="comments"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={payment.comments}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions className={classes.cardActions}>
            <Box>
              <div></div>
            </Box>
            <div>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Save />}
              >
                Save
              </Button>
            </div>
          </CardActions>
        </Card>
      </Container>
    </form>
  );
};

export default PaymentForm;
