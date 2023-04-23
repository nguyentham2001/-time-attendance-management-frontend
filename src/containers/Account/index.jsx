import React, { useEffect, useState } from 'react';
import StyledAccount from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomTable from 'src/components/CustomTable';
import CreateAccount from './CreateAccount';

const limit = 10;
const Account = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setData([
      {
        no: 1,
        id: 'id',
        username: 'username',
        phoneNumber: 'phoneNumber',
        role: 'role',
        email: 'email',
      },
    ]);
  }, []);

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t('no'),
      valueName: 'no',
      align: 'left',
    },
    {
      label: t('id'),
      valueName: 'id',
      align: 'left',
    },
    {
      label: t('username'),
      valueName: 'username',
      align: 'left',
    },
    {
      label: t('phoneNumber'),
      valueName: 'phoneNumber',
      align: 'left',
    },
    {
      label: t('email'),
      valueName: 'email',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('address'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('role'),
      valueName: 'role',
      align: 'left',
    },
    {
      label: t('actions'),
      valueName: 'actions',
      align: 'center',
    },
  ];

  const actions = [
    {
      icon: <EditIcon />,
      onClick: (item) => {},
    },
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: () => {},
    },
  ];

  return (
    <StyledAccount>
      <div className="home-account">
        <div className="account-header">
          <div>
            <h3 className="account-name">{t('manage-user-accounts')}</h3>
          </div>
          <div className="account-add">
            <TextField
              id="search-account"
              variant="outlined"
              placeholder={t('search')}
              type="text"
              className="input-account"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              className="employee-button"
              color="primary"
              onClick={handleOpenDialog}
              startIcon={<ControlPointIcon />}
            >
              {t('add')}
            </Button>
          </div>
          <div className="account-container">
            <CustomTable
              heads={heads}
              items={data}
              actions={actions}
              pagination={{
                page: currentPage,
                totalPages: Math.ceil(total / limit),
                limit: limit,
                total: total,
              }}
              onChangePagination={onPageChange}
            />
          </div>
        </div>
      </div>
      <CreateAccount open={open} handleClose={handleClose} />
    </StyledAccount>
  );
};

export default Account;
