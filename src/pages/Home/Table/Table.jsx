import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories ) {
  return { name, calories };
}

const rows = [
  createData('POONA GANESHKHIND', 769),
  createData('LONAVLA SUPREMOS', 340),
  createData('PUNE AGRASEN', 297),
  createData('POONA SARASBAUG', 222),
  createData('PUNE PRABHAT', 219),
  createData('NASHIK ROYALS', 200),
  createData('POONA', 198),
  createData('POONA CENTRAL', 166),
  createData('TALEGAON', 150),
  createData('KOPERGAON', 144),
  createData('abc', 318),
].sort((a, b) => (a.calories > b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={10}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}





/*

import React, { useState, useRef } from "react";
import './table.css';

function MyDataTable(props) {
  const [sortBy, setSortBy] = useState({ prop: "score", order: "descending" });
  const [pageLength, setPageLength] = useState(128);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const data = props.names.map((name, index) => {
    return {
      id: index,
      name: name,
      score: props.scores[index],
    };
  });

  const filteredData = data.filter(row => row.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedData = filteredData.sort((a, b) => {
        return b[sortBy.prop] - a[sortBy.prop]
  });

  const displayedData = sortedData.slice(pageLength * (currentPage - 1), pageLength * currentPage);

  // create a reference to the container element
  const containerRef = useRef(null);

  // function to handle the onScroll event
  const handleScroll = () => {
    // check if the user has scrolled to the bottom of the container
    if (containerRef.current.scrollHeight - containerRef.current.scrollTop === containerRef.current.clientHeight) {
        if(pageLength*currentPage < filteredData.length){
            setCurrentPage(currentPage + 1)
        }
    }
  }

  return (
    <div style={{height: "100vh"}}>
      <input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
      <div ref={containerRef} style={{height: "70vh", overflow: "auto"}} onScroll={handleScroll}>
        <table>
          <tbody>
          {displayedData.slice(0, pageLength).map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td className="d-flex justify-content-end">{row.score}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyDataTable;

*/