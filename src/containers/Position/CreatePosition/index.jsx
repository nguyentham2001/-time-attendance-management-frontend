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

const CreatePosition = ({ open, position, handleClose, handleReloadData }) => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState();

  const [level, setLevel] = useState();

  useEffect(() => {
    if (!open) {
      setName('');
      setLevel('');
      return;
    }

    console.log(position);
    const { name: initName = '', level: initLevel = 1 } = position || {};
    setName(initName);
    setLevel(initLevel);
  }, [open, position]);

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleLevelChange = (event) => {
    const { value } = event.target;
    setLevel(value);
  };

  const handleCreatePosition = async () => {
    if (name.trim().length == 0) return;
    try {
      let res;
      const data = { name, rank: level };

      if (!position) {
        res = await apis.position.createPosition(data);
      } else {
        res = await apis.position.updatePosition(position.id, data);
      }
      if (!res) throw new Error('serverError');

      enqueueSnackbar({
        variant: 'success',
        message: position
          ? t('Cap nhat bo phan thanh cong')
          : t('Them bo phan thanh cong'),
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
          <div>
            <span>{t('Tên chức vụ')}</span>
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
          <div className="position-level">
            <span>{t('level')}</span>
            <div className="input-level">
              <TextField
                id="outlined-basic"
                className="input-create"
                variant="outlined"
                value={level}
                onChange={handleLevelChange}
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
