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

import { useForm, FormProvider } from 'react-hook-form';

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
      // methods.reset();
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
      bank,
      bankAccount,
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
      bank,
      bankAccount,
    });
  }, [open, user]);

  const handleGenderChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      gender: value,
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

  const handleIssuedOnChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      issuedOn: value,
    }));
  };

  const handleIssuedByChang = (event) => {
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

  const handlebankAccountChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      bankAccount: value,
    }));
  };

  const handlebankChange = (event) => {
    const { value } = event.target;
    console.log('bank', value);
    setData((prevData) => ({
      ...prevData,
      bank: value,
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

  // const methods = useForm();
  // const {
  //   formState: { errors },
  // } = methods;

  // const onSubmit = methods.handleSubmit((data) => {
  //   console.log('data: ', data);
  //   handleCreateUser();
  // });

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
            {/* <FormProvider {...methods}>
              <form onSubmit={(e) => e.preventDefault()} noValidate>
               
              </form>
            </FormProvider> */}

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <div className="input-accountfirst">
                  <div>
                    <span>{t('name')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    // inputRef={methods.register('name', {
                    //   required: true,
                    // })}
                    name="name"
                    variant="outlined"
                    value={data.name}
                    onChange={handleNameChange}
                  />
                  {/* {errors.name && <p>Name is required.</p>} */}
                </div>
                <div className="input-account">
                  <span>{t('gender')}</span>
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
                    <span>{t('issuedOn')}</span>
                    <span className="requied">*</span>
                  </div>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    value={data.issuedOn}
                    onChange={handleIssuedOnChange}
                    // inputRef={methods.register('issuedOn', {
                    //   required: true,
                    // })}
                  >
                    <DemoItem>
                      <DatePicker views={['year', 'month', 'day']} />
                    </DemoItem>
                  </LocalizationProvider>
                  {/* {errors.issuedOn && <p className="validate"> required</p>} */}
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('address')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.address}
                    onChange={handleAddressChange}
                    // inputRef={methods.register('address', {
                    //   required: true,
                    // })}
                  />
                  {/* {errors.address && <p className="validate"> required</p>} */}
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('phoneNumber')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.phoneNumber}
                    onChange={handlePhoneChange}
                    type="tel"
                    // inputRef={methods.register('phoneNumber', {
                    //   required: true,
                    // })}
                  />
                  {/* {errors.phoneNumber && <p className="validate"> required</p>} */}
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('deparment')}</span>
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
                    <span>{t('datestart')}</span>
                    <span className="requied">*</span>
                  </div>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    value={data.workingDate}
                    onChange={handleDateWorkChange}
                    // inputRef={methods.register('workingDate', {
                    //   required: true,
                    // })}
                  >
                    <DemoItem>
                      <DatePicker views={['year', 'month', 'day']} />
                    </DemoItem>
                  </LocalizationProvider>
                  {/* {errors.workingDate && <p className="validate"> required</p>} */}
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('idBank')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    label=""
                    value={data.bankAccount}
                    onChange={handlebankAccountChange}
                    // inputRef={methods.register('bankAccount', {
                    //   required: true,
                    // })}
                  />
                  {/* {errors.bankAccount && <p className="validate"> required</p>} */}
                </div>
                <div className="input-account">
                  <div>
                    <span>{t(' bank')}</span>
                    <span className="requied">*</span>
                  </div>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      className="select-gender"
                      value={data.bank}
                      onChange={handlebankChange}
                      displayEmpty
                      // inputRef={methods.register('bank', {
                      //   required: true,
                      // })}
                    >
                      <MenuItem value="VCB">Ngân hành Vietcombank</MenuItem>
                      <MenuItem value="MB">
                        Ngân hàng quân đội Việt Nam
                      </MenuItem>
                      <MenuItem value="Tech">Ngân hàng Techcombank</MenuItem>
                      <MenuItem value="Agribank">
                        Ngân hàng phát triển nông thôn
                      </MenuItem>
                      <MenuItem value="Viettin">Ngân hàng Viettin</MenuItem>
                    </Select>
                  </FormControl>
                  {/* {errors.bank && <p className="validate"> required</p>} */}
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
                      // inputRef={methods.register('dateOfBirth', {
                      //   required: true,
                      // })}
                    >
                      <DemoItem>
                        <DatePicker views={['year', 'month', 'day']} />
                      </DemoItem>
                    </LocalizationProvider>
                    {/* {errors.dateOfBirth && (
                      <p className="validate"> required</p>
                    )} */}
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('identityNumber')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      value={data.identityNumber}
                      onChange={handleNumberChange}
                      type="tel"
                      // inputRef={methods.register('indentityNumber', {
                      //   required: true,
                      // })}
                    />
                    {/* {errors.indentityNumber && (
                      <p className="validate"> required</p>
                    )} */}
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('issuedBy')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      value={data.issuedBy}
                      onChange={handleIssuedByChang}
                      // inputRef={methods.register('issuedBy', {
                      //   required: true,
                      // })}
                    />
                    {/* {errors.issuedBy && <p className="validate"> required</p>} */}
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('email')}</span>
                      <span className="requied">*</span>
                    </div>
                    <TextField
                      id="outlined-basic"
                      className=""
                      variant="outlined"
                      type="email"
                      value={data.email}
                      onChange={handleEmailChange}
                      // inputRef={methods.register('email', {
                      //   required: true,
                      //   pattern: /\S+@\S+\.\S+/,
                      // })}
                    />
                    {/* {errors.email && errors.email.type === 'required' && (
                      <span className="error-message">
                        This is required field
                      </span>
                    )} */}
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('position')}</span>
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
                      <span>{t('datesign')}</span>
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
                  {/* <div className="input-education">
                  <div>
                    <span>{t('Học vấn')}</span>
                    <span className="requied">*</span>
                  </div>
                  <TextField
                    id="outlined-basic"
                    className=""
                    variant="outlined"
                    value={data.address}
                    onChange={handleAddressChange}
                  />
                </div> */}
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
          // onClick={onSubmit}
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
