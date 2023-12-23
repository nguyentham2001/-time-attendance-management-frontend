import React from 'react';
import { useTranslation } from 'react-i18next';
import StyleDialog from './index.style';
import {
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Dialog_salary13 = ({ open, handleClose }) => {
  const { t } = useTranslation();
  return (
    <StyleDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div className="note-salary13">
            <div className="title-salary13">
              {t('Công thức tính lương tháng 13')}
            </div>
            <img id="img-salary13" src={'/img/rule_salary13.png'} alt="" />
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
          {t('Đóng')}
        </Button>
      </DialogActions>
    </StyleDialog>
  );
};

export default Dialog_salary13;
