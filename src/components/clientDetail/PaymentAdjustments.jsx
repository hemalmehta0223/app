import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { ExpandMore, Search } from "@material-ui/icons";
import PaymentBox from "./PaymentBox";
import AdjustmentBox from "./AdjustmentBox";

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

const PaymentAdjustments = ({ paymentAdjustmentsData }) => {
  const classes = useStyles();
  return (
    <>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="payment-panel"
          id="payment-panel"
        >
          <Typography className={classes.heading}>
            {paymentAdjustmentsData[0].name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      startAdornment={
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      }
                      placeholder="Search by Loan Number/trade id"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <PaymentBox data={paymentAdjustmentsData[0].data} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="adjustment-panel"
          id="adjustment-panel"
        >
          <Typography className={classes.heading}>
            {paymentAdjustmentsData[1].name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container item spacing={2}>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      startAdornment={
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      }
                      placeholder="Search by Loan Number/trade id"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AdjustmentBox data={paymentAdjustmentsData[1].data} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PaymentAdjustments;
