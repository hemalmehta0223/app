import {
  Divider,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  divider: {
    margin: 0,
    flexShrink: 0,
    borderWidth: "0px 0px thin",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
});

const BatchDetailTab = ({
  tabs,
  value,
  onTabChange,
  periodDescription,
  branches,
  billTypes,
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
        <Tabs
          value={value}
          onChange={onTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </Tabs>
        <Divider />
      </Grid>
    </>
  );
};

export default BatchDetailTab;
