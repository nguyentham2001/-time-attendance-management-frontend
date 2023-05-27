import React, { useEffect, useState } from 'react';
import StyledDialog from './index.style';
import { useTranslation } from 'react-i18next';
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

const CreatePosition = ({ open, handleClose, handleReloadData }) => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState(' ');

  useEffect(() => {
    if (!open) {
      setName('');
    }
  }, [open]);

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleCreatePosition = async () => {
    if (name.trim().length == 0) return;
    try {
      await apis.position.createPosition({
        name: name,
      });

      enqueueSnackbar({
        variant: 'success',
        message: t('Thêm chức vụ thành công'),
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
        {t('Thêm chức vụ')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span>{t('Tên chức vụ')}</span>
          <div className="input-createdeparment">
            <TextField
              id="outlined-basic"
              className="input-create"
              variant="outlined"
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
          onClick={handleCreatePosition}
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
