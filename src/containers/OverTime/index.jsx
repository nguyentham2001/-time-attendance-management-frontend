import React, { useState, useEffect } from 'react';
import StyledOverTime from './index.style';
import { useTranslation } from 'react-i18next';
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  IconButton,
} from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import MenuIcon from '@mui/icons-material/Menu';
import Textarea from '@mui/joy/Textarea';

import BlockIcon from '@mui/icons-material/Block';

import Grid from '@mui/material/Unstable_Grid2';
import { usePaginationWithState } from 'src/hooks';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Popup from 'src/components/Popup';
import { enqueueSnackbar, useSnackbar } from 'notistack';
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
import { getByPath } from '@src/utils/object';
import moment from 'moment';
import { OVERTIME_STATUS, OVERTIME_TYPE } from 'src/constants';
import { useDispatch, useSelector } from 'react-redux';
const columns = [
  { id: 'no', label: 'STT', minWidth: 170 },
  { id: 'type', label: 'Type overtime', minWidth: 100 },
  { id: 'date', label: 'date', minWidth: 170, align: 'right' },
  { id: 'startTime', label: 'startTime', minWidth: 170, align: 'right' },
  { id: 'endTime', label: 'endTime', minWidth: 170, align: 'right' },
  { id: 'reason', label: 'reason', minWidth: 170 },
  { id: 'status', label: 'status', minWidth: 170 },
  { id: 'action', label: 'action', minWidth: 170 },
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
  const { onParamsChange, data, currentPage, limit, total } =
    usePaginationWithState([], apis.overtimes.getListOverTime);

  const [dataOverTime, setDataOverTime] = useState({});
  const handleTypeChange = (event) => {
    const { value } = event.target;
    console.log('type', value);
    setDataOverTime((prevData) => ({
      ...prevData,
      type: value,
    }));
  };

  const handleDateChange = (value) => {
    setDataOverTime((prevData) => ({
      ...prevData,
      date: value,
    }));
  };

  const handlestartTimeChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleendTimeChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleReasonChange = (event) => {
    const { value } = event.target;
    setDataOverTime((prevData) => ({
      ...prevData,
      reason: value,
    }));
  };

  const handleSupervisorsChange = (event) => {
    const { value } = event.target;
    setDataOverTime((prevData) => ({
      ...prevData,
      supervisorId: value,
    }));
  };

  const [supervisors, setSupervisors] = useState([]);
  useEffect(() => {
    fetchListSupervisors();
  }, []);

  const fetchListSupervisors = async () => {
    const res = await apis.supervisor.getListSupervisors();
    const { status } = res || {};
    if (status == 1) {
      setSupervisors(res.result.data);
    }
  };

  // const [overtimes, setOverTime] = useState({});

  // const getOverTime = async () => {
  //   const res = await apis.overtimes.getOverTime();
  //   const { status } = res || {};
  //   if (status == 1) {
  //     const { result } = res;
  //     setOverTime(result);
  //     setDataOverTime({
  //       reason: getByPath(result, 'deparmentId'),
  //     });
  //   }
  // };

  // const handleValueChange = (event, key) => {
  //   const { value } = event.target;
  //   setDataOverTime((prevData) => ({
  //     ...prevData,
  //     [key]: value,
  //   }));
  // };
  const handleCreateOvertime = async () => {
    try {
      console.log('dataOverTime', dataOverTime);
      const res = await apis.overtimes.createOvertime(dataOverTime);
      console.log('res', res);

      if (!res) throw new Error('serverError');
      enqueueSnackbar({
        variant: 'success',
        message: t('Them phieu tang ca thanh cong'),
      });
    } catch (error) {
      const { message } = error;
      enqueueSnackbar({
        variant: 'error',
        message: t(message),
      });
    }
  };
  function renderStatus(statusLogChat) {
    if (statusLogChat === OVERTIME_STATUS.PENDING) {
      return <span className="pending">{t('pending')}</span>;
    }

    if (statusLogChat === OVERTIME_STATUS.APPROVED) {
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
    <StyledOverTime>
      <div className="overtime-home">
        <div className="overtime-header">
          <span className="title-overtime">{t('over-time')}</span>
        </div>
        <div className="overtime-container">
          <div className="titile-create">
            <span>{t('create-overtime')}</span>
          </div>
          <div className="create-container">
            <Box sx={{ width: '100%' }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <div className="type-overtime">
                    <div>
                      <span className="title-typeovertime">
                        {t('overtime-type')}
                      </span>
                      <span className="requied">*</span>
                    </div>

                    <div className="select-typeovertime">
                      <FormControl>
                        <Select onChange={handleTypeChange}>
                          {Object.keys(OVERTIME_TYPE).map((key) => (
                            <MenuItem value={OVERTIME_TYPE[key]}>
                              {t(key.toLocaleLowerCase())}
                            </MenuItem>
                          ))}

                          {/* <MenuItem value="overtime ">{t('overtime')}</MenuItem>
                          <MenuItem value="overnight ">
                            {t('over-night')}
                          </MenuItem> */}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="time-overtime">
                    <div>
                      <span className="title-typeovertime">{t('time')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div className="calendar-timeover">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="">
                          <DesktopDatePicker
                            value={data.date}
                            onChange={handleDateChange}
                          />
                        </DemoItem>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="calendar-oclock">
                    <div></div>
                    <div className="time-calendar">
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        className="oclock"
                      >
                        <DemoContainer components={['TimePicker']}>
                          <DemoItem>
                            <DesktopTimePicker ampm={false} />
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
                            <DesktopTimePicker ampm={false} />
                          </DemoItem>
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="person-in-charge">
                    <span>{t('Quan ly phong ban')}</span>
                    <FormControl>
                      <Select
                        value={data.supervisorsId}
                        onChange={handleSupervisorsChange}
                      >
                        {supervisors.map(({ id, name }) => (
                          <MenuItem value={id}>{name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="reason-overtime">
                    <div>
                      <span className="title-reasonovertime">{t('Lý do')}</span>
                      <span className="requied">*</span>
                    </div>
                    <Textarea
                      id="outlined-basic"
                      className="reasonovertime-input"
                      variant="outlined"
                      onChange={handleReasonChange}
                      minRows={3}
                    />
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
                onClick={() => handleCreateOvertime()}
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
        </div>

        <div className="overtime-container">
          <div className="listovertime">
            <div className="icon-listovertime">
              <MenuIcon />
            </div>

            <label className="title-listovertime">{t('overtime-list')}</label>
          </div>
          <div className="table-overtime">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan={2}>{t('no')}</TableCell>
                      <TableCell rowSpan={2}>{t('overtime-type')}</TableCell>
                      <TableCell colSpan={3} align="center">
                        {t('overtime')}
                      </TableCell>
                      <TableCell rowSpan={2}>{t('reason')}</TableCell>
                      <TableCell rowSpan={2}>{t('status')} </TableCell>
                      <TableCell rowSpan={2}>{t('actions')}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ top: 57 }}>{t('date')} </TableCell>
                      <TableCell style={{ top: 57 }}>{t('to')}</TableCell>
                      <TableCell style={{ top: 57 }}>{t('from')}</TableCell>
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
                            if (column.id == ' no') {
                              value = (currentPage - 1) * limit + index + 1;
                            }
                            // if (column.id === 'actions') {
                            //   return (
                            //     <TableCell>
                            //       {actions.map((action) => (
                            //         <IconButton
                            //           className="icon-button"
                            //           onClick={() => action.onClick(item)}
                            //           disabled={
                            //             typeof action.disabled === 'function'
                            //               ? action.disable(item)
                            //               : action.disable
                            //           }
                            //         >
                            //           {typeof action.icon === 'function'
                            //             ? action.icon(item)
                            //             : action.icon}
                            //         </IconButton>
                            //       ))}
                            //     </TableCell>
                            //   );
                            // }

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
    </StyledOverTime>
  );
};

export default OverTime;
