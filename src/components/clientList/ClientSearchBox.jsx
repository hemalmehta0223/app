import {
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import billingPeriods from "../../__mocks__/billingPeriods";
import clientData from "../../__mocks__/clientData";

const ClientSearchBox = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ mr: 1 }}>
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
              placeholder="Search by Client"
              variant="outlined"
              {...params}
            />
          )}
          style={{ width: 300 }}
        />
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
            <option value="Pending">Active</option>
            <option value="Pending">Inactive</option>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ClientSearchBox;
