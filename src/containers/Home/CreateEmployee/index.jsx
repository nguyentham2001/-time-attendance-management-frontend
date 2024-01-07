import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Select,
  FormControl,
  MenuItem,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material';

import JoySelect, { selectClasses } from '@mui/joy/Select';
import JoyOption from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { DEFAULT_PASSWORD, GENDER } from 'src/constants';
import StyledDialog from './index.style';
import { useSnackbar } from 'notistack';
import apis from 'src/apis';

const CreateEmployee = ({
  open,
  handleClose,
  handleReloadData,
  departments,
  positions,
  user,
}) => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({});

  useEffect(() => {
    if (!open) {
      setData({});
      return;
    }

    if (!user) return;

    console.log('user: ', user);

    const {
      name,
      phoneNumber,
      email,
      address,
      positionId,
      departmentId,
      dateOfBirth,
      identityNumber,
      issuedOn,
      issuedBy,
      signingDate,
      workingDate,
    } = user;

    setData({
      name,
      phoneNumber,
      email,
      address,
      positionId,
      departmentId,
      dateOfBirth,
      identityNumber,
      issuedOn,
      issuedBy,
      signingDate,
      workingDate,
    });
  }, [open, user]);

  const handleGenderChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      // gender: value,
    }));
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleDateBirthChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      dateOfBirth: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      address: value,
    }));
  };

  const handleNumberChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      identityNumber: value,
    }));
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      signingDate: value,
    }));
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleDateWorkChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      workingDate: value,
    }));
  };

  const handleIssueOnChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      issuedOn: value,
    }));
  };

  const handleIssueByChang = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      issuedBy: value,
    }));
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      email: value,
    }));
  };

  const handleDepartmentChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      departmentId: value,
    }));
  };

  const handlePositionChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      positionId: value,
    }));
  };

  const handleCreateUser = async () => {
    try {
      let res;
      if (!user) {
        res = await apis.user.createUser({
          ...data,
          password: DEFAULT_PASSWORD,
        });
      } else {
        res = await apis.user.updateUser(user.id, data);
      }

      if (!res) throw new Error('serverError');

      enqueueSnackbar({
        variant: 'success',
        message: user
          ? t('Cap nhat nhan vien thanh cong')
          : t('Them nhan vien thanh cong'),
      });

      handleReloadData();
      handleClose();
    } catch (error) {
      const { message } = error;
      enqueueSnackbar({
        variant: 'error',
        message: t(message),
      });
    }
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t('add-employee')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <div className="input-accountfirst">
                  <div>
                    <span>{t('Họ và tên')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="input-account">
                  <span>{t('Giới tính')}</span>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      className="select-gender"
                      value={data.gender}
                      onChange={handleGenderChange}
                      displayEmpty
                    >
                      {Object.keys(GENDER).map((key) => (
                        <MenuItem value={GENDER[key]}>
                          {t(key.toLocaleLowerCase())}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Ngày cấp')}</span>
                    <span className="requied">*</span>
                  </div>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    value={data.issuedBy}
                  >
                    <DemoItem>
                      <DatePicker views={['year', 'month', 'day']} />
                    </DemoItem>
                  </LocalizationProvider>
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Địa chỉ')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.address}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Số điện thoại')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.phoneNumber}
                    onChange={handlePhoneChange}
                    type="tel"
                  />
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Phòng ban')}</span>
                  </div>
                  <JoySelect
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
                    value={data.departmentId}
                    onChange={(e, newValue) => handleDepartmentChange(newValue)}
                  >
                    {departments.map(({ id, name }) => (
                      <JoyOption value={id}>{name}</JoyOption>
                    ))}
                  </JoySelect>
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Ngày làm việc')}</span>
                    <span className="requied">*</span>
                  </div>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    value={data.workingDate}
                    onChange={handleDateWorkChange}
                  >
                    <DemoItem>
                      <DatePicker views={['year', 'month', 'day']} />
                    </DemoItem>
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid xs={6}>
                <div className="employee-right">
                  <div className="input-accountfirst">
                    <div>
                      <span>{t('Ngày sinh')}</span>
                      <span className="requied">*</span>
                    </div>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      value={data.dateOfBirth}
                      onChange={handleDateBirthChange}
                    >
                      <DemoItem>
                        <DatePicker views={['year', 'month', 'day']} />
                      </DemoItem>
                    </LocalizationProvider>
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Số CMND')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      value={data.identityNumber}
                      onChange={handleNumberChange}
                      type="tel"
                    />
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Nơi cấp')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      value={data.issuedOn}
                      onChange={handleIssueOnChange}
                    />
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Email')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      type="email"
                      value={data.email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Chức vụ')}</span>
                    </div>
                    <JoySelect
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
                      value={data.positionId}
                      onChange={(e, newValue) => handlePositionChange(newValue)}
                    >
                      {positions.map(({ id, name }) => (
                        <JoyOption value={id}>{name}</JoyOption>
                      ))}
                    </JoySelect>
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Ngày ký hợp đồng')}</span>
                    </div>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      value={data.signingDate}
                      onChange={handleDateChange}
                    >
                      <DemoItem>
                        <DatePicker views={['year', 'month', 'day']} />
                      </DemoItem>
                    </LocalizationProvider>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          id="cancel"
          onClick={handleClose}
          color="primary"
          variant="contained"
          startIcon={<CancelIcon />}
        >
          {t('cancel')}
        </Button>
        <Button
          id="save"
          onClick={handleCreateUser}
          color="primary"
          variant="contained"
          startIcon={<CheckCircleIcon />}
          autoFocus
        >
          {t('save')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default CreateEmployee;
