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
import adjustmentData from "../../__mocks__/adjustmentData/adjustmentData";
import billTypeData from "../../__mocks__/billTypeData";
import adjustmentSubTypeData from "../../__mocks__/adjustmentSubTypeData";
import { useState } from "react";
import adjustmentTypeData from "../../__mocks__/adjustmentTypeData";

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

const AdjustmentForm = ({ adjustmentId }) => {
  const classes = useStyles();

  const [adjustment, setAdjustment] = useState(
    adjustmentData.find((x) => x.id === adjustmentId) || {
      id: undefined,
      billTypeId: undefined,
      sourceBillTypeId: undefined,
      adjustmentTypeId: undefined,
      adjustmentSubTypeId: undefined,
      amountDue: undefined,
      comments: undefined,
    }
  );

  const handleChange = (e) => {
    setAdjustment({
      ...adjustment,
      [e.target.name]: e.target.value,
    });
  };

  function getBillTypes() {
    const billTypeId = parseInt(adjustment.billTypeId);
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
              adjustment.id
                ? `Edit Adjustment Id: ${adjustment.id}`
                : "Add new Adjustment"
            }
            action={
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Cancel />}
                href="/app/paymentadjustments/adjustments"
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
                  value={adjustment.billTypeId}
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
                  label="Select Adjustment Type"
                  name="adjustmentTypeId"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={adjustment.adjustmentTypeId}
                >
                  <option value=""></option>
                  {adjustmentTypeData.map((option) => (
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
                  value={adjustment.sourceBillTypeId}
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
                  label="Select Adjustment Sub Type"
                  name="adjustmentSubTypeId"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={adjustment.adjustmentSubTypeId}
                >
                  <option value=""></option>
                  {adjustmentSubTypeData.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  label="Amount Due"
                  name="amountDue"
                  required
                  variant="outlined"
                  value={adjustment.amountDue}
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
                  value={adjustment.comments}
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

export default AdjustmentForm;
