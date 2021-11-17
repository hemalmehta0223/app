import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import InvoiceList from "../components/batchForm/InvoiceList";
import SearchBox from "../components/viewInvoice/SearchBox";
import invoiceListData from "../__mocks__/invoiceListData";

const ViewInvoice = () => {
  return (
    <>
      <Helmet>
        <title>Billing: Invoices </title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">View Invoices</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <SearchBox />
                    </Grid>
                    <Grid item xs={12}>
                      <InvoiceList data={invoiceListData} />
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

export default ViewInvoice;
