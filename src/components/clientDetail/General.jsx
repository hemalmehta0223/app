import { Button, Grid, Typography } from "@material-ui/core";
import { Payment, Adjust } from "@material-ui/icons";
import Fieldset from "../common/Fieldset";

const General = ({ clientData }) => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={4}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Fieldset label="LEI">
              <Typography variant="h6" component="span">
                {clientData.lei}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Address">
              <Typography variant="h6" component="span">
                {clientData.address.street}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="City">
              <Typography variant="h6" component="span">
                {clientData.address.city}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="State">
              <Typography variant="h6" component="span">
                {clientData.address.state}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Zip">
              <Typography variant="h6" component="span">
                {clientData.address.zip}
              </Typography>
            </Fieldset>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Fieldset label="Approved Overall">
              <Typography variant="h6" component="span">
                {clientData.isApproved}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Actively Dual Approved">
              <Typography variant="h6" component="span">
                {clientData.isDualApproved}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Delegated Status">
              <Typography variant="h6" component="span">
                {clientData.delegatedStatus}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Non-Delegated Status">
              <Typography variant="h6" component="span">
                {clientData.nonDelegatedStatus}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Delegated Approval Date">
              <Typography variant="h6" component="span">
                {clientData.delegatedApprovedDate}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Non-Delegated Approval Date">
              <Typography variant="h6" component="span">
                {clientData.nonDelegatedApprovedDate}
              </Typography>
            </Fieldset>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Fieldset label="Division">
              <Typography variant="h6" component="span">
                {clientData.division}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Delegated AE">
              <Typography variant="h6" component="span">
                {clientData.delegatedAe}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Non-Delegated AE">
              <Typography variant="h6" component="span">
                {clientData.nonDelegatedAe}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Delegated AR">
              <Typography variant="h6" component="span">
                {clientData.delegatedAr}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Non-Delegated AR">
              <Typography variant="h6" component="span">
                {clientData.nonDelegatedAr}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Delegated CRM">
              <Typography variant="h6" component="span">
                {clientData.delegatedCrm}
              </Typography>
            </Fieldset>
          </Grid>
          <Grid item>
            <Fieldset label="Non-Delegated CRM">
              <Typography variant="h6" component="span">
                {clientData.nonDelegatedCrm}
              </Typography>
            </Fieldset>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Payment />}
              href="/app/paymentadjustments/payments/new"
            >
              Make a Payment
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Adjust />}
              href="/app/paymentadjustments/adjustments/new"
            >
              Make an Adjustment
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default General;
