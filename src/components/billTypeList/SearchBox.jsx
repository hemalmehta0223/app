import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import clientData from "../../__mocks__/clientData";

const SearchBox = ({ captions }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
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
      </Grid>
      <Grid item>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            placeholder="Search by Trade Id/Loan #"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" style={{ width: "175px" }}>
          <InputLabel htmlFor="sortby">Search By Status</InputLabel>
          <Select native label="Search by Status">
            <option value=""></option>
            <option value="Pending">Pending</option>
            <option value="Billed">Billed</option>
            <option value="Closed">Closed</option>
            ))
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
