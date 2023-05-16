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
import CustomTable from 'src/components/CustomTable';
import MenuIcon from '@mui/icons-material/Menu';

const PublicDeatail = () => {
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
    label: t('Ngày'),
    valueName: 'day',
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
    label: t('Vào 1'),
    valueName: 'inone',
    align: 'left',
  },
  {
    label: t('Ra 1'),
    valueName: 'outone',
    align: 'left',
  },
  {
    label: t('Vào 2'),
    valueName: 'intwo',
    align: 'left',
  },
  {
    label: t('Ra 2'),
    valueName: 'outtwo',
    align: 'left',
  },
  {
    label: t('Giờ làm việc (giờ)'),
    valueName: 'timework',
    align: 'left',
  },
  {
    label: t('Giờ tăng ca (giờ)'),
    valueName: 'timeover',
    align: 'left',
  },
  {
    label: t('Nghỉ (nếu có)'),
    valueName: 'holiday',
    align: 'left',
  },
  {
    label: t('Vào muộn (phút)'),
    valueName: 'inlate',
    align: 'left',
  },
  {
    label: t('Ra sớm (phút)'),
    valueName: 'outearly',
    align: 'left',
  },
  {
    label: t('Công (ngày)'),
    valueName: 'salary',
    align: 'left',
  },
  {
    label: t('Ghi chú'),
    valueName: 'note',
    align: 'left',
  }
 
];


  return (
  <StyledPublicDetail>
    <div className='public-home'>
      <div className='public-header'>
        <label className='titile-public'>{t('Chi tiết công')}</label>
      </div>
      <div className='public-container'>
        <div className='calendar-public'>
         <label>{t(' Điều kiện lọc')}</label>
        </div>
        <div className='public-detail'>
          <lable className='day-public'>{t('Ngày:')}</lable>
          <div className='calendar-day'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem >
              <DatePicker
                defaultValue={yesterday}
                disablePast
                views={['year', 'month', 'day']}
              />
             </DemoItem>
          </LocalizationProvider>
          <label className='icon-calendar'>~</label>
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
            id='btt-new'
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
        <lable className='title-list'>{t('Báo cáo thời gian làm việc')}</lable>

        </div>
        <div className='table-public'>
      <CustomTable
              heads={heads}
              items={data}
              onChangePagination={onPageChange}
            />

      </div>
      </div>
    
    </div>
  </StyledPublicDetail>
  );
};

export default PublicDeatail;