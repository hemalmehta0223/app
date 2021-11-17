import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  Button,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import { ReceiptRefundOutline } from "heroicons-react";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/styles";
import { Helmet } from "react-helmet";

import BatchList from "../components/batchAndInvoice/BatchList";
import billingPeriods from "../__mocks__/billingPeriods";
import batchListData from "../__mocks__/batchListData";

const useStyles = makeStyles({
  formControl: {
    width: "300px",
  },
});

const BatchAndInvoice = () => {
  const classes = useStyles();
  const [period, setPeriod] = useState({
    value: billingPeriods[1].value,
    description: billingPeriods[1].description,
  });

  const handlePeriodChange = (e) => {
    setPeriod({
      value: e.target.value,
      description: e.target.options[e.target.options.selectedIndex].text,
    });
  };

  return (
    <>
      <Helmet>
        <title>Billing: Batch List</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid container item xs={12} justifyContent="space-between">
              <Grid item>
                <Typography variant="h2">
                  Batch List {billingPeriods[0].description}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="contained"
                  href="/app/batches/new"
                  startIcon={<ReceiptRefundOutline />}
                >
                  Create new Batch
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        spacing={4}
                        alignItems="center"
                      >
                        <Grid item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <InputLabel htmlFor="period">
                              Choose Period
                            </InputLabel>
                            <Select
                              native
                              label="Choose Period"
                              inputProps={{
                                name: "period",
                                id: "period",
                              }}
                              value={period.value}
                              onChange={handlePeriodChange}
                            >
                              {billingPeriods.map((x) => (
                                <option value={x.value} key={x.value}>
                                  {x.description}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<CloseIcon />}
                          >
                            Close Billing Period
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid item>
                      <BatchList
                        data={batchListData.filter(
                          (x) => x.period == period.value
                        )}
                      />
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

export default BatchAndInvoice;
