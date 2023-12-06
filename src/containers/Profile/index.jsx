import React from 'react';
import StyledProfile from './index.style';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField } from '@mui/material';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <StyledProfile>
      <div className="profile-home">
        <div className="profile-header">
          <span className="title-profile">{t('Thông tin nhân viên')}</span>
        </div>
        <div className="profile-container">
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div className="profile-left">
                  <div className="profile-id">
                    <div>
                      <span>{t('Mã nhân viên')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label=""
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="profile-name">
                    <div>
                      <span>{t('Tên nhân viên')}</span>
                      <span className="requied">*</span>
                    </div>

                    <TextField id="filled-helperText" />
                  </div>
                  <div className="profile-birth">
                    <div>
                      <span>{t('Ngày sinh')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="">
                          <DesktopDatePicker
                            defaultValue={dayjs('2022-04-17')}
                          />
                        </DemoItem>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('Giới tính')}</span>
                    <div className="gender-select">
                      <Select
                        className="select-detail"
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
                        <Option value="boy ">{t('Nam')}</Option>
                        <Option value="girl ">{t('Nữ')}</Option>
                        <Option value="diffirent ">{t('Khác')}</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('Phòng ban')}</span>
                    <div className="deparment-select">
                      <Select
                        disabled
                        className="select-detail"
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
                      ></Select>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('Chức vụ')}</span>
                    <div className="profile-select">
                      <Select
                        disabled
                        className="select-detail"
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
                      ></Select>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('Nơi làm việc')}</span>
                    <div className="workplace-select">
                      <Select
                        disabled
                        className="select-detail"
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
                      ></Select>
                    </div>
                  </div>
                  <div className="profile-account">
                    <div>
                      <span>{t('Tên tài khoản')}</span>
                      <span className="requied">*</span>
                    </div>

                    <TextField
                      disabled
                      id="outlined-disabled"
                      label=""
                      defaultValue=""
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="icon-avatar">
                  <img
                    id="logo-img"
                    src="/img/avatar-default.png"
                    alt="avatar"
                  />
                </div>
                <div className="avatar-file">
                  <Button variant="contained">{t('Choose file')}</Button>
                  <Button className="no-file" variant="text">
                    {t('No file chosen')}
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="profile-idcart">
                  <div>
                    <span>{t('Số CCCD')}</span>
                    <span className="requied">*</span>
                  </div>

                  <TextField id="outlined-disabled" label="" defaultValue="" />
                </div>
                <div className="profile-date">
                  <div className="date-range">
                    <div>
                      <span>{t('Ngày cấp')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div id="calendar-issued" className="calendar-date">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="">
                          <DatePicker defaultValue={dayjs('2022-04-17')} />
                        </DemoItem>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="issued-by">
                    <div className="title-issued">
                      <span>{t('Nơi cấp')}</span>
                      <span className="requied">*</span>
                    </div>

                    <TextField id="text-isued" />
                  </div>
                </div>
                <div className="profile-bank">
                  <div className="id-bank">
                    <div>
                      <span>{t('Số tài khoản')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField id="text-bank" />
                  </div>
                  <div className="name-bank">
                    <div>
                      <span>{t('Ngân hàng')}</span>
                      <span className="requied">*</span>
                    </div>
                    <div id="select-bank">
                      <Select
                        className="select-detail"
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
                        <Option value="MB ">{t('Ngân hàng Quân đội')}</Option>

                        <Option value="VCB ">
                          {t('Ngân hàng Ngoại thương Việt Nam')}
                        </Option>

                        <Option value="Agribank ">
                          {t(
                            'Ngân hàng Nông nghiệp và Phát triển Nông thôn VN',
                          )}
                        </Option>

                        <Option value="BIDV ">
                          {t('Đầu tư và Phát triển Việt Nam')}
                        </Option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="profile-address">
                  <div>
                    <span>{t('Địa chỉ')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField id="filled-helperText" />
                </div>
                <div className="profile-country">
                  <div>
                    <span>{t('Quê quán')}</span>
                  </div>
                  <TextField id="filled-helperText" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="profile-email">
                  <div>
                    <span>{t('Email')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField id="filled-helperText" />
                </div>
                <div className="profile-phone">
                  <div>
                    <span>{t('Số điện thoại')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField id="filled-helperText" />
                </div>
                <div className="profile-learn">
                  <span>{t('Học vấn')}</span>

                  <TextField id="filled-helperText" />
                </div>
                <div className="profile-merriage">
                  <span>{t('Hôn nhân')}</span>
                  <Select
                    className="select-detail"
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
                    <Option value="yes ">{t('Có')}</Option>
                    <Option value="no ">{t('Không')}</Option>
                  </Select>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="profile-footer">
          <Button
            variant="contained"
            className="search-button"
            id="btt-search"
            color="primary"
            startIcon={<AdjustIcon />}
          >
            {t('Chỉnh sửa')}
          </Button>

          <Button
            variant="contained"
            className="new-button"
            id="btt-new"
            color="primary"
            startIcon={<BlockIcon />}
          >
            {t('Làm mới')}
          </Button>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
