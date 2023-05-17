import React, { useEffect, useState } from 'react';
import StyledGeneral from './index.style';
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

const General = () => {
  const { t } = useTranslation();
  const yesterday = dayjs().subtract(1, 'day');

  const [data, setData] = useState([]);


useEffect(() => {
  setData([
    {
      id: 'id',
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
    label: t('Mã NV'),
    valueName: 'id',
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
    label: t('Tổng công/tháng'),
    valueName: 'salarymonth',
    align: 'left',
  },
  {
    label: t('Vào muộn'),
    valueName: 'inlate',
    align: 'left',
  },
  {
    label: t('Về sớm'),
    valueName: 'outearly',
    align: 'left',
  },
  {
    label: t('Giờ tăng ca'),
    valueName: 'overtime',
    align: 'left',
  },
  {
    label: t('Vắng KP'),
    valueName: 'absent',
    align: 'left',
  },
  {
    label: t('Vắng phép có lương'),
    valueName: 'absentsalary',
    align: 'left',
  },
  {
    label: t('Vắng phép không lương'),
    valueName: 'absentnosalary',
    align: 'left',
  },
  {
    label: t('Nghỉ lễ'),
    valueName: 'holiday',
    align: 'left',
  }
 
 
];
  return (
    <StyledGeneral>
      <div className='general-header'>
        <label className='title-general'>{t('Tổng hợp công tháng')}</label>
      </div>
      <div className='general-container'>
       <div className='calendar-general'>
         <label>{t(' Điều kiện lọc')}</label>
        </div>
        <div className='general-month'>
         <div className='calendar-month'>
          <span className='title-month'>{t('Tháng:')}</span>
          <span className='icon-month'>*</span>
          <div className='date-calendar'>
          <LocalizationProvider dateAdapter={AdapterDayjs} className='datecalendar'>
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
          <div className='button-public'>
          <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Tìm kiếm')}
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
         <span className='title-list'>{t('Bảng tổng công của từng nhân viên trong tháng')}</span>
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
        <div className='table-general'>
        <CustomTable
              heads={heads}
              items={data}
              onChangePagination={onPageChange}
            />

        </div>
      </div>
 
    </StyledGeneral>
  );
};

export default General;
