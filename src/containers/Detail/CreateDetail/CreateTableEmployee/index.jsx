import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StyledDialog from './index.style';
import SearchIcon from '@mui/icons-material/Search';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CustomTable from 'src/components/CustomTable';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const CreateTableEmployee = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 'id',
        username: 'username',
        phoneNumber: 'phoneNumber',
        email: 'email',
      },
    ]);
  }, []);

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t(''),
      valueName: 'actions',
      align: 'center',
      minwidth: 100,
    },
    {
      label: t('id'),
      valueName: 'id',
      align: 'left',
      width: 300,
    },
    {
      label: t('name'),
      valueName: 'name',
      align: 'left',
      width: 300,
    },
    {
      label: t('Đơn vị công tác'),
      valueName: 'workunit',
      align: 'left',
    },
    {
      label: t('Vị trí công việc'),
      valueName: 'position',
      align: 'left',
    },
    {
      label: t('phoneNumber'),
      valueName: 'phoneNumber',
      align: 'left',
    },
    {
      label: t('email'),
      valueName: 'email',
      align: 'left',
      minWidth: 100,
    },
  ];

  const actions = [
    {
      icon: <CheckBoxOutlineBlankIcon className="checkbox-icon" />,
      onClick: () => {},
    },
  ];
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t('Chọn nhân viên')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div className="selectemployee">
            <TextField
              id="search-account"
              variant="outlined"
              placeholder={t('search-nabar')}
              type="text"
              className="input-account"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div className="select-unit">
              <Select
                className="select-employee"
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
          <div className="table-selectemployee">
            <CustomTable
              heads={heads}
              items={data}
              actions={actions}
              onChangePagination={onPageChange}
            />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          id="cancel"
          color="primary"
          variant="contained"
          startIcon={<CancelIcon />}
        >
          {t('cancel')}
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
          id="save"
          color="primary"
          variant="contained"
          startIcon={<CheckCircleIcon />}
        >
          {t('Chọn')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};
export default CreateTableEmployee;
