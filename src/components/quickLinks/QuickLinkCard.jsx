import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MoreVertTwoTone } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  grid: {
    padding: theme.spacing(2),
  },
  avatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}));

const QuickLinkCard = ({ quickLink }) => {
  const classes = useStyles();
  const { media: Icon, actionComponent: ActionComponent } = quickLink;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar alt="Link" variant="rounded" className={classes.avatar}>
            <Icon />
          </Avatar>
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {quickLink.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {quickLink.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Grid item className={classes.grid}>
            <ActionComponent />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

QuickLinkCard.propTypes = {
  quickLink: PropTypes.object.isRequired,
};

export default QuickLinkCard;
