import React, { useEffect, useState } from 'react';
import StyledGeneral from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from 'src/components/CustomTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const limit = 10;
const General = () => {
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
    <StyledGeneral>
      <div className="general-home">
        <div className="general-header">
          <lable className="general-title">
            {t(' Bảng chấm công tổng hợp')}
          </lable>
          <Button
            variant="contained"
            className="general-button"
            color="primary"
            // onClick={handleOpenDialog}
            startIcon={<ControlPointIcon />}
          >
            {t('add')}
          </Button>
        </div>
        <div className="general-container">
          <TextField
            id="search-general"
            variant="outlined"
            placeholder={t('search-nabar')}
            type="text"
            className="input-general"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="general-footer">
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
    </StyledGeneral>
  );
};

export default General;
