import { Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Fieldset from "../common/Fieldset";
import FileUpload from "./FileUpload";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const CommonButtonSet = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item container xs={12}>
        <Fieldset label="Import EPO/EPD/Pairoff">
          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              EPO
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              EPD
            </Button>
            <Button variant="contained" color="secondary">
              Pairoff
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              ALL
            </Button>
            <Button variant="outlined" color="secondary">
              Dry Run
            </Button>
          </Box>
        </Fieldset>
      </Grid>
      <Grid item container xs={12}>
        <Fieldset label="Funding Adjustment File Upload">
          <Box>
            <FileUpload id="corr-fundadj" />
          </Box>

          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Submit
            </Button>
            <Button variant="outlined" color="secondary">
              Dry Run
            </Button>
          </Box>
        </Fieldset>
      </Grid>
      <Grid item container xs={12}>
        <Fieldset label="Tax Penalties">
          <Box>
            <FileUpload id="corr-taxpen" />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Submit
            </Button>
            <Button variant="outlined" color="secondary">
              Dry Run
            </Button>
          </Box>
        </Fieldset>
      </Grid>
    </Grid>
  );
};

export default CommonButtonSet;
