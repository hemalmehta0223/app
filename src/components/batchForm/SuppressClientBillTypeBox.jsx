import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@material-ui/core";
import Fieldset from "../common/Fieldset";
import TransferList from "../common/TransferList";

const SuppressClientBillTypeBox = ({
  periodDescription,
  branches,
  billTypes,
  billTypeData,
  clientData,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body2" component="p">
              <strong>Period: </strong> {periodDescription}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" component="p">
              <strong>Branch: </strong> {branches}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          <strong>Bill Types: </strong> {billTypes}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Fieldset label="Choose clients to Suppress">
          <TransferList items={clientData} />
        </Fieldset>
      </Grid>
      <Grid item container xs={12}>
        <Fieldset label="Choose items to suppress for the selected clients">
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="ALL"
            />
            {billTypeData.map((billtype) => (
              <FormControlLabel
                control={<Checkbox color="primary" />}
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

export default SuppressClientBillTypeBox;
