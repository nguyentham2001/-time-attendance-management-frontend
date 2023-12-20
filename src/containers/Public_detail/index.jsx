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

import Dialog from './Dialog';

const columns = [
  { id: 'no', label: 'no' },
  { id: 'account', label: 'account' },
  {
    id: 'id',
    label: 'id',
    align: 'right',
  },
  {
    id: 'name',
    label: 'name-employee',
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

            <Button className="late-early" onClick={handleClickOpen}>
              {t('Chú thích và nội quy đi muộn/ về sớm')}
            </Button>
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
                    {/* {rows
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
                      })} */}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                // count={rows.length}
                count={0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
      <Dialog open={open} handleClose={handleClose} />
    </StyledPublicDetail>
  );
};

export default PublicDeatail;
