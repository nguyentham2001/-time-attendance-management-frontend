import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StyledDialog from './index.style';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomTable from 'src/components/CustomTable';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const CreateHoliday = ({ open, handleClose }) => {
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
      label: t('Tên nghỉ lễ'),
      valueName: 'nameholiday',
      align: 'left',
      width: 300,
    },
    {
      label: t('Thời gian'),
      valueName: 'timeholiday',
      align: 'left',
      width: 300,
    },
    {
      label: t('Đối tượng áp dụng'),
      valueName: 'applicableobject',
      align: 'left',
    },
    {
      label: t('Hệ số'),
      valueName: 'actions',
      align: 'center',
      minwidth: 100,
    },
  ];

  const actions = [
    {
      icon: <CheckBoxOutlineBlankIcon className="checkbox-icon" />,
      onClick: () => {},
    },
    // {
    //     <TextField
    //       id="outlined-number"
    //       label="Number"
    //       type="number"
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //     />
    // },
  ];
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('Thiết lập hệ số công cho từng ngày lễ')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div className="holiday-container">
            <div className="holiday-onclick">
              <Button className="before" startIcon={<ArrowBackIcon />} />
              <Button className="after" startIcon={<ArrowForwardIcon />} />
            </div>
            <div className="calendar-year">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker views={['year']} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="table-holiday">
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
          {t('save')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};
export default CreateHoliday;
