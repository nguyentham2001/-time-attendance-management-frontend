import React from 'react';
import StyledSalaryAdvances from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import MenuIcon from '@mui/icons-material/Menu';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'name1', label: 'Name', minWidth: 170 },
  { id: 'name2', label: 'Name', minWidth: 170 },
  { id: 'name3', label: 'Name', minWidth: 170 },
  { id: 'name4', label: 'Name', minWidth: 170 },
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
  createData('Ireland', 'IE', 4857000, 70273),
];

const SalaryAdvances = () => {
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

  return (
    <StyledSalaryAdvances>
      <div className="salaryadvance-home">
        <span className="title-salaryadvance">{t('Tạm ứng lương')}</span>
        <div className="salaryadvance-header">
          <span className="titlecreatesalary">
            {t('Tạo mới tạm ứng lương')}
          </span>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <div className="account-advance">
                  <span className="title-account">{t('Tài khoản')}</span>
                  <TextField
                    id="outlined-basic"
                    className="input-account"
                    variant="outlined"
                  />
                </div>
                <div className="name-advance">
                  <span className="title-account">{t('Tên nhân viên')}</span>
                  <TextField
                    id="outlined-basic"
                    className="input-name"
                    variant="outlined"
                  />
                </div>
                <div className="name-advance">
                  <span className="title-account">{t('Phòng ban')}</span>
                  <TextField
                    id="outlined-basic"
                    className="input-deparment"
                    variant="outlined"
                  />
                </div>
                <div className="name-advance">
                  <span className="title-account">{t('Chức vụ')}</span>
                  <TextField
                    id="outlined-basic"
                    className="input-possition"
                    variant="outlined"
                  />
                </div>
                <div className="name-advance">
                  <div className="title-account">
                    <span>{t('Lý do')}</span>
                    <span className="reqiued">*</span>
                  </div>

                  <TextField
                    id="outlined-basic"
                    className="input-reason"
                    variant="outlined"
                  />
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="salary-right">
                  <div className="salary-present">
                    <span className="title-salarypresent">
                      {t('Lương tháng tính đến thời điểm hiện tại:')}
                    </span>
                    <TextField
                      id="outlined-basic"
                      className="input-present"
                      variant="outlined"
                    />
                  </div>
                  <div className="salary-advance">
                    <span className="title-advance">
                      {t('Lương tạm ứng(tối đa 70% lương hiện tại)')}
                    </span>
                    <TextField
                      id="outlined-basic"
                      className="input-advance"
                      variant="outlined"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="button-salaryadvance">
            <Button
              variant="contained"
              className="search-button"
              id="btt-search"
              color="primary"
              startIcon={<AdjustIcon />}
            >
              {t('Tạo đơn ứng lương')}
            </Button>

            <Button
              variant="contained"
              className="new-button"
              id="btt-new"
              color="primary"
              startIcon={<BlockIcon />}
            >
              {t('Làm mới')}
            </Button>
          </div>
        </div>
        <div className="salaryadvance-container">
          <div className="icon-list">
            <MenuIcon />
            <span className="title-list">{t('Lịch sử ứng lương')}</span>
          </div>
        </div>
        <div className="table-salaryadvance">
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Ngày tạo đơn</TableCell>
                    <TableCell>Lương chính thức</TableCell>
                    <TableCell>Lương thời điểm tạm ứng </TableCell>
                    <TableCell>Lý do</TableCell>
                    <TableCell>Trạng thái </TableCell>
                    <TableCell>Thao tác</TableCell>
                    <TableCell>Người xác nhận</TableCell>
                    <TableCell>Ngày tạo đơn</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
    </StyledSalaryAdvances>
  );
};

export default SalaryAdvances;
