import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreateLeave from './index.style';
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
const CreateLeave = ({ onBack }) => {
  const { t } = useTranslation();
  const tomorrow = dayjs().add(1, 'day');
  return (
    <StyledCreateLeave>
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
                  <label>{t('Từ ngày')}</label>
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
                  <label>{t('Đến ngày')}</label>
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
                <div className="number-holiday">
                  <label>{t('Số ngày nghỉ')}</label>
                  <div className="text-holiday">
                    <TextField
                      id="outlined-number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className="type-holiday">
                  <label>{t('Loại nghỉ')}</label>
                  <span className="reqiued">*</span>
                  <div className="select-type">
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
                      <Option value="leave">{t('Nghỉ phép')}</Option>
                      <Option value="nosalary">{t('Nghỉ không lương')}</Option>
                      <Option value="married">{t('Nghỉ kết hôn')}</Option>
                      <Option value="childmarried">
                        {t('Nghỉ con kết hôn')}
                      </Option>
                      <Option value="funeral">{t('Nghỉ ma chay')}</Option>
                      <Option value="regime">
                        {t('Nghỉ hưởng chế độ BHXH')}
                      </Option>
                      <Option value="maternity">{t('Nghỉ thay sản')}</Option>
                      <Option value="compensatory">{t('Nghỉ bù')}</Option>
                    </Select>
                  </div>
                </div>
                <div className="salary-rate">
                  <label>{t('Tỷ lệ hưởng lương (%)')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-salaryrate"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="createleave-right">
                <div className="use-holiday">
                  <label>{t('Số NP được sử dụng')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-useholiday"
                  />
                </div>
                <div className="used-holiday">
                  <label>{t('Số NP đã nghỉ')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-usedholiday"
                  />
                </div>
                <div className="remainingleave">
                  <label>{t('Số NP còn lại')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-remaining"
                  />
                </div>
                <div className="reason">
                  <label>{t('Lý do')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="inputreason"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-reason"
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
                <div className="substitute">
                  <label>{t('Người thay thế')}</label>

                  <TextField
                    id="inputsubstitute"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-substitute"
                  />
                </div>
                <div className="peopleinvolved">
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
              id="note-input"
              variant="outlined"
              placeholder={t('Nhập ghi chú')}
              type="text"
              className="inputnote"
            />
          </div>
        </div>
      </div>
    </StyledCreateLeave>
  );
};

export default CreateLeave;
