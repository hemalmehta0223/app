import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import branchListData from "../../__mocks__/branchListData";

const ClientList = ({ data }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">NMLS #</TableCell>
            <TableCell align="center">DBA</TableCell>
            <TableCell align="center">Channel Approved for?</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.nmls}</TableCell>
                <TableCell align="center">{item.dba}</TableCell>
                <TableCell align="center">
                  {item.delegatedStatus === "Active" &&
                  item.nonDelegatedStatus === "Active"
                    ? "Dual"
                    : item.delegatedStatus === "Active"
                    ? "Delegated"
                    : item.nonDelegatedStatus === "Active"
                    ? "Non-Delegated"
                    : "Unknown"}
                </TableCell>
                <TableCell align="center">{item.status}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="medium"
                    href={`/app/clients/${item.id}/detail`}
                  >
                    <ViewComfyIcon size="20" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ClientList;
