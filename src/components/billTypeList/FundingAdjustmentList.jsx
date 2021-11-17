import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const FundingAdjustmentList = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Fund Adj Id</TableCell>
            <TableCell align="center">Client</TableCell>
            <TableCell align="center">Loan Number</TableCell>
            <TableCell align="right">Amount Due</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              <Typography variant="h4" color="textSecondary">
                Content not available for Viewing
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default FundingAdjustmentList;
