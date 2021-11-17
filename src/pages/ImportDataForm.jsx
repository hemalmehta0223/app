import {
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import ChannelCard from "../components/importdata/ChannelCard";
import CoIssueButtonSet from "../components/importdata/CoIssueButtonSet";
import CommonButtonSet from "../components/importdata/CommonButtonSet";
import ImportedDataList from "../components/importdata/ImportedDataList";
import { Helmet } from "react-helmet";

import importedData from "../__mocks__/importedData";
import billingPeriods from "../__mocks__/billingPeriods";
import channelListData from "../__mocks__/channelListData";
import brandListData from "../__mocks__/brandListData";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
});

const ImportDataForm = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Billing: Import Data</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">
                Import data from external source
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid item container spacing={3}>
                <Grid item xs={6} xl={3}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="period">Choose Period</InputLabel>
                    <Select
                      native
                      label="Choose Period"
                      inputProps={{
                        name: "period",
                        id: "period",
                      }}
                    >
                      {billingPeriods.map((x) => (
                        <option value={x.value} key={x.value}>
                          {x.description}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <ChannelCard
                brand={brandListData[0].name}
                channel={
                  channelListData[0].name + " " + channelListData[1].name
                }
                avatarText="A"
                //subHeader="Use this region to import data for the MRC Delegated & Non-Delegated channel. Click on the Dry Run button to download an excel mimicing the refresh feature"
                content={<CommonButtonSet />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ChannelCard
                brand={brandListData[0].name}
                channel={channelListData[2].name}
                avatarText="C"
                //subHeader="Use this region to import data for the MRC CoIssue channel. Click on the Dry Run button to download an excel mimicing the refresh feature"
                content={<CoIssueButtonSet />}
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <ImportedDataList data={importedData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ImportDataForm;
