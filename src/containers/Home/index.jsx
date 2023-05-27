import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledHome from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import CreateEmployee from './CreateEmployee';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'no', label: 'STT' },
  { id: 'employeeId', label: 'employeeId', minWidth: 170 },
  { id: 'name', label: 'name', minWidth: 100 },
  {
    id: 'phoneNumber',
    label: 'phoneNumber',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'email',
    label: 'email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'address',
    label: 'address',
    minWidth: 170,
    align: 'right',
  },
  { id: 'positionId', label: 'positionId', minWidth: 170 },
  { id: 'departmentId', label: 'departmentId', minWidth: 170 },
  { id: 'dateOfBirth', label: 'dateOfBirth', minWidth: 170 },
  { id: 'identityNumber', label: 'identityNumber', minWidth: 170 },
  { id: 'issuedOn', label: 'issuedOn', minWidth: 170 },
  { id: 'issuedBy', label: 'issuedBy', minWidth: 170 },
  { id: 'signingDate', label: 'signingDate', minWidth: 170 },
  { id: 'workingDate', label: 'workingDate', minWidth: 170 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return {
    name,
    code,
    population,
    size,
    density,
    name1: '1',
    name2: '1',
    name3: '1',
    name4: '1',
    name5: '1',
  };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const Home = () => {
  const { t } = useTranslation();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledHome>
      <div className="home">
        <h3 className="employee-header">{t('manage-employee-list')}</h3>

        <div className="home-employee">
          <div className="employee-add">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search')}
              type="text"
              className="input-employee"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              id="employee-btt"
              variant="contained"
              className="employee-button"
              color="primary"
              startIcon={<ControlPointIcon />}
              onClick={handleOpenDialog}
              // onClick={() => setView(VIEWS.ADD)}
            >
              {t('add')}
            </Button>
          </div>
          <div className="list-employee">
            <div className="icon-listovertime">
              <MenuIcon />
            </div>

            <label className="title-listovertime">
              {t('Danh sách nhân viên')}
            </label>
          </div>
          <div className="employee-container">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map(({ label }) => (
                        <TableCell>{label}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>

      <CreateEmployee open={open} handleClose={handleClose} />
    </StyledHome>
  );
};

export default Home;
