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
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { GENDER } from 'src/constants';
import StyledDialog from './index.style';

const CreateEmployee = ({ open, handleClose }) => {
  const { t } = useTranslation();

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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('id')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('name')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('birth')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <label className="lable-infor"> {t('gender')}</label>
                  <br></br>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      className="select-gender"
                      value={gender}
                      onChange={handleGenderChange}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>----</em>
                      </MenuItem>
                      {Object.keys(GENDER).map((key) => (
                        <MenuItem value={GENDER[key]}>
                          {t(key.toLocaleLowerCase())}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('CMND')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('date-range')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('issued-by')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('address')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('phoneNumber')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('email')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('position')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('department')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('datesign')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-employee">
                  <div className="input-information">
                    <label className="lable-infor"> {t('datestart')}</label>
                    <br></br>
                    <TextField type="text" className="infor-input" />
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
