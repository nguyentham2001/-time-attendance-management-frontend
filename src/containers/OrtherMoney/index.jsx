import React, { useEffect, useState }  from 'react';
import StyledOrtherMoney from './index.style';
import { useTranslation } from 'react-i18next';
import { Button} from '@mui/material';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AdjustIcon from '@mui/icons-material/Adjust';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
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
  };
}
const rows = [
  createData('India', 'IN', 1324171354,),
  createData('China', 'CN', 1403500365),
  createData('Italy', 'IT', 60483973),
  createData('United States', 'US', 327167434),
  createData('Canada', 'CA', 37602103),
  createData('Australia', 'AU', 2547540),
  createData('Germany', 'DE', 83019200),
  createData('Ireland', 'IE', 4857000),
  createData('Ireland', 'IE', 4857000),
];


const OrtherMoney = () => {
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


  
    
  return <StyledOrtherMoney>
    <div className='orthermoney-home'>
        <lable className='title-orthermoney'>{t('Tiền thưởng/phạt')}</lable>
        <div className='orthermoney-container'>
        <div className='condition'>
          <label className='tittle-condition'>{t('Điều kiện lọc dữ liệu')}</label>
        </div>
        <div className='month'>
        <div className='calendar-month'>
        <span className='title-month'>{t('Tháng:')}</span>
        <span className='requied'>*</span>
        <div className='calendars'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem >
              <DatePicker
                defaultValue={yesterday}
                disablePast
                views={['year', 'month']}
              />
             </DemoItem>
          </LocalizationProvider>
        </div>
       
        </div>
        <div className='type-money'>
        <label className='title-month'>{t('Loại tiền:')}</label>
        <span className='requied'>*</span>
        <div className='select-typemoney'>
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
              <Option value="all ">{t('Tất cả')}</Option>
              <Option value="twonine ">{t('Thường 2/9')}</Option>
              <Option value="thirty-four ">{t('Thưởng 30/4-1/5')}</Option>
              <Option value="newyear ">{t('Thưởng tết âm lịch')}</Option>
              <Option value="new-year ">{t('Thưởng tết dương lịch')}</Option>
              <Option value="salary13 ">{t('Thưởng lương tháng 13')}</Option>
              <Option value="eightthirt ">{t('Thưởng 8/3')}</Option>
              <Option value=" twenlty-ten">{t('Thưởng 20/10')}</Option>
              <Option value="chirld ">{t('Thưởng 1/6')}</Option>
              <Option value="diligence">{t('Thưởng chuyên cần')}</Option>
              <Option value="other ">{t('Thưởng khác')}</Option>
              <Option value="diligent-penalty ">{t('Phạt chuyên cần')}</Option>
              <Option value="other-penalty ">{t('Phạt khác')}</Option>
              <Option value="salary-advance">{t('Tạm ứng lương')}</Option>
              <Option value="salary-compensation">{t('Bù lương')}</Option>

              
            </Select>

        </div>
        </div>
        <div className='button-month'>
        <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Tìm kiếm')}
          </Button>
        </div>
        </div> 
        <div className='icon-listmenu'>
          <div className='icon-list'>
         < MenuIcon/>
         <span className='title-list'>{t('Danh sách thưởng phạt của của nhân viê trong tháng này ')}</span>
          </div>
        
        <div className='export-file'>
        <Button
          variant="outlined"
            className="export-button"
            id='btt-export'
            color="primary"
            startIcon={<ArrowDownwardIcon />}
          
          >
            {t('Xuất dữ liệu')}
          </Button>

        </div>

        </div>
        <div className='table-salary13'>
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Tài khoản</TableCell>
                    <TableCell>Ngày áp dụng</TableCell>
                    <TableCell>Số tiền</TableCell>
                    <TableCell>Loại tiền</TableCell>
                    <TableCell>Ghi chú</TableCell>
                    
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

    </div>

  </StyledOrtherMoney>;
};

export default OrtherMoney;