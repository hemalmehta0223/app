import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import {
  MoreHoriz,
  More,
  MoreOutlined,
  MoreHorizTwoTone,
  MoreVertTwoTone,
} from "@material-ui/icons";

import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: green[600],
    height: 56,
    width: 56,
  },
});

const TotalClients = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL CLIENTS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              250
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
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

export default TotalClients;
