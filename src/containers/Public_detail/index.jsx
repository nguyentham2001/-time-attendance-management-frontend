import React, { useState, useEffect } from 'react';
import StyledPublicDetail from './index.style';
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
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
  { id: 'name8', label: 'Name', minWidth: 170 },
  { id: 'name9', label: 'Name', minWidth: 170 },
  { id: 'name10', label: 'Name', minWidth: 170 },
  { id: 'name11', label: 'Name', minWidth: 170 },
  { id: 'name12', label: 'Name', minWidth: 170 },
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
    name8: '1',
    name9: '1',
    name10: '1',
    name11: '1',
    name12: '1',
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

const PublicDeatail = () => {
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledPublicDetail>
      <div className="public-home">
        <div className="public-header">
          <label className="titile-public">{t('Chi tiết công')}</label>
        </div>
        <div className="public-container">
          <div className="calendar-public">
            <label>{t(' Điều kiện lọc')}</label>
          </div>
          <div className="public-detail">
            <div className="calendar-day">
              <span className="day-public">{t('Ngày:')}</span>
              <div className="date-calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={['year', 'month', 'day']}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </div>

              <label className="icon-calendar">~</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DatePicker
                    defaultValue={yesterday}
                    disablePast
                    views={['year', 'month', 'day']}
                  />
                </DemoItem>
              </LocalizationProvider>
            </div>
            <div className="button-public">
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
                id="btt-new"
                color="primary"
                startIcon={<BlockIcon />}
              >
                {t('Làm mới')}
              </Button>
            </div>
          </div>
          <div className="note-public">
            <div className="icon-listmenu">
              <div className="icon-list">
                <MenuIcon />
              </div>
              <span className="title-list">
                {t('Báo cáo thời gian làm việc')}
              </span>
            </div>
            <div className="note-rules">
              <Button className="late-early" onClick={handleClickOpen}>
                {t('Chú thích và nội quy đi muộn/ về sớm')}
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleClose} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>

          <div className="table-public">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell>Account</TableCell>
                      <TableCell>Mã NV</TableCell>
                      <TableCell>Tên</TableCell>
                      <TableCell>Phòng ban</TableCell>
                      <TableCell>Chức vụ</TableCell>
                      <TableCell>Vào 1</TableCell>
                      <TableCell>Ra 1</TableCell>
                      <TableCell>Vào 2 </TableCell>
                      <TableCell>Ra 2</TableCell>
                      <TableCell>Giờ làm việc(giờ)</TableCell>
                      <TableCell>Giờ tăng ca(giờ)</TableCell>
                      <TableCell>Nghỉ(nếu có)</TableCell>
                      <TableCell>Vào muộn(phút)</TableCell>
                      <TableCell>Ra sớm(phút)</TableCell>
                      <TableCell>Công(ngày)</TableCell>
                      <TableCell>Ghi chú</TableCell>
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
    </StyledPublicDetail>
  );
};

export default PublicDeatail;
