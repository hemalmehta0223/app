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
import { Adjustments } from "heroicons-react";
import React from "react";
import { Helmet } from "react-helmet";
import EpdForm from "../components/billTypeList/EpdForm";
import EpdList from "../components/billTypeList/EpdList";
import EpoForm from "../components/billTypeList/EpoForm";
import EpoList from "../components/billTypeList/EpoList";
import SearchBox from "../components/billTypeList/SearchBox";
import epoData from "../__mocks__/epoData";
import epdData from "../__mocks__/epdData";
import pairoffData from "../__mocks__/pairoffData";
import PairoffList from "../components/billTypeList/PairoffList";
import PairoffForm from "../components/billTypeList/PairoffForm";
import FundingAdjustmentList from "../components/billTypeList/FundingAdjustmentList";
import TaxPenaltyList from "../components/billTypeList/TaxPenaltyList";
import { useParams } from "react-router";
import billTypeData from "../__mocks__/billTypeData";

const BillTypeList1 = ({ mode }) => {
  const { billtypename, billtypeid } = useParams();

  const tabValue =
    billTypeData.find((x) => x.shortName === billtypename).id - 1;

  function getClientId(name, billtypeid) {
    let clientId = 0;
    if (name === "epo")
      clientId = epoData.find((x) => x.id === parseInt(billtypeid)).clientId;
    else if (name === "epd")
      clientId = epdData.find((x) => x.id === parseInt(billtypeid)).clientId;
    else if (name === "pairoff")
      clientId = pairoffData.find(
        (x) => x.id === parseInt(billtypeid)
      ).clientId;

    return clientId;
  }

  let clientId = 0;
  if (mode === "edit") {
    clientId = getClientId(billtypename, billtypeid);
  }

  return (
    <>
      <Helmet>
        <title>Management: Bill Types</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">Bill Types</Typography>
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
                        <Tab label="Early Payoffs" href="/app/billtypes/epo" />
                        <Tab
                          label="Early Payment Defaults"
                          href="/app/billtypes/epd"
                        />
                        <Tab label="Pairoffs" href="/app/billtypes/pairoff" />
                        <Tab
                          label="Funding Adjustments"
                          href="/app/billtypes/fundingadj"
                        />
                        <Tab
                          label="Tax Penalties"
                          href="/app/billtypes/taxpen"
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
                                <EpoList data={epoData} />
                              </>
                            ) : (
                              <EpoForm
                                clientId={clientId}
                                billTypeId={parseInt(billtypeid)}
                              />
                            ))}
                          {tabValue === 1 &&
                            (mode === "list" ? (
                              <>
                                <Divider />
                                <EpdList data={epdData} />
                              </>
                            ) : (
                              <EpdForm
                                clientId={clientId}
                                billTypeId={parseInt(billtypeid)}
                              />
                            ))}
                          {tabValue === 2 &&
                            (mode === "list" ? (
                              <>
                                <Divider />
                                <PairoffList data={pairoffData} />
                              </>
                            ) : (
                              <PairoffForm
                                clientId={clientId}
                                billTypeId={parseInt(billtypeid)}
                              />
                            ))}
                          {tabValue === 3 && mode === "list" && (
                            <>
                              <Divider />
                              <FundingAdjustmentList />
                            </>
                          )}
                          {tabValue === 4 && mode === "list" && (
                            <>
                              <Divider />
                              <TaxPenaltyList />
                            </>
                          )}
                        </Grid>
                        {mode === "list" && tabValue != 3 && tabValue != 4 && (
                          <Grid
                            container
                            item
                            xs={12}
                            justifyContent="flex-end"
                          >
                            <Button
                              variant="outlined"
                              color="secondary"
                              href={`/app/billtypes/${billtypename}/new`}
                              startIcon={<Adjustments />}
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

export default BillTypeList1;
