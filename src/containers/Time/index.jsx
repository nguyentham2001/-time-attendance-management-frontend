import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledTime from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from 'src/components/CustomTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateDetailedTimesheer from './CreateDetailedTimesheet';
const limit = 10;
const Time = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setData([
      {
        workingdepartment: 'Bộ phận hành chính',
        jobposition: 'Trưởng phòng hành chính',
        timesheetname: 'Bảng chấm công từ ngày 01/04/2023 đến ngày 30/04/2023',
        timetime: 'Tháng này',
        methodoftimekeeping: 'Theo ca',
      },
    ]);
  }, []);
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t('Đơn vị công tác'),
      valueName: 'workingdepartment',
      align: 'left',
    },
    {
      label: t('Vị trí công việc'),
      valueName: 'jobposition',
      align: 'left',
    },
    {
      label: t('Tên bảng chấm công'),
      valueName: 'timesheetname',
      align: 'left',
    },
    {
      label: t('Thời gian '),
      valueName: 'timetime',
      align: 'left',
    },
    {
      label: t('Hình thức chấm công'),
      valueName: 'methodoftimekeeping',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('actions'),
      valueName: 'actions',
      align: 'center',
    },
  ];

  const actions = [
    {
      icon: <EditIcon />,
      onClick: (item) => {},
    },
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: () => {},
    },
  ];

  return (
    <StyledTime>
      <div className="time-home">
        <div className="time-header">
          <label className="time-title">{t('Bảng chấm công chi tiết')}</label>
          <Button
            variant="contained"
            className="time-button"
            color="primary"
            onClick={handleOpenDialog}
            startIcon={<ControlPointIcon />}
          >
            {t('add')}
          </Button>
        </div>
        <div className="time-container">
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
        </div>
        <div className="time-footer">
          <CustomTable
            heads={heads}
            items={data}
            actions={actions}
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
      <CreateDetailedTimesheer open={open} handleClose={handleClose} />
    </StyledTime>
  );
};

export default Time;
