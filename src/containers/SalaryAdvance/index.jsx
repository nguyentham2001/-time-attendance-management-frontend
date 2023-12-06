import React, { useEffect, useState } from 'react';
import StyledSalaryAdvances from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment, Box, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// import { usePaginationWithState } from 'src/hooks';
// import apis from 'src/apis';
const columns = [
  { id: 'no', label: 'STT', minWidth: 170 },
  { id: 'datecreate', label: 'Ngày tạo đơn', minWidth: 100 },
  { id: 'salary', label: 'Lương chính thức', minWidth: 170 },
  { id: 'salary_present', label: 'Lương thời điểm tạm ứng', minWidth: 170 },
  { id: 'salary_advance', label: 'Lương tạm ứng', minWidth: 170 },
  { id: 'reason', label: 'Lý do', minWidth: 170 },
  { id: 'status', label: 'Trạng thái', minWidth: 170 },
  { id: 'verifier', label: 'Người xác nhận', minWidth: 170 },
  { id: 'confirmation_date', label: 'Ngày xác nhận', minWidth: 170 },
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

  // const {
  //   data,
  //   onPageChange,
  //    onParamsChange,
  //    currentPage,
  //   limit,
  //   total,
  //   handleCallApi: fetchListSalaryAdvances,

  // } = usePaginationWithState([], apis.salary_advance.getListSalaryAdvances);

  // const handleReloadData = () => {
  //   fetchListSalaryAdvances();
  // };

  // const handleChangePage = (event, newPage) => {
  //   onPageChange(newPage + 1);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   const newLimit = +event.target.value;
  //   onParamsChange({limit: newLimit, pageNum: 1});

  // };

  return (
    <StyledSalaryAdvances>
      <div className="salaryadvance-home">
        <div className="salaryadvance-header">
          <span className="title-salaryadvance">{t('Tạm ứng lương')}</span>
        </div>

        <div className="salaryadvance-container">
          <span className="titlecreatesalary">
            {t('Tạo mới tạm ứng lương')}
          </span>
          <Box sx={{ width: '100%' }} className="box-advance">
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
                    <TableCell>Lương tạm ứng </TableCell>
                    <TableCell>Lý do</TableCell>
                    <TableCell>Thao tác</TableCell>
                    <TableCell>Người xác nhận</TableCell>
                    <TableCell>Ngày xác nhận</TableCell>
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
