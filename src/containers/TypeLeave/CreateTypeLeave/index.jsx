import React, { useEffect, useState } from 'react';
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
import { useSnackbar } from 'notistack';
import apis from 'src/apis';
const CreateTyepLeave = ({ open, handleClose, absence, handleReloadData }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  useEffect(() => {
    if (!open) {
      setName('');
      setTotal('');
      return;
    }
    console.log(absence);
    const { name: initName = '', total: initTotal = '' } = absence || {};
    setName(initName);
    setTotal(initTotal);
  }, [open, absence]);
  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleTotalChange = (event) => {
    const { value } = event.target;
    setTotal(value);
  };
  const handleCreateAbsence = async () => {
    if (name.trim().length == 0) return;
    try {
      let res;
      const data = { name, total };
      if (absence) {
        res = await apis.absence.createAbsence(data);
      } else {
        res = await apis.absence.updateAbsence(absence.id, data);
      }
      if (!res) throw new Error('serverError');
      enqueueSnackbar({
        variant: 'success',
        message: absence ? t('update-successful') : t('add-successful'),
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
          <div>
            <span>{t('Tên loại đơn xin nghỉ')}</span>
            <div className="input-createdeparment">
              <TextField
                id="outlined-basic"
                className="input-create"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className="total-absence">
            <span>{t('Số ngày tối đa')}</span>
            <div className="input-createdeparment">
              <TextField
                id="outlined-basic"
                className="input-create"
                variant="outlined"
                value={total}
                onChange={handleTotalChange}
              />
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
          {t('cancel')}
        </Button>
        <Button
          onClick={handleCreateAbsence}
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
