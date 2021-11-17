import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme,
  CardActions,
  Button,
} from "@material-ui/core";
import { MoreVertTwoTone } from "@material-ui/icons";

const OutstandingBillTypes = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [1200, 670, 340, 120, 75],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.blue[600],
          colors.yellow[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["EPO", "EPD", "Pairoff", "Fund Adj", "Tax Pen"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 50,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const billTypes = [
    {
      title: "EPO",
      value: 1200,
      color: colors.indigo[500],
    },
    {
      title: "EPD",
      value: 670,
      color: colors.red[600],
    },
    {
      title: "Pairoff",
      value: 340,
      color: colors.orange[600],
    },
    {
      title: "Fund Adj",
      value: 120,
      color: colors.blue[600],
    },
    {
      title: "Tax Pen",
      value: 75,
      color: colors.yellow[600],
    },
  ];

  return (
    <Card>
      <CardHeader
        title={
          <Typography color="textSecondary" gutterBottom variant="h6">
            OUTSTANDING BILL TYPES
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 390,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {billTypes.map(({ color, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography color="textPrimary" variant="h6">
                {title}
              </Typography>
              <Typography style={{ color }} variant="body">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{ color: "blue", marginLeft: "auto" }}
          endIcon={<MoreVertTwoTone />}
          href="/app/billtypes"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default OutstandingBillTypes;
