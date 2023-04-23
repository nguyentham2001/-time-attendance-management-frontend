import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StyledDialog from './index.style';

const CreateAccount = ({ open, handleClose }) => {
  const { t } = useTranslation();

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('manage-user-accounts')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('id')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('username')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('phoneNumber')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('email')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('address')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
              <Grid xs={8}>
                <div className="information-account">
                  <div className="input-account">
                    <label className="lable-account"> {t('role')}</label>
                    <br></br>
                    <TextField
                      id="infor-input"
                      type="text"
                      className="infor-input"
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          id="cancel"
          color="primary"
          variant="contained"
          startIcon={<CancelIcon />}
        >
          {t('cancel')}
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
          id="save"
          color="primary"
          variant="contained"
          startIcon={<CheckCircleIcon />}
        >
          {t('save')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};
export default CreateAccount;
