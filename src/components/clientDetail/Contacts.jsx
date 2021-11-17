import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const Contacts = ({ contactDetails }) => {
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
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Job Title</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Mobile Phone</TableCell>
            <TableCell align="center">Contact Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactDetails
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.firstName}</TableCell>
                <TableCell align="center">{item.lastName}</TableCell>
                <TableCell align="center">{item.jobTitle}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.mobilePhone}</TableCell>
                <TableCell align="center">{item.contactType}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contactDetails.length}
        rowsPerPage={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Contacts;
