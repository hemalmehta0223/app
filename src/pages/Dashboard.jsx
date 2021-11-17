import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import BillAmountByMonth from "../components/dashboard/BillAmountByMonth";
import OutstandingBillTypes from "../components/dashboard/OutstandingBillTypes";
import TotalAdjustmentApplied from "../components/dashboard/TotalAdjustmentApplied";
import TotalClients from "../components/dashboard/TotalClients";
import TotalOutstandingAmount from "../components/dashboard/TotalOutstandingAmount";
import TotalPaymentReceived from "../components/dashboard/TotalPaymentReceived";

const Dashboard = () => (
  <>
    <Helmet>
      <title>Billing: Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid container item xs={12} justifyContent="space-between">
            <Grid item>
              <Typography variant="h2">Dashboard</Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalClients />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalOutstandingAmount />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalPaymentReceived />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalAdjustmentApplied />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <BillAmountByMonth />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <OutstandingBillTypes />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
