import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreatDetail from './index.style';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Grid, Box, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const CreateDetail = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <StyledCreatDetail>
      <div className="header-creatdetail">
        <Button onClick={onBack} startIcon={<ArrowBackIcon />}></Button>
        <lable className="title-createdetail"> {t('Phân ca làm việc')}</lable>
        <div className="btt-savecancel">
          <Button
            id="cancel-detail"
            color="primary"
            variant="contained"
            className="detail-cancel"
            startIcon={<CancelIcon />}
          >
            {t('cancel')}
          </Button>

          <Button
            id="save-detail"
            color="primary"
            variant="contained"
            startIcon={<CheckCircleIcon />}
          >
            {t('Áp dụng')}
          </Button>
        </div>
      </div>
      <div className="createdetail-container">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <div className="title-general">
                <label className="general-information">
                  {t(' Thông tin chung')}
                </label>
              </div>
              <div className="grid-createdetail">
                <label className="table-name"> {t(' Tên bảng phân ca')}</label>
                <span className="required">*</span>
                <div className="input-tablename">
                  <TextField type="text"></TextField>
                </div>
              </div>
              <div className="grid-createdetail">
                <label className="select-shift"> {t(' Chọn ca là việc')}</label>
                <span className="required">*</span>
                <div className="input-selectshift">
                  <Select
                    className="select-createdetail"
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
                </div>
              </div>
              <div className="grid-detailselect">
                <label className="select-shift"> {t(' Chọn đơn vị')}</label>
                <span className="required">*</span>
                <div className="deparment">
                  <Select
                    className="select-createdetail"
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
                    <Option value="administrative ">
                      {t('administrative')}
                    </Option>
                    <Option value=" personnel">{t('personnel')}</Option>
                    <Option value=" accounting-department">
                      {t('accounting-department')}
                    </Option>
                    <Option value="business-department">
                      {t('business-department')}
                    </Option>
                    <Option value="marketing-room">
                      {t('marketing-room')}
                    </Option>
                    <Option value="engineering-department">
                      {t('engineering-department')}
                    </Option>
                    <Option value="quality-controldepartment">
                      {t('quality-controldepartment')}
                    </Option>
                  </Select>
                </div>
              </div>
              <div className="startendday-title">
                <label className="title-startend">
                  {t(' Thời gian áp dụng')}
                </label>
              </div>
              <div className="start-endday">
                <Box sx={{ width: '100%' }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={6}>
                      <label className="startday">{t('Ngày bắt đầu')}</label>
                      <span className="required">*</span>
                      <div className="calendar-startendday">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <label className="endday">{t('Ngày kết thúc')}</label>
                      <span className="required">*</span>
                      <div className="calendar-startendday">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <div className="Repeat-detail">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                      <label className="endday">{t('Lặp theo')}</label>
                    </Grid>
                    <Grid xs={6} md={8}></Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
            <Grid xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Box>
      </div>
    </StyledCreatDetail>
  );
};
export default CreateDetail;
