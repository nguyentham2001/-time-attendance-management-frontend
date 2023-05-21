import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreateRequest from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { REPEAT_TIME } from 'src/constants';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import MenuIcon from '@mui/icons-material/Menu';
const CreateRequest = () => {
    const { t } = useTranslation();
    const [repeatTime, setRepeatTime] = useState(REPEAT_TIME.ALLDAY);
    const handleRepeatTimeChanged = (value) => {
        setRepeatTime(value);
      };
      const yesterday = dayjs().subtract(1, 'day');
  return <StyledCreateRequest>
    <div className='createrequest-home'>
        <span className='title-createrequest'>{t('Tạo đơn xin nghỉ')}</span>
        <div className='createrequest-container'>
            <span className='title-create'>{t('Tạo đơn xin nghỉ')}</span>
            <div className='type-request'>
                <span>{t('Loại đơn nghỉ')}</span>
                <span className='requied'>*</span>
                <div className='select-typerequest'>
                <Select
              className="select-detail"
              placeholder={t('Chọn...')}
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
              <Option value="nosalary ">{t('Nghỉ không lương')}</Option>
              <Option value="online ">{t('Làm online, onsite')}</Option>
              </Select>

                </div>
            </div>
           <Box sx={{ width: '100%' }}>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                     <div className='type-holiday'>
                        <span>{t('Loại nghỉ')}</span>
                        <Select
                           className="select-typeholiday"
                           placeholder={t('Chọn...')}
                           value={repeatTime}
                           onChange={(e, newValue) =>
                             handleRepeatTimeChanged(newValue)
                           }
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
                               {Object.keys(REPEAT_TIME).map((key) => (
                          <Option value={REPEAT_TIME[key]}>{t(key)}</Option>
                        ))}
                        </Select>
                    </div>
                    {repeatTime == REPEAT_TIME.ALLDAY && (
                      <>
                     <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>
                          
                     </div>
                     <div className='time-startend'>
                        <span>{t('Thời gian kết thúc')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-end'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                         </div>
                     </div>
                     <span className='total-day'>
                          {t('Tổng: ')}
                        <strong>
                            <i>0</i>
                        </strong>
                        {t(' ngày')}
                     </span>
                      </>
                    )}
                     {repeatTime == REPEAT_TIME.MORNING && (
                      <>
                     <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>
                          
                     </div>
                      </>
                    )}
                     {repeatTime == REPEAT_TIME.AFTERNOON && (
                      <>
                       <div className='time-startend'>
                        <span>{t('Thời gian bắt đầu')}</span>
                        <span className='requied'>*</span>
                        <div className='calendar-start'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DemoItem >
                                    <DatePicker
                                        defaultValue={yesterday}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>
                          
                     </div>
                      </>
                    )}
                    <div className='reason-work'>
                       <span>{t('Lý do')}</span>
                       <span className='requied'>*</span> 
                       <TextField id="outlined-basic" className='input-reason' variant="outlined" />
                    </div>
                    <div className='reason-work'>
                       <span>{t('Công việc bàn giao')}</span>
                       <TextField id="outlined-basic" className='input-handoverwork' variant="outlined" />
                    </div>
                    </Grid>
                    <Grid xs={6}>
                    <div className='deparment'>
            <span>{t('Phòng ban')}</span>
            <TextField id="outlined-basic" className='deparment-input' variant="outlined" />
          </div>
          <div className='person-in-charge'>
          <span>{t('Người phụ trách phòng')}</span>
          <Select
              className="select-deparment"
              placeholder={t('Chọn...')}
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
              <Option value="no-data ">{t('Không có dữ liệu')}</Option>
             
              </Select>

          </div>
                    </Grid>
       
                </Grid>
            </Box>
            <div className='button-createrequest'>
            <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Tạo đơn')}
          </Button>
          
            <Button
            variant="contained"
            className="new-button"
            id='btt-new'
            color="primary"
            startIcon={<BlockIcon />}
          
          >
            {t('Làm mới')}
          </Button>
 

            </div>
           
            


        </div>
        <div className='createrequest-footer'>
        <div className='icon-list'>
          < MenuIcon/>
          <span className='title-list'>{t('Danh sách đơn')}</span>
          </div>
          <div className='table-createrequest'>

          </div>

        </div>

    </div>
  </StyledCreateRequest>;
};

export default CreateRequest;