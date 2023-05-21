import React from 'react';
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
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { GENDER } from 'src/constants';
import StyledDialog from './index.style';

const CreateEmployee = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const yesterday = dayjs().subtract(1, 'day');

  const [gender, setGender] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
                  />
                </div>
                <div className="input-account">
                  <span>{t('Giới tính')}</span>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      className="select-gender"
                      value={gender}
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                      <DatePicker
                        defaultValue={yesterday}
                        disablePast
                        views={['year', 'month', 'day']}
                      />
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
                  >
                    <JoyOption value="no-data ">{t('Không có dữ liệu')}</JoyOption>
                  </JoySelect>
                </div>
                <div className="input-account">
                  <div>
                    <span>{t('Ngày làm việc')}</span>
                    <span className="requied">*</span>
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                      <DatePicker
                        defaultValue={yesterday}
                        disablePast
                        views={['year', 'month', 'day']}
                      />
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoItem>
                        <DatePicker
                          defaultValue={yesterday}
                          disablePast
                          views={['year', 'month', 'day']}
                        />
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
                    >
                      <JoyOption value="no-data ">{t('Không có dữ liệu')}</JoyOption>
                    </JoySelect>
                  </div>
                  <div className="input-account">
                    <div>
                      <span>{t('Ngày ký hợp đồng')}</span>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoItem>
                        <DatePicker
                          defaultValue={yesterday}
                          disablePast
                          views={['year', 'month', 'day']}
                        />
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
          onClick={handleClose}
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
