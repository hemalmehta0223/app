import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import EpoBox from "./EpoBox";
import EpdBox from "./EpdBox";
import PairoffBox from "./PairoffBox";
import { Search } from "heroicons-react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const BillTypes = ({ billTypeData }) => {
  const classes = useStyles();
  return (
    <>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="epo-panel"
          id="epo-panel"
        >
          <Typography className={classes.heading}>
            {billTypeData[0].name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container item spacing={2}>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
                  <FormControl variant="outlined" fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <EpoBox data={billTypeData[0].data} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="epd-panel"
          id="epd-panel"
        >
          <Typography className={classes.heading}>
            {billTypeData[1].name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container item spacing={2}>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
                  <FormControl variant="outlined" fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <EpdBox data={billTypeData[1].data} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="pairoff-panel"
          id="pairoff-panel"
        >
          <Typography className={classes.heading}>
            {billTypeData[2].name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container item spacing={2}>
                <Grid item xs={3}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      startAdornment={
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      }
                      placeholder="Search by Trace Id"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" fullWidth>
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
            </Grid>
            <Grid item xs={12}>
              <PairoffBox data={billTypeData[2].data} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="fundadj-panel"
          id="fundadj-panel"
        >
          <Typography className={classes.heading}>
            Funding Adjustments
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.heading}>
                Not available for viewing
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="fundadj-panel"
          id="fundadj-panel"
        >
          <Typography className={classes.heading}>Tax Penalties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.heading}>
                Not available for viewing
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BillTypes;
