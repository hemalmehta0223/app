import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import QuickLinkCard from "../components/quickLinks/QuickLinkCard";
import {
  ChartBarOutline,
  Link,
  Refresh,
  ReceiptRefund,
  Users,
  ViewList,
  CurrencyDollar,
  Adjustments,
  DocumentReport,
  ChevronRight,
} from "heroicons-react";
import { Adjust } from "@material-ui/icons";
import { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import clientData from "../__mocks__/clientData";
import { useNavigate } from "react-router-dom";
import epoData from "../__mocks__/epoData";
import pairoffData from "../__mocks__/pairoffData";

const DashboardActionComponent = () => (
  <Button
    size="medium"
    style={{ color: "blue", marginLeft: "auto" }}
    endIcon={<ChevronRight />}
    href="/app/dashboard"
  >
    View Dashboard
  </Button>
);

const ClientActionComponent = () => {
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState(undefined);
  const navigate = useNavigate();

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleOk = () => {
    debugger;
    if (client !== undefined) {
      setOpen(false);
      navigate(`/app/clients/${client.id}/detail`);
    }
  };

  const handleCancel = () => {
    setClient(undefined);
    setOpen(false);
  };

  const handleChange = (e, newValue) => {
    setClient(newValue);
  };

  return (
    <>
      <Button
        size="medium"
        style={{ color: "blue", marginLeft: "auto" }}
        endIcon={<ChevronRight />}
        onClick={handleClickOpen}
      >
        Choose Client
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Client</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pick a client from the dropdown list and click ok to navigate to the
            client management screen with the selection
          </DialogContentText>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.name}
            options={clientData}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Client"
                variant="outlined"
                {...params}
              />
            )}
            value={client}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const BillTypeActionComponent = () => {
  const [open, setOpen] = useState(false);
  const [loanNumber, setLoanNumber] = useState(undefined);
  const [tradeId, setTradeId] = useState(undefined);
  const navigate = useNavigate();

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleOk = () => {
    if (loanNumber !== undefined) {
      setOpen(false);
      navigate(`/app/billtypes/epo/${loanNumber.id}/edit`);
    }

    if (tradeId !== undefined) {
      setOpen(false);
      navigate(`/app/billtypes/pairoff/${tradeId.id}/edit`);
    }
  };

  const handleCancel = () => {
    setLoanNumber(undefined);
    setTradeId(undefined);
    setOpen(false);
  };

  const handleLoanNumberChange = (e, newValue) => {
    setLoanNumber(newValue);
  };

  const handleTradeIdChange = (e, newValue) => {
    setTradeId(newValue);
  };

  return (
    <>
      <Button
        size="medium"
        style={{ color: "blue", marginLeft: "auto" }}
        endIcon={<ChevronRight />}
        onClick={handleClickOpen}
      >
        Choose a Bill Type
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Choose Loan Number or Trade Id
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pick a bill type either by a loan number or a trade id and click OK
            to auto select the appropriate bill type screen.
          </DialogContentText>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.loanNumber}
            options={epoData}
            getOptionLabel={(option) => option.loanNumber}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Loan Number"
                variant="outlined"
                {...params}
              />
            )}
            value={loanNumber}
            onChange={handleLoanNumberChange}
            style={{ width: "100%" }}
          />
          <Box sx={{ width: "100%", py: 2 }}>
            <Typography variant="h5">--OR--</Typography>
          </Box>

          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.tradeId}
            options={pairoffData}
            getOptionLabel={(option) => option.tradeId}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Trade Id"
                variant="outlined"
                {...params}
              />
            )}
            value={tradeId}
            onChange={handleTradeIdChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const PaymentActionComponent = () => {
  const [open, setOpen] = useState(false);
  const [loanNumber, setLoanNumber] = useState(undefined);
  const [tradeId, setTradeId] = useState(undefined);
  const navigate = useNavigate();

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleOk = () => {
    if (loanNumber !== undefined || tradeId === undefined) {
      setOpen(false);
      navigate(`/app/paymentadjustments/payments/new`);
    }
  };

  const handleCancel = () => {
    setLoanNumber(undefined);
    setTradeId(undefined);
    setOpen(false);
  };

  const handleLoanNumberChange = (e, newValue) => {
    setLoanNumber(newValue);
  };

  const handleTradeIdChange = (e, newValue) => {
    setTradeId(newValue);
  };

  return (
    <>
      <Button
        size="medium"
        style={{ color: "blue", marginLeft: "auto" }}
        endIcon={<ChevronRight />}
        onClick={handleClickOpen}
      >
        Make a Payment
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Choose Loan Number or Trade Id
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pick either a loan number or a trade id and click OK to auto select
            the payment screen with necessary selections.
          </DialogContentText>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.loanNumber}
            options={epoData}
            getOptionLabel={(option) => option.loanNumber}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Loan Number"
                variant="outlined"
                {...params}
              />
            )}
            value={loanNumber}
            onChange={handleLoanNumberChange}
            style={{ width: "100%" }}
          />
          <Box sx={{ width: "100%", py: 2 }}>
            <Typography variant="h5">--OR--</Typography>
          </Box>

          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.tradeId}
            options={pairoffData}
            getOptionLabel={(option) => option.tradeId}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Trade Id"
                variant="outlined"
                {...params}
              />
            )}
            value={tradeId}
            onChange={handleTradeIdChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const AdjustmentActionComponent = () => {
  const [open, setOpen] = useState(false);
  const [loanNumber, setLoanNumber] = useState(undefined);
  const [tradeId, setTradeId] = useState(undefined);
  const navigate = useNavigate();

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleOk = () => {
    if (loanNumber !== undefined || tradeId === undefined) {
      setOpen(false);
      navigate(`/app/paymentadjustments/adjustments/new`);
    }
  };

  const handleCancel = () => {
    setLoanNumber(undefined);
    setTradeId(undefined);
    setOpen(false);
  };

  const handleLoanNumberChange = (e, newValue) => {
    setLoanNumber(newValue);
  };

  const handleTradeIdChange = (e, newValue) => {
    setTradeId(newValue);
  };

  return (
    <>
      <Button
        size="medium"
        style={{ color: "blue", marginLeft: "auto" }}
        endIcon={<ChevronRight />}
        onClick={handleClickOpen}
      >
        Apply an Adjustment
      </Button>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Choose Loan Number or Trade Id
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pick either a loan number or a trade id and click OK to auto select
            the Adjustment screen with necessary selections.
          </DialogContentText>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.loanNumber}
            options={epoData}
            getOptionLabel={(option) => option.loanNumber}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Loan Number"
                variant="outlined"
                {...params}
              />
            )}
            value={loanNumber}
            onChange={handleLoanNumberChange}
            style={{ width: "100%" }}
          />
          <Box sx={{ width: "100%", py: 2 }}>
            <Typography variant="h5">--OR--</Typography>
          </Box>

          <Autocomplete
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(option) => option.tradeId}
            options={pairoffData}
            getOptionLabel={(option) => option.tradeId}
            renderInput={(params) => (
              <TextField
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                placeholder="Select Trade Id"
                variant="outlined"
                {...params}
              />
            )}
            value={tradeId}
            onChange={handleTradeIdChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const quickLinks = [
  {
    id: 1,
    description:
      "Dashboard provides a summary view of the entire billing system. Click View Dashboard to learn more.",
    media: ChartBarOutline,
    title: "Dashboard",
    actionComponent: DashboardActionComponent,
  },
  {
    id: 2,
    description:
      "Clients provide a quick and easy way to navigate to the client screen. Click Choose Client to learn more.",
    media: Users,
    title: "Clients",
    actionComponent: ClientActionComponent,
  },
  {
    id: 3,
    description:
      "Bill Types provide a quick and easy way to choose a bill type either by a loan number or a trade id. Click Choose Bill Types to learn more.",
    media: Adjustments,
    title: "Bill Types",
    actionComponent: BillTypeActionComponent,
  },
  {
    id: 4,
    description:
      "Make a new payment quickly using this link by selecting either a loan number or a trade id. Click Make a payment to learn more.",
    media: CurrencyDollar,
    title: "Make a Payment",
    actionComponent: PaymentActionComponent,
  },
  {
    id: 5,
    description:
      "Apply a new adjustment quickly using this link by selecting either a loan number or a trade id. Click Apply an Adjustment to learn more.",
    media: Adjust,
    title: "Apply an Adjustment",
    actionComponent: AdjustmentActionComponent,
  },
];

export const QuickLinks = () => {
  return (
    <>
      <Helmet>
        <title>Billing: Quick Links</title>
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
                <Typography variant="h2">Quick Links</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={3}>
              {quickLinks.map((quickLink) => (
                <Grid item lg={3} sm={6} xl={3} xs={12} key={quickLink.id}>
                  <QuickLinkCard quickLink={quickLink} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default QuickLinks;
