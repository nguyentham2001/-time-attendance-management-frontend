import React, { useEffect, useState } from 'react';
import StyledTotalLeave from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
  { id: 'name5', label: 'Name', minWidth: 170 },
  { id: 'name6', label: 'Name', minWidth: 170 },
  { id: 'name7', label: 'Name', minWidth: 170 },
 
 
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
    name6: '1',
    name7: '1',
   
   
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
const TotalLeave = () => {
  const { t } = useTranslation();
  const yesterday = dayjs().subtract(1, 'day');

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
    <StyledTotalLeave>
      <div className="salary13-home">
        <div className="salary13-header">
          <span>{t('Tổng hợp đơn nghỉ phép năm')}</span>
        </div>
        <div className="salary13-container">
          <span className="tittle-calendar">{t('Điều kiện lọc')}</span>
          <div className="calendars-years">
            <div className="calendar-month">
              <span className="title-month">{t('Tháng:')}</span>
              <span className="icon-month">*</span>
              <div className="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={['year']}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </div>
            </div>
            <div className="button-salary13">
              <Button
                variant="contained"
                className="search-button"
                id="btt-search"
                color="primary"
                startIcon={<AdjustIcon />}
              >
                {t('Tìm kiếm')}
              </Button>

              <Button
                variant="contained"
                className="new-button"
                id="btt-create"
                color="primary"
                startIcon={<BlockIcon />}
              >
                {t('Làm mới')}
              </Button>
            </div>
          </div>
          <div className="icon-listmenu">
            <div className="icon-list">
              <MenuIcon />
              <span className="title-list">
                {t('Danh sách tổng hợp nghỉ phép năm ')}
              </span>
            </div>

            <div className="export-file">
              <Button
                variant="outlined"
                className="export-button"
                id="btt-export"
                color="primary"
                startIcon={<ArrowDownwardIcon />}
              >
                {t('Xuất dữ liệu')}
              </Button>
            </div>
          </div>
          <div className="table-salary13">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell >STT</TableCell>
                      <TableCell >Account</TableCell>
                      <TableCell >Mã NV</TableCell>
                      <TableCell >Tên</TableCell>
                      <TableCell >Phòng ban</TableCell>
                      <TableCell >Chức vụ</TableCell>
                      <TableCell >Ngày bắt đầu làm việc</TableCell>
                      <TableCell >Ngày dừng làm việc</TableCell>
                      <TableCell >Số ngày phép tối đa </TableCell>
                      <TableCell >Đã phê duyệt nghỉ</TableCell>
                      <TableCell >Còn lại</TableCell>
                      <TableCell >Tổng lương nghỉ phép</TableCell>
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
    </StyledTotalLeave>
  );
};

export default TotalLeave;
