import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledAbsenceRequest from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
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
import moment from 'moment';
import { REPEAT_TIME, ABSENCE_REQUEST_STATUS } from 'src/constants';
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
import { useSnackbar } from 'notistack';
import apis from 'src/apis';
import { usePaginationWithState } from 'src/hooks';
import debounce from '@src/utils/debounce';
import { getByPath } from '@src/utils/object';

const columns = [
  { id: 'no', label: 'STT' },
  { id: 'manager', label: 'Manager', minWidth: 100 },
  {
    id: 'absence.name',
    label: 'Absence name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'requestType',
    label: 'Break time',
    minWidth: 170,
    align: 'right',
  },
  { id: 'fromDate', label: 'From date', minWidth: 170 },
  { id: 'toDate', label: 'To date', minWidth: 170 },
  { id: 'reason', label: 'Reason', minWidth: 170 },
  { id: 'handoverWork', label: 'handoverWork', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'action', label: 'Action', minWidth: 170 },
];

const AbsenceRequest = () => {
  const { t } = useTranslation();
  const [repeatTime, setRepeatTime] = useState(REPEAT_TIME.ALLDAY);
  const handleRepeatTimeChanged = (value) => {
    setRepeatTime(value);
  };
  const yesterday = dayjs().subtract(1, 'day');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [absenceRequestData, setAbsenceRequestData] = React.useState({});

  const handleChangePage = (event, newPage) => {
    onPageChange(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = +event.target.value;
    onParamsChange({ limit: newLimit, pageNum: 1 });
  };

  const { data, onParamsChange, onPageChange, currentPage, limit, total } =
    usePaginationWithState([], apis.absence_request.getListAbsenceRequest);

  const handleManagerChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleRequestTypeChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleFromDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handleToDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  const handleResonChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };
  // const handleStatusChange = (event) => {
  //   const { value } = event.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     name: value,
  //   }));
  // };

  //       const handleCreateAbsence_Request = async ()=>{
  // if(requestType.trim().leghth == 0) return;
  // try{
  //   let res;
  //   const data = {requestType};
  //   if (!absence_request){
  // res = await apis.absence_request.createAbsence_Request(data);
  //   }else{
  //     res = await apis.absence_request.updateAbsence_Request(data.id, data);

  //   }
  //   };

  function renderStatus(statusLogChat) {
    if (statusLogChat === ABSENCE_REQUEST_STATUS.PENDING) {
      return <span className="pending">{t('pending')}</span>;
    }
    if (statusLogChat === ABSENCE_REQUEST_STATUS.CONFIRMED) {
      return <span className="confimed">{t('confirmed')}</span>;
    }
    if (statusLogChat === ABSENCE_REQUEST_STATUS.APPROVED) {
      return <span className="aprroved">{t('approved')}</span>;
    }
    return <span className="cancel">{t('cancel')}</span>;
  }

  function formatDate(date) {
    if (date) {
      return moment(date).format('DD/MM/YYYY');
    }
    return '';
  }

  return (
    <StyledAbsenceRequest>
      <div className="createrequest-home">
        <span className="title-createrequest">{t('absenceRequest')}</span>
        <div className="createrequest-container">
          <span className="title-create">{t('absenceRequest')}</span>

          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <div className="type-request">
                  <div>
                    <span>{t('absenceName')}</span>
                    <span className="requied">*</span>
                  </div>

                  <div className="select-typerequest">
                    <Select
                      onChange={handleRequestTypeChange}
                      className="select-detail"
                      placeholder={t('select')}
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
                      <Option value="nosalary ">{t('Nghỉ không lương')}</Option>
                      <Option value="online ">{t('Làm online, onsite')}</Option>
                    </Select>
                  </div>
                </div>
                <div className="type-holiday">
                  <span>{t('requestType')}</span>
                  <Select
                    // onChange={handleCreatedAtChange}
                    className="select-typeholiday"
                    placeholder={t('Chọn...')}
                    value={repeatTime}
                    onChange={(e, newValue) =>
                      handleRepeatTimeChanged(newValue)
                    }
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
                    {Object.keys(REPEAT_TIME).map((key) => (
                      <Option value={REPEAT_TIME[key]}>
                        {t(key.toLocaleLowerCase())}
                      </Option>
                    ))}
                  </Select>
                </div>
                {repeatTime == REPEAT_TIME.ALLDAY && (
                  <>
                    <div className="time-startend">
                      <div>
                        <span>{t('fromDate')}</span>
                        <span className="requied">*</span>
                      </div>

                      <div className="calendar-start">
                        <LocalizationProvider
                          onChange={handleFromDateChange}
                          dateAdapter={AdapterDayjs}
                        >
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
                    <div className="time-startend">
                      <span>{t('toDate')}</span>
                      <span className="requied">*</span>
                      <div className="calendar-end">
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          onChange={handleToDateChange}
                        >
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
                    {/* <span className="total-day">
                      {t('Tổng: ')}
                      <strong>
                        <i>0</i>
                      </strong>
                      {t(' ngày')}
                    </span> */}
                  </>
                )}
                {repeatTime == REPEAT_TIME.MORNING && (
                  <>
                    <div className="time-startend">
                      <div>
                        <span>{t('fromDate')}</span>
                        <span className="requied">*</span>
                      </div>

                      <div className="calendar-start">
                        <LocalizationProvider
                          onChange={handleFromDateChange}
                          dateAdapter={AdapterDayjs}
                        >
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
                  </>
                )}
                {repeatTime == REPEAT_TIME.AFTERNOON && (
                  <>
                    <div className="time-startend">
                      <div>
                        <span>{t('fromDate')}</span>
                        <span className="requied">*</span>
                      </div>

                      <div className="calendar-start">
                        <LocalizationProvider
                          onChange={handleFromDateChange}
                          dateAdapter={AdapterDayjs}
                        >
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
                  </>
                )}
                <div className="reason-work">
                  <div>
                    <span>{t('reason')}</span>
                    <span className="requied">*</span>
                  </div>

                  <TextField
                    id="outlined-basic"
                    className="input-reason"
                    variant="outlined"
                    onChange={handleResonChange}
                  />
                </div>
                <div className="reason-work">
                  <span>{t('handoverWork')}</span>
                  <TextField
                    id="outlined-basic"
                    className="input-handoverwork"
                    variant="outlined"
                  />
                </div>
              </Grid>
              <Grid xs={6} className="deparment-right">
                <div className="deparment">
                  <span>{t('deparment')}</span>
                  <div>
                    <TextField
                      id="outlined-basic"
                      className="deparment-input"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className="person-in-charge">
                  <span>{t('manager')}</span>
                  <div>
                    <Select
                      className="select-deparment"
                      onChange={handleManagerChange}
                      placeholder={t('select')}
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
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="button-createrequest">
            <Button
              variant="contained"
              className="search-button"
              id="btt-search"
              color="primary"
              startIcon={<AdjustIcon />}
            >
              {t('create')}
            </Button>

            <Button
              variant="contained"
              className="new-button"
              id="btt-new"
              color="primary"
              startIcon={<BlockIcon />}
            >
              {t('refresh')}
            </Button>
          </div>
        </div>
        <div className="createrequest-footer">
          <div className="icon-list">
            <MenuIcon />
            <span className="title-list">{t('menu')}</span>
          </div>

          <div className="table-createrequest">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan={2}>{t('no')}</TableCell>
                      <TableCell rowSpan={2}>{t('manager')}</TableCell>
                      <TableCell rowSpan={2}>{t('absenceName')}</TableCell>
                      <TableCell colSpan={3} align="center">
                        {t('absenceTime')}
                      </TableCell>
                      <TableCell rowSpan={2}>{t('reason')}</TableCell>
                      <TableCell rowSpan={2}>{t('handoverWork')}</TableCell>
                      <TableCell rowSpan={2}>{t('status')}</TableCell>
                      <TableCell rowSpan={2}>{t('actions')}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ top: 57 }} rowSpan={2}>
                        {t('requestType')}
                      </TableCell>
                      <TableCell style={{ top: 57 }} rowSpan={2}>
                        {t('fromDate')}
                      </TableCell>
                      <TableCell style={{ top: 57 }} rowSpan={2}>
                        {t('toDate')}
                      </TableCell>
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
                            let value = getByPath(row, column.id);
                            if (column.id === 'no') {
                              value = (currentPage - 1) * limit + index + 1;
                            }
                            if (column.id === 'actions') {
                              return (
                                <TableCell>
                                  {actions.map((action) => (
                                    <IconButton
                                      className="icon-button"
                                      onClick={() => action.onClick(item)}
                                      disabled={
                                        typeof action.disable === 'function'
                                          ? action.disable(item)
                                          : action.disable
                                      }
                                    >
                                      {typeof action.icon === 'function'
                                        ? action.icon(item)
                                        : action.icon}
                                    </IconButton>
                                  ))}
                                </TableCell>
                              );
                            }

                            if (column.id == 'status') {
                              return (
                                <TableCell>{renderStatus(value)}</TableCell>
                              );
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
    </StyledAbsenceRequest>
  );
};

export default AbsenceRequest;
