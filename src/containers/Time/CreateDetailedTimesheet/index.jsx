import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StyledDialog from './index.style';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateDetailedTimesheer = ({ open, handleClose }) => {
  const { t } = useTranslation();

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('Thêm bảng chấm công chi tiết')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="grid-time">
              <Grid xs={4}>
                <div>
                  <label className="title-working">
                    {t('Đơn vị công tác')}
                  </label>
                </div>
              </Grid>
              <Grid xs={8}>
                <Select
                  className="select-working"
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
              </Grid>
            </Grid>
            <Grid container spacing={2} className="grid-time">
              <Grid xs={4}>
                <label className="title-working">{t('Vị trí công việc')}</label>
              </Grid>
              <Grid xs={8}>
                <TextField
                  id="input-jobposition"
                  variant="outlined"
                  placeholder={t('')}
                  type="text"
                  className="input-job"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="grid-time">
              <Grid xs={4}>
                <label className="title-working">
                  {t('Tên bảng chấm công')}
                </label>
              </Grid>
              <Grid xs={8}>
                <TextField
                  id="input-jobposition"
                  variant="outlined"
                  placeholder={t('')}
                  type="text"
                  className="input-job"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} className="grid-time">
              <Grid xs={4}>
                <label className="title-working">{t('Thời gian')}</label>
              </Grid>
              <Grid xs={8}>
                <Select
                  className="select-working"
                  placeholder={t('')}
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
                  <Option value="thismonth ">{t('Tháng này')}</Option>
                  <Option value="lastmonth">{t('Tháng trước')}</Option>
                  <Option value="options">{t('Tùy chọn')}</Option>
                </Select>
                <div className="grid-calendar">
                  <Grid container spacing={2} columns={16}>
                    <Grid xs={8}>
                      <div className="calendars">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                    <Grid xs={8}>
                      <div className="calendar-right">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="grid-time">
              <Grid xs={4}>
                <label className="title-working">
                  {t('Hình thức chấm công')}
                </label>
              </Grid>
              <Grid xs={8}>
                <Select
                  className="select-working"
                  placeholder={t('')}
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
                  <Option value="byshift ">{t('Theo ca')}</Option>
                  <Option value="byhours">{t('Theo giờ')}</Option>
                  <Option value="bydate">{t('Theo ngày')}</Option>
                </Select>
              </Grid>
            </Grid>
          </Box>
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
export default CreateDetailedTimesheer;
