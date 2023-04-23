import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledTimesheetData from './index.style';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import CustomTable from 'src/components/CustomTable';

const limit = 10;
const TimesheetData = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setData([
      {
        employeeid: 123,
        name: 'Nguyễn Văn A',
        jobpossition: 'Trưởng phòng hành chính',
        workingdepartment: 'Bộ phận hành chính',
      },
    ]);
  }, []);
  const onPageChange = (page) => {
    console.log('page', page);
  };
  const heads = [
    {
      label: t('Mã nhân viên'),
      valueName: 'employeeid',
      align: 'left',
    },
    {
      label: t('Họ và tên'),
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('Vị trí công việc'),
      valueName: 'jobpossition',
      align: 'left',
    },
    {
      label: t('Đơn vị công tác '),
      valueName: 'workingdepartment',
      align: 'left',
    },
    {
      label: t('Ngày chấm công'),
      valueName: 'timekeepingdate',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Giờ chấm công'),
      valueName: 'timekeepinghours',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Địa điểm làm việc'),
      valueName: 'worklocation',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Tọa độ GPS'),
      valueName: 'gps',
      align: 'left',
      minWidth: 100,
    },
  ];

  return (
    <StyledTimesheetData>
      <div className="timesheetdata-home">
        <div className="timersheetdata-header">
          <label className="timesheet-title">{t('Dữ liệu chấm công')}</label>
          <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>
        <div className="timsheetdata-container">
          <div className="search-left">
            <TextField
              id="search-time"
              variant="outlined"
              placeholder={t('search-nabar')}
              type="text"
              className="input-time"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Select
              className="select-timesheet"
              placeholder={t('names-of-units')}
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
              <Option value="administrative ">{t('administrative')}</Option>
              <Option value=" personnel">{t('personnel')}</Option>
              <Option value=" accounting-department">
                {t('accounting-department')}
              </Option>
              <Option value="business-department">
                {t('business-department')}
              </Option>
              <Option value="marketing-room">{t('marketing-room')}</Option>
              <Option value="engineering-department">
                {t('engineering-department')}
              </Option>
              <Option value="quality-controldepartment">
                {t('quality-controldepartment')}
              </Option>
            </Select>
          </div>
        </div>
        <div className="timesheet-footer">
          <CustomTable
            heads={heads}
            items={data}
            pagination={{
              page: currentPage,
              totalPages: Math.ceil(total / limit),
              limit: limit,
              total: total,
            }}
            onChangePagination={onPageChange}
          />
        </div>
      </div>
    </StyledTimesheetData>
  );
};

export default TimesheetData;
