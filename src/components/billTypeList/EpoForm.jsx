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
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import clientData from "../../__mocks__/clientData";
import brandListData from "../../__mocks__/brandListData";
import channelListData from "../../__mocks__/channelListData";
import { Adjust, Cancel, Payment, Save } from "@material-ui/icons";
import epoData from "../../__mocks__/epoData";
import NumberFormat from "react-number-format";

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

const EpoForm = ({ clientId, billTypeId }) => {
  const classes = useStyles();

  let epo = epoData.find((x) => x.id === billTypeId) || {
    id: undefined,
    clientId: undefined,
    billTypeId: undefined,
    billingPeriod: undefined,
    channel: undefined,
    brand: undefined,
    loanNumber: undefined,
    submissionDate: undefined,
    purchaseDate: undefined,
    payoffDate: undefined,
    amountDue: undefined,
  };
  let amountDue = 0;
  if (billTypeId > 0) {
    amountDue =
      epo.amountDue -
      epo.payments.reduce((p, n) => p + n.amount, 0) -
      epo.adjustments.reduce((p, n) => p + n.amountDue, 0);
  }

  return (
    <form autoComplete="off" noValidate>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title={epo.id ? `Edit EPO Id: ${epo.id}` : "Add new EPO"}
            action={
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Cancel />}
                href={`/app/billtypes/epo`}
              >
                Cancel
              </Button>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <Autocomplete
                  options={clientData}
                  value={clientData.find((x) => x.id === clientId)}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} label="Client" variant="outlined" />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Brand"
                  name="brand"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={epo.brand}
                >
                  {brandListData.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Channel"
                  name="channel"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={epo.channel}
                >
                  {channelListData.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Loan Number"
                  name="loannumber"
                  required
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">#</InputAdornment>
                    ),
                  }}
                  value={epo.loanNumber}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Submission Date"
                  name="submissiondate"
                  defaultValue="2021-11-01"
                  variant="outlined"
                  value={epo.submissionDate}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Purchase Date"
                  name="purchasedate"
                  defaultValue="2021-10-11"
                  variant="outlined"
                  value={epo.purchaseDate}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Payoff Date"
                  name="payoffdate"
                  defaultValue="2021-10-11"
                  variant="outlined"
                  value={epo.payoffDate}
                />
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
                  name="amountdue"
                  required
                  variant="outlined"
                  value={epo.amountDue}
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
                  value={epo.comments}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  label="Select Status"
                  name="status"
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  value={epo.status}
                >
                  <option value="Pending">Pending</option>
                  <option value="Pending">Billed</option>
                  <option value="Pending">Closed</option>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions className={classes.cardActions}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {epo ? (
                <>
                  <Typography
                    variant="h5"
                    color={amountDue > 0 ? "error" : "primary"}
                    style={{ marginRight: "16px" }}
                  >
                    Balance Amount:{" "}
                    <NumberFormat
                      value={amountDue}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalSeparator="."
                      thousandsGroupStyle="thousand"
                      decimalScale={2}
                      fixedDecimalScale={true}
                    />
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<Payment />}
                    style={{ marginRight: "16px" }}
                  >
                    Make a Payment
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<Adjust />}
                  >
                    Make an Adjustment
                  </Button>
                </>
              ) : (
                <div></div>
              )}
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

export default EpoForm;
