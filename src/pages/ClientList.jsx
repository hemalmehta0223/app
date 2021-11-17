import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";
import RefreshIcon from "@material-ui/icons/Refresh";
import ClientSearchBox from "../components/clientList/ClientSearchBox";

import ClientListC from "../components/clientList/ClientList";
import clientData from "../__mocks__/clientData";

const ClientList = () => {
  return (
    <>
      <Helmet>
        <title>Management: Client List</title>
      </Helmet>
      <Box
        sx={{ py: 3, backgroundColor: "background.default", minHeight: "100%" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid container item xs={12} justifyContent="space-between">
              <Grid item>
                <Typography variant="h2">Client List</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  href="#"
                  startIcon={<RefreshIcon />}
                >
                  Refresh ALL Clients
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <ClientSearchBox />
                    </Grid>
                    <Grid item xs={12}>
                      <ClientListC data={clientData} />
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

export default ClientList;
