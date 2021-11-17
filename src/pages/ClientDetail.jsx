import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { Cancel, Refresh } from "@material-ui/icons";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import General from "../components/clientDetail/General";
import Contacts from "../components/clientDetail/Contacts";
import clientData from "../__mocks__/clientData";
import BillTypes from "../components/clientDetail/BillTypes";

import epoData from "../__mocks__/epoData";
import epdData from "../__mocks__/epdData";
import pairoffData from "../__mocks__/pairoffData";
import PaymentAdjustments from "../components/clientDetail/PaymentAdjustments";
import paymentData from "../__mocks__/paymentData/paymentData";
import invoiceListData from "../__mocks__/invoiceListData";

import adjustmentData from "../__mocks__/adjustmentData/adjustmentData";
import Invoices from "../components/clientDetail/Invoices";

const ClientDetail = () => {
  const { id } = useParams();

  const clientId = parseInt(id);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const selectedClientData = clientData.find(
    (client) => client.id === clientId
  );

  const billTypeData = [
    {
      name: "Early Payoffs",
      data: epoData.filter((x) => x.clientId === clientId),
    },
    {
      name: "Early Payment Defaults",
      data: epdData.filter((x) => x.clientId === clientId),
    },
    {
      name: "Pairoffs",
      data: pairoffData.filter((x) => x.clientId === clientId),
    },
  ];

  const paymentAdjustmentsData = [
    { name: "Payments", data: paymentData },
    { name: "Adjustments", data: adjustmentData },
  ];

  const invoiceData = invoiceListData.filter((x) => x.clientId === clientId);

  return (
    <>
      <Helmet>
        <title>Management: Client Detail</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h2">Client Detail</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href="/app/clients"
                    startIcon={<Cancel />}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  subheader={`DBA: ${selectedClientData.dba}`}
                  title={`${selectedClientData.name} (NMLS#: ${selectedClientData.nmls})`}
                  action={
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<Refresh />}
                    >
                      Refresh Client
                    </Button>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                      >
                        <Tab label="General" />
                        <Tab label="Contacts" />
                        <Tab label="Bill Types" />
                        <Tab label="Payments/Adjustments" />
                        <Tab label="Invoices" />
                      </Tabs>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      {tabValue === 0 && (
                        <General clientData={selectedClientData} />
                      )}
                      {tabValue === 1 && (
                        <Contacts
                          contactDetails={selectedClientData.contacts}
                        />
                      )}
                      {tabValue === 2 && (
                        <BillTypes billTypeData={billTypeData} />
                      )}
                      {tabValue === 3 && (
                        <PaymentAdjustments
                          paymentAdjustmentsData={paymentAdjustmentsData}
                        />
                      )}
                      {tabValue === 4 && <Invoices invoiceData={invoiceData} />}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ClientDetail;
