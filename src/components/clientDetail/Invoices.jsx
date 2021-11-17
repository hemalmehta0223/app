import { Box, FormControl, Grid, InputLabel, Select } from "@material-ui/core";
import billingPeriods from "../../__mocks__/billingPeriods";
import InvoiceList from "../batchForm/InvoiceList";

const Invoices = ({ invoiceData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ mr: 1 }}>
            <FormControl variant="outlined" style={{ width: 180 }}>
              <InputLabel htmlFor="period">Search Period</InputLabel>
              <Select
                native
                label="Search Period"
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
          </Box>
          <Box sx={{ ml: 3 }}>
            <FormControl variant="outlined" style={{ width: 200 }}>
              <InputLabel htmlFor="period">Search by Status</InputLabel>
              <Select
                native
                label="Search by Status"
                inputProps={{
                  name: "status",
                  id: "status",
                }}
              >
                <option value=""></option>
                <option value="Pending">Pending</option>
                <option value="Billed">Billed</option>
                <option value="Closed">Closed</option>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <InvoiceList data={invoiceData} />
      </Grid>
    </Grid>
  );
};

export default Invoices;
