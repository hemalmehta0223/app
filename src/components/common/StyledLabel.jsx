import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    borderRadius: 16,
    alignItems: "center",
    flexGrow: 0,
    flexShrink: 0,
    fontSize: "0.6875rem",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    width: "100px",
    whiteSpace: "nowrap",
    color: "white",
    padding: "8px 16px",
    justifyContent: "center",
  },
});

const StyledLabel = (props) => {
  const classes = useStyles();
  return (
    <span className={classes.root} style={{ backgroundColor: props.bgColor }}>
      {props.label}
    </span>
  );
};

export default StyledLabel;
