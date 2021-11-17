import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { CurrencyDollar } from "heroicons-react";
import { Helmet } from "react-helmet";
import SearchBox from "../components/paymentAdjustmentList/SearchBox";
import PaymentList from "../components/paymentAdjustmentList/PaymentList";
import PaymentForm from "../components/paymentAdjustmentList/PaymentForm";
import paymentData from "../__mocks__/paymentData/paymentData";
import adjustmentData from "../__mocks__/adjustmentData/adjustmentData";
import AdjustmentList from "../components/paymentAdjustmentList/AdjustmentList";
import AdjustmentForm from "../components/paymentAdjustmentList/AdjustmentForm";
import epoData from "../__mocks__/epoData";
import epdData from "../__mocks__/epdData";
import pairoffData from "../__mocks__/pairoffData";
import { useParams } from "react-router";

const PaymentAdjustmentList = ({ mode }) => {
  const { type, typeid } = useParams();
  const tabValue = type === "payments" ? 0 : 1;

  function getBillTypeId(name, paId) {
    let sourceBillTypeId = 0;
    let billTypeId = 0;
    if (name === "payment") {
      const payment = paymentData.find((x) => x.id === parseInt(paId));
      sourceBillTypeId = payment.sourceBillTypeId;
      billTypeId = payment.billTypeId;
    } else if (name === "adjustment") {
      const adjustment = epdData.find((x) => x.id === parseInt(paId));
      sourceBillTypeId = adjustment.sourceBillTypeId;
      billTypeId = adjustment.billTypeId;
    }

    return billTypeId;
  }

  let billTypeId = 0;
  if (mode === "edit") {
    billTypeId = getBillTypeId(type, typeid);
  }

  return (
    <>
      <Helmet>
        <title>Management: Payments & Adjustments</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">Payments & Adjustments</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Tabs
                        value={tabValue}
                        indicatorColor="primary"
                        textColor="primary"
                      >
                        <Tab
                          label="Payments"
                          href="/app/paymentadjustments/payments"
                        />
                        <Tab
                          label="Adjustments"
                          href="/app/paymentadjustments/adjustments"
                        />
                      </Tabs>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        {mode === "list" && (
                          <Grid item xs={12}>
                            <SearchBox />
                          </Grid>
                        )}

                        <Grid item xs={12}>
                          {tabValue === 0 &&
                            (mode === "list" ? (
                              <>
                                <Divider />
                                <PaymentList data={paymentData} />
                              </>
                            ) : (
                              <PaymentForm
                                billTypeId={billTypeId}
                                paymentId={parseInt(typeid)}
                              />
                            ))}
                          {tabValue === 1 &&
                            (mode === "list" ? (
                              <>
                                <Divider />
                                <AdjustmentList data={adjustmentData} />
                              </>
                            ) : (
                              <AdjustmentForm
                                billTypeId={billTypeId}
                                adjustmentId={parseInt(typeid)}
                              />
                            ))}
                        </Grid>
                        {mode === "list" && (
                          <Grid
                            container
                            item
                            xs={12}
                            justifyContent="flex-end"
                          >
                            <Button
                              variant="outlined"
                              color="secondary"
                              href={`/app/paymentadjustments/${type}/new`}
                              startIcon={<CurrencyDollar />}
                            >
                              Add New
                            </Button>
                          </Grid>
                        )}
                      </Grid>
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

export default PaymentAdjustmentList;
