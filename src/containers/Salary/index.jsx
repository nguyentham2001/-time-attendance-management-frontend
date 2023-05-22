import React from 'react';
import StyledSalary from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import CustomTable from 'src/components/CustomTable';
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
  { id: 'name8', label: 'Name', minWidth: 170 },
  { id: 'name9', label: 'Name', minWidth: 170 },
  { id: 'name10', label: 'Name', minWidth: 170 },
  { id: 'name11', label: 'Name', minWidth: 170 },
  { id: 'name12', label: 'Name', minWidth: 170 },
  { id: 'name13', label: 'Name', minWidth: 170 },
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
    name13: '1',
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

const Salary = () => {
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
    <StyledSalary>
      <div className="salary-home">
        <div className="salary-header">
          <label className="title-salary">{t('Lương tháng')}</label>
        </div>
        <div className="salary-container">
          <div className="condition">
            <label className="tittle-condition">{t('Điều kiện lọc')}</label>
          </div>
          <div className="month">
           
            <div className="calendar-month">
            <span className="title-month">{t('Tháng:')}</span>
            <span className="requied">*</span>
            <div className='calendars'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DatePicker
                    defaultValue={yesterday}
                    disablePast
                    views={['year', 'month']}
                  />
                </DemoItem>
              </LocalizationProvider>
            </div>
              
            </div>
            <div className="button-month">
              <Button
                variant="contained"
                className="search-button"
                id="btt-search"
                color="primary"
                startIcon={<AdjustIcon />}
              >
                {t('Xuất lương')}
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
          <div className="icon-salary">
            <div className="icon-list">
              <MenuIcon />
              <span className="title-list">{t('Bảng lương tháng')}</span>
            </div>
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
          <div className="table-salary">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell rowSpan={2}>STT</TableCell>
                      <TableCell rowSpan={2}>Account</TableCell>
                      <TableCell rowSpan={2}>Tên</TableCell>
                      <TableCell rowSpan={2}>Phòng ban</TableCell>
                      <TableCell rowSpan={2}>Lương cơ bản</TableCell>
                      <TableCell rowSpan={2}>Tổng công/Tháng</TableCell>
                      <TableCell rowSpan={2}>Lương tháng (1)</TableCell>
                      <TableCell rowSpan={2}>
                        Lương nghỉ phép + Nghỉ lễ (2)
                      </TableCell>
                      <TableCell rowSpan={2}>Lương thêm giờ (3)</TableCell>
                      <TableCell colSpan={5} align="center">
                        Phụ cấp
                      </TableCell>
                      <TableCell rowSpan={2}>Lương tạm ứng (5)</TableCell>
                      <TableCell rowSpan={2}>Tổng thưởng (6)</TableCell>
                      <TableCell rowSpan={2}>Tổng khấu trừ (7)</TableCell>
                      <TableCell rowSpan={2}>
                        Lương thực lĩnh 1+2+3+4-5+6-7
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ top: 57 }}>Phụ cấp ăn</TableCell>
                      <TableCell style={{ top: 57 }}>Điện thoại</TableCell>
                      <TableCell style={{ top: 57 }}>Xăng xe</TableCell>
                      <TableCell style={{ top: 57 }}>Trách nhiệm</TableCell>
                      <TableCell style={{ top: 57 }}>
                        Tổng Phụ cấp (4)
                      </TableCell>
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
    </StyledSalary>
  );
};

export default Salary;
