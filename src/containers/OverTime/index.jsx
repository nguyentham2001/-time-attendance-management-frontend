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
import { usePaginationWithState } from 'src/hooks';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Popup from 'src/components/Popup';
import { useSnackbar } from 'notistack';
import debounce from '@src/utils/debounce';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import apis from 'src/apis';
const columns = [
  { id: 'no', label: 'STT', minWidth: 170 },
  { id: 'type', label: 'Type overtime', minWidth: 100 },
  {
    id: 'date',
    label: 'date',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'startTime',
    label: 'startTime',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'endTime',
    label: 'endTime',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  { id: 'reason', label: 'reason', minWidth: 170 },
  { id: 'status', label: 'status', minWidth: 170 },
  { id: 'actions', label: 'actions', minWidth: 170 },
];

const OverTime = () => {
  const { t } = useTranslation();

  const yesterday = dayjs().subtract(1, 'day');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    onParamsChange(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = +event.target.value;
    onParamsChange({ limit: newLimit, pageNum: 1 });
  };
  const {
    data,
    onParamsChange,

    currentPage,
    limit,
    total,
  } = usePaginationWithState([], apis.overtimes.getListOverTime);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handleDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handlefromDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handletoDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handleReasonChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  function formatDate(date) {
    if (date) {
      return moment(date).format('DD/MM/YYYY');
    }
    return '';
  }

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
                  onChange={handleTypeChange}
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
                    {data.map((row, index) => {
                      const item = data[index];

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            let value = row[column.id];
                            if (column.id == ' no') {
                              value = (currentPage - 1) * limit + index + 1;
                            }

                            if (
                              column.id == 'fromDate' ||
                              column.id == 'toDate'
                            ) {
                              return <TableCell>{formatDate(value)}</TableCell>;
                            }

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
                count={total}
                rowsPerPage={limit}
                page={currentPage - 1}
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
