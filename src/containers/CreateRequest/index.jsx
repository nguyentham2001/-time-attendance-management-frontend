import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreateRequest from './index.style';
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
import { REPEAT_TIME } from 'src/constants';
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
  { id: 'name5', label: 'Name', minWidth: 170 },
 
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
const CreateRequest = () => {
    const { t } = useTranslation();
    const [repeatTime, setRepeatTime] = useState(REPEAT_TIME.ALLDAY);
    const handleRepeatTimeChanged = (value) => {
        setRepeatTime(value);
      };
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
    
    
  return <StyledCreateRequest>
    <div className='createrequest-home'>
        <span className='title-createrequest'>{t('Tạo đơn xin nghỉ')}</span>
        <div className='createrequest-container'>
            <span className='title-create'>{t('Tạo đơn xin nghỉ')}</span>
            <div className='type-request'>
                <span>{t('Loại đơn nghỉ')}</span>
                <span className='requied'>*</span>
                <div className='select-typerequest'>
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
              <Option value="nosalary ">{t('Nghỉ không lương')}</Option>
              <Option value="online ">{t('Làm online, onsite')}</Option>
              </Select>

                </div>
            </div>
           <Box sx={{ width: '100%' }}>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                     <div className='type-holiday'>
                        <span>{t('Loại nghỉ')}</span>
                        <Select
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
                          <Option value={REPEAT_TIME[key]}>{t(key)}</Option>
                        ))}
                        </Select>
                    </div>
                    {repeatTime == REPEAT_TIME.ALLDAY && (
                      <>
                     <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>
                          
                     </div>
                     <div className='time-startend'>
                        <span>{t('Thời gian kết thúc')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-end'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                         </div>
                     </div>
                     <span className='total-day'>
                          {t('Tổng: ')}
                        <strong>
                            <i>0</i>
                        </strong>
                        {t(' ngày')}
                     </span>
                      </>
                    )}
                     {repeatTime == REPEAT_TIME.MORNING && (
                      <>
                     <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
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
                       <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
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
                    <div className='reason-work'>
                       <span>{t('Lý do')}</span>
                       <span className='requied'>*</span> 
                       <TextField id="outlined-basic" className='input-reason' variant="outlined" />
                    </div>
                    <div className='reason-work'>
                       <span>{t('Công việc bàn giao')}</span>
                       <TextField id="outlined-basic" className='input-handoverwork' variant="outlined" />
                    </div>
                    </Grid>
                    <Grid xs={6}>
                    <div className='deparment'>
            <span>{t('Phòng ban')}</span>
            <TextField id="outlined-basic" className='deparment-input' variant="outlined" />
          </div>
          <div className='person-in-charge'>
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
            <div className='button-createrequest'>
            <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Tạo đơn')}
          </Button>
          
            <Button
            variant="contained"
            className="new-button"
            id='btt-new'
            color="primary"
            startIcon={<BlockIcon />}
          
          >
            {t('Làm mới')}
          </Button>
 

            </div>
           
            


        </div>
        <div className='createrequest-footer'>
        <div className='icon-list'>
          < MenuIcon/>
          <span className='title-list'>{t('Danh sách đơn')}</span>
          </div>
          <div className='table-createrequest'>
        </div>
        <div className='table-createrequest'>
        <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan={2}>STT</TableCell>
                      <TableCell rowSpan={2}>Người phụ trách</TableCell>
                      <TableCell rowSpan={2}>Loại đơn</TableCell>
                      <TableCell colSpan={3} align="center">
                        Thời gian nghỉ
                      </TableCell>
                      <TableCell rowSpan={2}>Lý do</TableCell>
                      <TableCell rowSpan={2}>Bàn giao công việc</TableCell>
                      <TableCell rowSpan={2}>Trạng thái</TableCell>
                      <TableCell rowSpan={2}>Thao tác</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ top: 57 }}>Loại thời gian nghỉ</TableCell>
                      <TableCell style={{ top: 57 }}>Từ ngày</TableCell>
                      <TableCell style={{ top: 57 }}>Đến ngày</TableCell>
                     
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
  </StyledCreateRequest>;
};

export default CreateRequest;