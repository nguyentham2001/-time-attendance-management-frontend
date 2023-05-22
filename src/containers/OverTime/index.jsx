import React, { useState, useEffect } from 'react';
import StyledOverTime from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import MenuIcon from '@mui/icons-material/Menu';
import CustomTable from 'src/components/CustomTable';

import BlockIcon from '@mui/icons-material/Block';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2';

import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

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
];

const OverTime = () => {
  const { t } = useTranslation();

  const yesterday = dayjs().subtract(1, 'day');

  //

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
    <StyledOverTime>
      <div className="overtime-home">
        <div className="overtime-header">
          <span className="title-overtime">{t('Tăng ca')}</span>
        </div>
        <div className="overtime-container">
          <div className="titile-create">
            <span>{t('Tạo phiếu tăng ca')}</span>
          </div>
          <div className="create-container">
            <div className="type-overtime">
              <span className="title-typeovertime">{t('Loại tăng ca')}</span>
              <span className="requied">*</span>
              <div className="select-typeovertime">
                <Select
                  className="select-detail"
                  placeholder={t('Chọn...')}
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: '0.2s',
                      [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                      },
                    },
                  }}
                >
                  <Option value="overtime ">{t('OverTime')}</Option>
                  <Option value="overnight ">{t('OverNight')}</Option>
                </Select>
              </div>
            </div>
            <Box sx={{ width: '100%' }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <div className="time-overtime">
                    <span className="title-typeovertime">{t('Thời gian')}</span>
                    <span className="requied">*</span>
                    <div className="calendar-timeover">
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
                  </div>
                  <div className="calendar-oclock">
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      className="oclock"
                    >
                      <DemoContainer components={['TimePicker']}>
                        <DemoItem>
                          <DesktopTimePicker
                            defaultValue={dayjs('2022-04-17T15:30')}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                    <span className="icon-oclock">~</span>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      className="oclock"
                    >
                      <DemoContainer components={['TimePicker']}>
                        <DemoItem>
                          <DesktopTimePicker
                            defaultValue={dayjs('2022-04-17T15:30')}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="reason-overtime">
                    <span className="title-reasonovertime">{t('Lý do')}</span>
                    <span className="requied">*</span>

                    <TextField
                      id="outlined-basic"
                      className="reasonovertime-input"
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="deparment">
                    <span>{t('Phòng ban')}</span>
                    <TextField
                      id="outlined-basic"
                      className="deparment-input"
                      variant="outlined"
                    />
                  </div>
                  <div className="person-in-charge">
                    <span>{t('Người phụ trách phòng')}</span>
                    <Select
                      className="select-deparment"
                      placeholder={t('Chọn...')}
                      indicator={<KeyboardArrowDown />}
                      sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                          transition: '0.2s',
                          [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                          },
                        },
                      }}
                    >
                      <Option value="no-data ">{t('Không có dữ liệu')}</Option>
                    </Select>
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
              {t('Tạo phiếu')}
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
        </div>

        <div className="overtime-container">
          <div className="listovertime">
            <div className="icon-listovertime">
              <MenuIcon />
            </div>

            <label className="title-listovertime">
              {t('Danh sách phiếu tăng ca')}
            </label>
          </div>
          <div className="table-overtime">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan={2}>STT</TableCell>
                      <TableCell rowSpan={2}>Loại tăng ca</TableCell>
                      <TableCell colSpan={3} align="center">
                        Thời gian tăng ca
                      </TableCell>
                      <TableCell rowSpan={2}>Lý do </TableCell>
                      <TableCell rowSpan={2}>Trạng thái </TableCell>
                      <TableCell rowSpan={2}>Thao tác</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ top: 57 }}>Ngày </TableCell>
                      <TableCell style={{ top: 57 }}>Từ </TableCell>
                      <TableCell style={{ top: 57 }}>Đến</TableCell>
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
    </StyledOverTime>
  );
};

export default OverTime;
