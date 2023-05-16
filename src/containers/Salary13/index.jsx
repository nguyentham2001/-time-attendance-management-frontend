import React, { useEffect, useState }  from 'react';
import StyledSalary13 from './index.style';
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

const Salary13 = () => {
  const { t } = useTranslation();
  const yesterday = dayjs().subtract(1, 'day');

  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData([
      {
      
        name: 'Nguyễn Văn A',
      },
    ]);
  }, []);
  
  const onPageChange = (page) => {
    console.log('page', page);
  };
  
  const heads = [
    {
      label: t('STT'),
      valueName: 'no',
      align: 'left',
    },
    {
      label: t('Tài khoản'),
      valueName: 'account',
      align: 'left',
    },
    {
      label: t('Tên'),
      valueName: 'name',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Phòng ban'),
      valueName: 'department',
      align: 'left',
    },
    {
      label: t('Chức vụ'),
      valueName: 'position',
      align: 'left',
    },
    {
      label: t('Ngày bắt đầu làm việc'),
      valueName: 'startday',
      align: 'left',
    },
    {
      label: t('Số tháng hưởng lương'),
      valueName: 'numbersalarymonth',
      align: 'left',
    },
    {
      label: t('Lương trung bình năm'),
      valueName: 'salaryyears',
      align: 'left',
    },
    {
      label: t('Lương tháng 13'),
      valueName: 'salary13',
      align: 'left',
    }
   
   
  ];
  return (
  <StyledSalary13>
    <div className='salary13-home'>
      <div className='salary13-header'>
        <label>{t('Lương tháng 13')}</label>
      </div>
      <div className='salary13-container'>
          <label className='tittle-calendar'>{t('Điều kiện lọc')}</label>
          <div className='calendars-years'>
          <lable className='title-month'>{t('Tháng:')}</lable>
          <span className='icon-month'>*</span>
          <div className='calendar-month'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem >
                <DatePicker
                defaultValue={yesterday}
                disablePast
                views={['year']}
                />
              </DemoItem>
            </LocalizationProvider>
          </div>
          <div className='button-salary13'>
          <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Xuất lương')}
          </Button>

          <Button
            variant="contained"
            className="new-button"
            id='btt-create'
            color="primary"
            startIcon={<BlockIcon />}
          
          >
            {t('Làm mới')}
          </Button>

          </div>

          </div>
          <div className='icon-listmenu'>
          <div className='icon-list'>
         < MenuIcon/>
          </div>
        <lable className='title-list'>{t('Bảng lương tháng 13 theo năm ')}</lable>
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
        <CustomTable
              heads={heads}
              items={data}
              onChangePagination={onPageChange}
            />

        </div>
        

      </div>

    </div>
  </StyledSalary13>
  );
};

export default Salary13;