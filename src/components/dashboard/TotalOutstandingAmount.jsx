import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { MoreVertTwoTone } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";
import { CurrencyDollar } from "heroicons-react";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[600],
    height: 56,
    width: 56,
  },
});

const TotalOutstandingAmount = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL AMOUNT OUTSTANDING
            </Typography>
            <Typography color="textPrimary" variant="h3">
              <NumberFormat
                value={896237}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalSeparator="."
                thousandsGroupStyle="thousand"
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <CurrencyDollar />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{ color: "blue", marginLeft: "auto" }}
          endIcon={<MoreVertTwoTone />}
          href="/app/clients"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default TotalOutstandingAmount;
