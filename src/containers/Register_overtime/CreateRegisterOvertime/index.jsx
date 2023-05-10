import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreateRegisterOvertime from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CreateRegisterOvertime = ({ onBack }) => {
  const { t } = useTranslation();
  const tomorrow = dayjs().add(1, 'day');
  return (
    <StyledCreateRegisterOvertime>
      <div className="createleave-header">
        <Button onClick={onBack} startIcon={<ArrowBackIcon />}></Button>
        <lable className="title-createleave">
          {' '}
          {t('Thêm mới đơn xin nghỉ')}
        </lable>
        <div className="button-leave">
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
            {t('Lưu')}
          </Button>
        </div>
      </div>
      <div className="createleave-container">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className="leave-left">
                <div className="applicants">
                  <label>{t('Người nộp đơn')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-applicants"
                  />
                </div>
                <div className="unitworks">
                  <label>{t('Đơn vị công tác')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-unitworkss"
                  />
                </div>

                <div className="single-day">
                  <label>{t('Ngày nộp đơn')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-leave">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                          <DateTimePicker
                            defaultValue={tomorrow}
                            disableFuture
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="today">
                  <label>{t('Làm thêm từ')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-today">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                          <DateTimePicker
                            defaultValue={tomorrow}
                            disableFuture
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="fromday">
                  <label>{t('Nghỉ giữa ca từ')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-fromday">
                    <LocalizationProvider dateAdapter={AdapterDayjs} className>
                      <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                          <DateTimePicker
                            defaultValue={tomorrow}
                            disableFuture
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="leavefrom">
                  <label>{t('Nghỉ giữa ca đến ')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-fromday">
                    <LocalizationProvider dateAdapter={AdapterDayjs} className>
                      <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                          <DateTimePicker
                            defaultValue={tomorrow}
                            disableFuture
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="from-ot">
                  <label>{t('Làm thêm đến')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-fromday">
                    <LocalizationProvider dateAdapter={AdapterDayjs} className>
                      <DemoContainer components={['DateTimePicker']}>
                        <DemoItem>
                          <DateTimePicker
                            defaultValue={tomorrow}
                            disableFuture
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="applicable-case">
                  <label>{t('Ca áp dụng')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-case"
                  />
                </div>
                <div className="reason">
                  <label>{t('Lý do')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="search-reason"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-reason"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="createleave-right">
                <div className="late-coming">
                  <label>{t('Đi muộn đầu ca (phút)')}</label>

                  <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-latecoming"
                  />
                </div>
                <div className="early-leaving">
                  <label>{t('Về sớm giữa ca (phút)')}</label>
                  <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-earlyleaving"
                  />
                </div>
                <div className="late-center">
                  <label>{t('Đi muộn giữa ca (phút)')}</label>
                  <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-latecenter"
                  />
                </div>
                <div className="early-leaving">
                  <label>{t('Về sớm cuối ca (phút)')}</label>

                  <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-earlycenter"
                  />
                </div>
                <div className="approved">
                  <label>{t('Người duyệt')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="input-approved"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="inputapproved"
                  />
                </div>
                <div className="approved">
                  <label>{t('Người thay thế')}</label>

                  <TextField
                    id="inputsubstitute"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-substitute"
                  />
                </div>
                <div className="approved">
                  <label>{t('Người liên quan')}</label>

                  <TextField
                    id="inputreason"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-peopleinvolved"
                  />
                </div>
                <div className="status-leave">
                  <label>{t('Trạng thái')}</label>
                  <span className="reqiued">*</span>
                  <div className="select-status">
                    <Select
                      className="select"
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
                      <Option value="pending">{t('Chờ duyệt')}</Option>
                      <Option value="approved">{t('Đã duyệt')}</Option>
                      <Option value="refuse">{t('Từ chối')}</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="createleave-footer">
        <lable className="titile-note">{t('Ghi chú')}</lable>
        <div className="not-createleave">
          <div className="icon-note" id="note-icon">
            <AccountCircleIcon />
          </div>
          <div className="input-note">
            <TextField
              placeholder={t('Nhập ghi chú')}
              type="text"
              className="inputnote"
            />
          </div>
        </div>
      </div>
    </StyledCreateRegisterOvertime>
  );
};

export default CreateRegisterOvertime;
