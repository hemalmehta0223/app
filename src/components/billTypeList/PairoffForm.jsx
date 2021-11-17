import {
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
import { Autocomplete } from "@material-ui/lab";
import clientData from "../../__mocks__/clientData";
import brandListData from "../../__mocks__/brandListData";
import channelListData from "../../__mocks__/channelListData";
import { Cancel, Save } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    "& .MuiCardHeader-action": {
      marginTop: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  cardActions: {
    padding: theme.spacing(2),
    justifyContent: "flex-end",
  },
}));

const PairoffForm = ({ clientId }) => {
  const classes = useStyles();
  return (
    <form autoComplete="off" noValidate>
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title="Add new Pairoff"
            action={
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Cancel />}
                href="/app/billtypes/pairoff"
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
                  label="Trade Id"
                  name="tradeid"
                  required
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">#</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Pairoff Date"
                  defaultValue="2021-10-15"
                  name="pairoffdate"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12} lg={3} xl={3}>
                <TextField
                  fullWidth
                  type="date"
                  label="Trade Date"
                  defaultValue="2021-10-15"
                  name="tradedate"
                  variant="outlined"
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
                  label="Pairoff Amount ($)"
                  name="pairoffamount"
                  variant="outlined"
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
                  label="Trade Amount ($)"
                  name="tradeamount"
                  variant="outlined"
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
            <Button variant="contained" color="secondary" startIcon={<Save />}>
              Save
            </Button>
          </CardActions>
        </Card>
      </Container>
    </form>
  );
};

export default PairoffForm;
