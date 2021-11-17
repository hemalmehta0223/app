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
import billTypeData from "../../__mocks__/billTypeData";
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
            placeholder="Search by Loan Number"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" style={{ width: "200px" }}>
          <InputLabel htmlFor="Search by Bill Type">
            Search by Bill Type
          </InputLabel>
          <Select native label="Search by Bill Type">
            <option value=" "></option>
            {billTypeData.map((billtype) => (
              <option value={billtype.id} key={billtype.id}>
                {billtype.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
