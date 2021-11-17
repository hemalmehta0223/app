import { FormControl, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  formControlRoot: {
    flexDirection: "row",
    flex: "1 1 auto",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: theme.spacing(1.5),
    justifyContent: "space-between",
    borderRadius: 10,
    width: "100%",
  },
  formLabel: {
    fontSize: "0.84rem",
  },
}));

const Fieldset = ({ label, children }) => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.formControlRoot}>
      <FormLabel component="legend" className={classes.formLabel}>
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
};

export default Fieldset;
