import {
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import Fieldset from "../common/Fieldset";

const useStyles = makeStyles({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
});

const BranchBillTypeBox = ({
  onPeriodChange,
  period,
  billingPeriods,
  branches,
  onBranchChange,
  branchListData,
  billTypes,
  billTypeData,
  onBillTypeChange,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="period">Choose Period</InputLabel>
          <Select
            native
            label="Choose Period"
            inputProps={{
              name: "period",
              id: "period",
            }}
            value={period}
            onChange={onPeriodChange}
          >
            {billingPeriods.map((x) => (
              <option value={x.value} key={x.value}>
                {x.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel htmlFor="branch">Choose Branch(s)</InputLabel>
          <Select
            label="Choose Branch(s)"
            inputProps={{
              name: "branch",
              id: "branch",
            }}
            multiple
            value={branches}
            onChange={onBranchChange}
            renderValue={(e) => (
              <div className={classes.chips}>
                {e.map((branch) => (
                  <Chip
                    key={branch}
                    label={branchListData.find((b) => b.id === branch).name}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
          >
            {branchListData.map((branch) => (
              <MenuItem key={branch.id} value={branch.id}>
                {branch.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Fieldset label="Choose Bill Types">
          <FormGroup row>
            {billTypeData.map((billtype) => (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name={billtype.shortName}
                    checked={billTypes[billtype.shortName]}
                    onChange={onBillTypeChange}
                  />
                }
                label={billtype.name}
                key={billtype.id}
              />
            ))}
          </FormGroup>
        </Fieldset>
      </Grid>
    </>
  );
};

export default BranchBillTypeBox;
