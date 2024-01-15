import React, { useEffect, useState } from 'react';
import StyledProfile from './index.style';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

import AdjustIcon from '@mui/icons-material/Adjust';
import BlockIcon from '@mui/icons-material/Block';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Select,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import apis from 'src/apis';
import actions from '@src/redux/actions';
import { getByPath } from '@src/utils/object';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GENDER } from 'src/constants';
import { omitIsNil } from '@src/utils/omit';
import { enqueueSnackbar } from 'notistack';
import { useSnackbar } from 'notistack';
const Profile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { avatar } = user || {};

  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});

  const { name } = profile || {};
  const { email } = profile || {};

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const res = await apis.user.getProfile();
    const { status } = res || {};
    if (status == 1) {
      const { result } = res;
      setProfile(result);

      let dateOfBirth = getByPath(result, 'dateOfBirth') || null;
      if (dateOfBirth) {
        dateOfBirth = dayjs(dateOfBirth);
      }

      let issuedOn = getByPath(result, 'issuedOn') || null;
      if (issuedOn) {
        issuedOn = dayjs(issuedOn);
      }

      setData({
        identityNumber: getByPath(result, 'identityNumber'),
        dateOfBirth: dateOfBirth,
        issuedOn: issuedOn,
        bankAccount: getByPath(result, 'bankAccount'),
        bank: getByPath(result, 'bank'),
        education: getByPath(result, 'education'),
        phoneNumber: getByPath(result, 'phoneNumber'),
        gender: getByPath(result, 'gender'),
        address: getByPath(result, 'address'),
        issuedBy: getByPath(result, 'issuedBy'),
      });
    }
  };

  const parseDataUpdate = () => {
    let { dateOfBirth, issuedOn } = data;
    if (dateOfBirth) {
      dateOfBirth = dateOfBirth.toDate();
    }

    if (issuedOn) {
      issuedOn = issuedOn.toDate();
    }

    const newData = {
      ...data,
      dateOfBirth,
      issuedOn,
    };
    omitIsNil(newData, { deep: false });

    return newData;
  };

  const handleUpadateProfile = async () => {
    try {
      const updateData = parseDataUpdate();
      const res = await apis.user.updateProfile(updateData);
      const { status } = res || {};
      if (status == 1) {
        const { result } = res;
        setProfile(result);
        enqueueSnackbar({
          variant: 'success',
          message: t('update-successful'),
        });
      }
    } catch (error) {
      const { message } = error;
      enqueueSnackbar({
        variant: 'error',
        message: t(message),
      });
    }
  };

  const handleUploadAvatar = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append('file', file);

    const resp = await apis.upload.uploadFile({ formData });
    const { status, result } = resp;

    if (status !== 1) {
      return;
    }

    const { link: avatar } = result;
    const resp1 = await apis.user.updateProfile({ avatar });
    const { status: status1, result: user } = resp1;

    if (status1 !== 1) {
      return;
    }

    dispatch(actions.auth.updateUser(user));
  };

  const handleValueChange = (event, key) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleDateChange = (value, key) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

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
                      <span>{t('id')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label=""
                        value={getByPath(profile, 'employeeId')}
                      />
                    </div>
                  </div>
                  <div className="profile-name">
                    <div>
                      <span>{t('name')}</span>
                      <span className="requied">*</span>
                    </div>

                    <TextField id="filled-helperText" value={name || ''} />
                  </div>
                  <div className="profile-birth">
                    <div>
                      <span>{t('dateofBirth')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="">
                          <DesktopDatePicker
                            value={data.dateOfBirth}
                            onChange={(value) =>
                              handleDateChange(value, 'dateOfBirth')
                            }
                          />
                        </DemoItem>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('gender')}</span>
                    <div className="gender-select">
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          className="select-gender"
                          value={data.gender || ''}
                          onChange={(event) =>
                            handleValueChange(event, 'gender')
                          }
                        >
                          {Object.keys(GENDER).map((key) => (
                            <MenuItem value={GENDER[key]}>
                              {t(key.toLocaleLowerCase())}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('department')}</span>
                    <div>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label=""
                        value={getByPath(profile, 'department.name')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {' '}
                              <ExpandMoreIcon edge="end" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="profile-all">
                    <span>{t('position')}</span>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label=""
                      value={getByPath(profile, 'position.name')}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {' '}
                            <ExpandMoreIcon edge="end" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="profile-all">
                  <span>{t('workplace')}</span>
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {' '}
                          <ExpandMoreIcon edge="end" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="profile-account">
                  <div>
                    <span>{t('account')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label=""
                    defaultValue=""
                    value={getByPath(profile, 'account')}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="icon-avatar">
                  <img
                    id="logo-img"
                    src={avatar || '/img/avatar-default.png'}
                    alt="avatar"
                  />
                </div>
                <div className="avatar-file">
                  <input
                    id="send-attachment"
                    type="file"
                    accept="image/*"
                    onChange={handleUploadAvatar}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="profile-idcart">
                  <div>
                    <span>{t('identityNumber')}</span>
                    <span className="requied">*</span>
                  </div>

                  <TextField
                    id="outlined-disabled"
                    label=""
                    value={data.identityNumber || ''}
                    onChange={(event) =>
                      handleValueChange(event, 'identityNumber')
                    }
                  />
                </div>

                <div className="profile-date">
                  <div className="date-range">
                    <div>
                      <span>{t('issuedOn')}</span>
                      <span className="requied">*</span>
                    </div>

                    <div id="calendar-issued" className="calendar-date">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="">
                          <DatePicker
                            Value={data.issuedOn}
                            onChange={(value) =>
                              handleDateChange(value, 'issuedOn')
                            }
                          />
                        </DemoItem>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="issued-by">
                    <div className="title-issued">
                      <span>{t('issuedBy')}</span>
                      <span className="requied">*</span>
                    </div>

                    <TextField
                      className="input-issueBy"
                      value={data.issuedBy || ''}
                      onChange={(value) => handleValueChange(value, 'issuedBy')}
                    />
                  </div>
                </div>
                <div className="profile-bank">
                  <div className="id-bank">
                    <div>
                      <span>{t('idBank')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="textbank"
                      className="text-bank"
                      value={data.bankAccount || ''}
                      onChange={(event) =>
                        handleValueChange(event, 'bankAccount')
                      }
                    />
                  </div>
                  <div className="name-bank" id="nameBank">
                    <div>
                      <span>{t('bank')}</span>
                      <span className="requied">*</span>
                    </div>
                    <div id="select-bank">
                      <FormControl>
                        <Select
                          value={data.bank || ''}
                          onChange={(event) => handleValueChange(event, 'bank')}
                        >
                          <MenuItem value="MB ">
                            {t('Ngân hàng Quân đội')}
                          </MenuItem>
                          <MenuItem value="VCB ">
                            {t('Ngân hàng Ngoại thương Việt Nam')}
                          </MenuItem>
                          <MenuItem value="Agribank ">
                            {t(
                              'Ngân hàng Nông nghiệp và Phát triển Nông thôn VN',
                            )}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="profile-address">
                  <div>
                    <span>{t('address')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="filled-helperText"
                    value={data.address}
                    onChange={(value) => handleValueChange(value, 'address')}
                  />
                </div>
                <div className="profile-country">
                  <div>
                    <span>{t('place-of-origin')}</span>
                  </div>
                  <TextField
                    id="filled-helperText"
                    value={data.address}
                    onChange={(value) => handleValueChange(value, 'address')}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="profile-email">
                  <div>
                    <span>{t('email')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField id="filled-helperText" value={email || ''} />
                </div>
                <div className="profile-phone">
                  <div>
                    <span>{t('phoneNumber')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="filled-helperText"
                    value={data.phoneNumber || ''}
                    onChange={(event) =>
                      handleValueChange(event, 'phoneNumber')
                    }
                  />
                </div>
                <div className="profile-learn">
                  <span>{t('educations')}</span>

                  <TextField
                    id="filled-helperText"
                    value={data.education || ''}
                    onChange={(event) => handleValueChange(event, 'education')}
                  />
                </div>
                <div className="profile-merriage">
                  <span>{t('marriage')}</span>
                  <div id="select-merriage">
                    <FormControl>
                      <Select>
                        <MenuItem value="yes ">{t('có')}</MenuItem>
                        <MenuItem value="no ">{t('không')}</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
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
            onClick={() => handleUpadateProfile()}
          >
            {t('edit')}
          </Button>

          <Button
            variant="contained"
            className="new-button"
            id="btt-new"
            color="primary"
            startIcon={<BlockIcon />}
          >
            {t('refresh')}
          </Button>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
