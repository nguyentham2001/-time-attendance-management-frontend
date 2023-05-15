import React from 'react';
import StyledCreateUpdate from './index.style';
import { useTranslation } from 'react-i18next';
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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const CreateUpdate = (onBack) => {
  const { t } = useTranslation();
  const tomorrow = dayjs().add(1, 'day');
  const today = dayjs();
  return (
  <StyledCreateUpdate>
    <div className='createupdate-header'>
    <Button onClick={onBack} startIcon={<ArrowBackIcon />}></Button>
        <lable className="title-createmission">
          {t('Thêm mới đơn đề nghị đi công tác')}
        </lable>
        <div className="button-createupdate">
          <Button
            id="cancel-detail"
            color="primary"
            variant="contained"
            className="mission-cancel"
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
    <div className='createupdate-container'>
    <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className="update-left">
                <div className="regester">
                  <label>{t('Người đề nghị')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-regester"
                  />
                </div>
                <div className="updateworking">
                  <label>{t('Đơn vị công tác')}</label>

                  <TextField
                    id="search-leave"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-unitworkss"
                  />
                </div>

                <div className="updateworking">
                  <label>{t('Ngày đề nghị')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-mission">
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
                <div className="updateworking">
                  <label>{t('Ngày làm việc')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-workingday">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={['DatePicker']}
                    >
                      <DemoItem>
                        <DatePicker
                          defaultValue={today}
                          minDate={tomorrow}
                           views={['year', 'month', 'day']}
                          />
                     </DemoItem>
                   </DemoContainer>
                   </LocalizationProvider>
                  </div>
                </div>
                <div className="updateworking">
                  <label>{t('Ca làm việc')}</label>
                  <span className="reqiued">*</span>
                  <div className="calendar-shift">
                  <TextField
                      id="outlined-number"
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className="updateworking">
                  <label>{t('Giờ vào đầu ca ')}</label>
                  <div className="clockin-shift">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker />
      </DemoContainer>
    </LocalizationProvider>
                  </div>
                </div>
                <div className="updateworking">
                  <label>{t('Giờ ra giữa ca')}</label>
                  
                  <div className="clockout-middle">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker />
      </DemoContainer>
    </LocalizationProvider>
                  </div>
                </div>
                
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="createmission-right">
              <div className="shift-center">
                  <label>{t('Giờ vào giữa ca')}</label>
                 
                  <div className="clockin-middle">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                  <TimePicker />
                      </DemoContainer>
                 </LocalizationProvider>
                  </div>
                  </div>
                <div className="updateworking">
                <label>{t('Giờ ra cuối ca')}</label>
                 
                 <div className="clockout-end">
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={['TimePicker']}>
                 <TimePicker />
                     </DemoContainer>
                </LocalizationProvider>
                 </div>
                </div>
                <div className="updateworking">
                  <label>{t('Lý do công tác')}</label>
                  <span className="reqiued">*</span>
                  <TextField
                    id="search-reason"
                    variant="outlined"
                    placeholder={t('')}
                    type="text"
                    className="input-reason"
                  />
                </div>
                <div className="updateworking">
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
      
                <div className="updateworking">
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
    <div className='createupdate-footer'>
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
              id="not-input"
            />
          </div>
        </div>
        
    </div>

  </StyledCreateUpdate>
  );
};

export default CreateUpdate;