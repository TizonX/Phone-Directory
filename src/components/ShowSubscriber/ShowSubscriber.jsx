import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
// Table
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, Button } from "@mui/material";

//
//  Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//
function ShowSubscriber(props) {
  return (
    <div>
      <Header title="Show Subscriber" />

      <Button
        component={Link}
        to="/AddSubscriber"
        color="error"
        style={{ marginTop: "100px", background: "success" }}
      >
        Add User
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          marginTop: "100px",
        }}
      ></div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TableContainer component={Paper} sx={{ width: "50%" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>User Phone No.</StyledTableCell>
                <StyledTableCell>Delete User</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((usersData) => (
                <StyledTableRow key={usersData.id}>
                  <StyledTableCell component="th" scope="row">
                    {usersData.id}
                  </StyledTableCell>
                  <StyledTableCell>{usersData.name}</StyledTableCell>
                  <StyledTableCell>{usersData.phone}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => props.ShowSubscriberHandler(usersData.id)}
                    >
                      Error
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default ShowSubscriber;
