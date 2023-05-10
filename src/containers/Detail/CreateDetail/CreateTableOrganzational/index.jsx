import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledDialog from './index.style';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CreateTableOganizational = ({ open, handleClose }) => {
  const { t } = useTranslation();

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{t('Chọn nhân viên')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
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
          {t('Chọn')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};
export default CreateTableOganizational;
