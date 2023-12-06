import React from 'react';
import { useTranslation } from 'react-i18next';
import StyleDialog from './index.style';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CreateTyepLeave = (open, handleClose) => {
  const { t } = useTranslation();
  return (
    <StyleDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className="titile-typeleave">
        {t('Thêm loại đơn xin nghỉ')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span>{t('Tên loại đơn xin nghỉ')}</span>
          <div className="input-createdeparment">
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
    </StyleDialog>
  );
};

export default CreateTyepLeave;
