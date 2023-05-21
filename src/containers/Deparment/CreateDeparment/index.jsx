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
import { useSnackbar } from 'notistack';
import apis from 'src/apis';

const CreateDepartment = ({ open, handleClose, handleReloadData }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState('');

  useEffect(() => {
    if (!open) {
      setName('');
    }
  }, [open]);

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleCreateDeparment = async () => {
    if (name.trim().length == 0) return;

    try {
      await apis.deparment.createDepartment({
        name: name,
      });
      enqueueSnackbar({
        variant: 'success',
        message: t('Them bo phan thanh cong'),
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
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className="title-create">
        {t('Thêm phòng ban')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span>{t('Tên phòng ban')}</span>
          <div>
            <TextField
              id="outlined-basic"
              className="input-create"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
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
          onClick={handleCreateDeparment}
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

export default CreateDepartment;
