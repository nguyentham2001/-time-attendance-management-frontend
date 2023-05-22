import React, { useEffect, useState } from 'react';
import StyledDialog from './index.style';
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

const CreatePosition = ({ open, handleClose }) => {
    const { t } = useTranslation();
  
    return (
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="title-create">
          {t('Thêm chức vụ')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <span>{t('Tên chức vụ')}</span>
          <div className='input-createdeparment'>
            <TextField
              id="outlined-basic"
              className="input-create"
              variant="outlined"
             
            />
          </div>
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
  
  export default CreatePosition;