import {
  FormControl,
  OutlinedInput,
  Box,
  InputAdornment,
  makeStyles,
  InputLabel,
  Select,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    borderRadius: theme.spacing(0),
  },
}));

const SearchBox = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexwrap: "wrap",
        alignItems: "center",
      }}
    >
      <Box sx={{ mr: 1, width: 500 }}>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            placeholder="Search by Client"
          />
        </FormControl>
      </Box>
      <Box sx={{ mr: 1, width: 200 }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          className={classes.formControl}
        >
          <InputLabel htmlFor="sortby">Sort By</InputLabel>
          <Select native label="Sort By">
            <option value="Client">Client</option>
            <option value="Amount">Amount</option>
            ))
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchBox;
