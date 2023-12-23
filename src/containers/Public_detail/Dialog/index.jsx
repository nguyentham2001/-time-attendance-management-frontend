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

const Dialog = ({ open, handleClose }) => {
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
          <div className="rules-header">
            <div className="color-error">{t('Màu vi phạm')}</div>
            <div className="color">
              <div className="blue"></div>
              <span className="early-late">{t('Đi muộn/về sớm 1-5 phút')}</span>
            </div>
            <div className="color">
              <div className="yellow"></div>
              <span className="early-late">
                {t('Đi muộn/về sớm 6-15 phút')}
              </span>
            </div>
            <div className="color">
              <div className="red"></div>
              <span className="early-late">
                {t('Đi muộn/về sớm hơn 15 phút')}
              </span>
            </div>
          </div>
          <div className="rules-fooer">
            <div className="color-error">
              {t('Nội quy vi phạm đi sớm/về muộn')}
            </div>
            <div className="list-rules">
              {t('Đi muộn/về sớm 5 lần từ 1-5 phút phạt 50% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {t('Đi muộn/về sớm 6 lần từ 1-5 phút phạt 70% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {t('Đi muộn/về sớm 7 lần từ 1-5 phút phạt 100% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {t('Đi muộn/về sớm 8 lần từ 1-5 phút phạt 200% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              ---------------------------------------
            </div>
            <div className="list-rules">
              {' '}
              {t('Đi muộn/về sớm 3 lần từ 6-15 phút phạt 50% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {' '}
              {t('Đi muộn/về sớm 4 lần từ 6-15 phút phạt 70% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {' '}
              {t('Đi muộn/về sớm 5 lần từ 6-15 phút phạt 100% tiền chuyên cần')}
            </div>
            <div className="list-rules">
              {' '}
              {t('Đi muộn/về sớm 6 lần từ 6-15 phút phạt 200% tiền chuyên cần')}
            </div>
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

export default Dialog;
