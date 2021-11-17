import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import {
  ArrowForward,
  Save,
  Cancel,
  ArrowBack,
  Build,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

import billingPeriods from "../__mocks__/billingPeriods";
import branchListData from "../__mocks__/branchListData";
import clientData from "../__mocks__/clientData";
import billTypeData from "../__mocks__/billTypeData";
import invoiceListData from "../__mocks__/invoiceListData";

import BatchStepper from "../components/batchForm/BatchStepper";
import BatchStepperContentPanel from "../components/batchForm/BatchStepperContentPanel";
import BranchBillTypeBox from "../components/batchForm/BranchBillTypeBox";
import SuppressClientBillTypeBox from "../components/batchForm/SuppressClientBillTypeBox";
import BatchDetailTab from "../components/batchForm/BatchDetailTab";
import BatchDetailTabPanel from "../components/batchForm/BatchDetailTabPanel";
import SearchBox from "../components/batchForm/SearchBox";
import InvoiceList from "../components/batchForm/InvoiceList";
import batchFormData from "../__mocks__/batchFormData";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "300px",
  },
  actionButtons: {
    marginRight: theme.spacing(1),
  },
}));

const BatchForm = () => {
  const classes = useStyles();
  const { id } = useParams();

  const batchId = parseInt(id);

  const stepLabels = [
    "Branch & Bill Types",
    "Suppress Clients & Bill Types",
    "Batch Detail",
  ];

  const tabLabels = ["Active", "Suppressed"];

  const selectedBatchData = batchFormData.find(
    (batch) => batch.batchId === batchId
  );
  const selectedPeriod =
    (selectedBatchData && selectedBatchData.period) || billingPeriods[1].value;

  const selectedBranches =
    (selectedBatchData && selectedBatchData.branches) || [];

  const selectedBillTypes =
    (selectedBatchData && selectedBatchData.billTypes) ||
    Object.fromEntries(billTypeData.map((item) => [item.shortName, false]));

  const [activeStep, setActiveStep] = useState(0);
  // const [period, setPeriod] = useState(billingPeriods[1].value);
  // const [branches, setBranches] = useState([]);
  // const [billTypes, setBillTypes] = useState(
  //   Object.fromEntries(billTypeData.map((item) => [item.shortName, false]))
  // );

  const [period, setPeriod] = useState(selectedPeriod);
  const [branches, setBranches] = useState(selectedBranches);
  const [billTypes, setBillTypes] = useState(selectedBillTypes);

  const [tabValue, setTabValue] = useState(0);

  const handleBranchChange = (e) => {
    setBranches(e.target.value);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBuild = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const handleBillTypeChange = (e) => {
    setBillTypes({ ...billTypes, [e.target.name]: e.target.checked });
  };

  const getPeriodDescription = () => {
    return billingPeriods.find((p) => p.value === period).description;
  };

  const getSelectedBranches = () => {
    return branches
      .map((branch) => branch.name)
      .reduce((p, n) => {
        if (p === "") return n;
        return p + ", " + n;
      }, "");
  };

  const getSelectedBillTypes = () => {
    return Object.entries(billTypes)
      .filter(([k, v]) => v)
      .map(([k, v]) => billTypeData.find((item) => item.shortName === k).name)
      .reduce((p, n) => {
        if (p === "") return n;
        return p + ", " + n;
      }, "");
  };

  return (
    <>
      <Helmet>
        <title>Billing: {id > 0 ? "Edit Batch" : "Create New Batch"} </title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              container
              item
              xs={12}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h2">
                  {batchId > 0 ? `Edit Batch: ${id}` : "Create a new batch"}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="/app/batches"
                  startIcon={<Cancel />}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <Paper square>
                        <BatchStepper
                          steps={stepLabels}
                          activeStep={activeStep}
                        />
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <BatchStepperContentPanel
                          index={0}
                          activeStep={activeStep}
                        >
                          <BranchBillTypeBox
                            period={period}
                            onPeriodChange={handlePeriodChange}
                            billingPeriods={billingPeriods}
                            branches={branches}
                            onBranchChange={handleBranchChange}
                            branchListData={branchListData}
                            billTypes={billTypes}
                            billTypeData={billTypeData}
                            onBillTypeChange={handleBillTypeChange}
                          />
                        </BatchStepperContentPanel>
                        <BatchStepperContentPanel
                          index={1}
                          activeStep={activeStep}
                        >
                          <SuppressClientBillTypeBox
                            periodDescription={getPeriodDescription()}
                            branches={getSelectedBranches()}
                            billTypes={getSelectedBillTypes()}
                            billTypeData={billTypeData}
                            clientData={clientData}
                          />
                        </BatchStepperContentPanel>
                        <BatchStepperContentPanel
                          index={2}
                          activeStep={activeStep}
                        >
                          <BatchDetailTab
                            tabs={tabLabels}
                            value={tabValue}
                            onTabChange={handleTabChange}
                            periodDescription={getPeriodDescription()}
                            branches={getSelectedBranches()}
                            billTypes={getSelectedBillTypes()}
                          />

                          <Grid item xs={12}>
                            <SearchBox />
                          </Grid>

                          <Grid item xs={12}>
                            <BatchDetailTabPanel index={0} value={tabValue}>
                              <InvoiceList
                                data={invoiceListData.filter(
                                  (d) => d.active && d.batchId === batchId
                                )}
                              />
                            </BatchDetailTabPanel>
                            <BatchDetailTabPanel index={1} value={tabValue}>
                              <InvoiceList
                                data={invoiceListData.filter(
                                  (d) => !d.active && d.batchId === batchId
                                )}
                              />
                            </BatchDetailTabPanel>
                          </Grid>
                        </BatchStepperContentPanel>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="space-between">
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            className={classes.actionButtons}
                            startIcon={<ArrowBack />}
                            onClick={handleBack}
                          >
                            Back
                          </Button>
                        </div>
                        <div>
                          {activeStep < 2 && (
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.actionButtons}
                              startIcon={<Save />}
                            >
                              Save
                            </Button>
                          )}

                          {activeStep < 2 && (
                            <Button
                              variant="contained"
                              color="secondary"
                              startIcon={<ArrowForward />}
                              onClick={handleNext}
                            >
                              Next
                            </Button>
                          )}

                          {activeStep >= 2 && (
                            <Button
                              disabled={activeStep > 2}
                              variant="contained"
                              color="secondary"
                              startIcon={<Build />}
                              onClick={handleBuild}
                            >
                              Build Batch
                            </Button>
                          )}
                        </div>
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

export default BatchForm;
