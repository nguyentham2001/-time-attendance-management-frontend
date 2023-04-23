import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledHome from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomTable from 'src/components/CustomTable';

import CreateEmployee from './CreateEmployee';

const limit = 10;

// const VIEWS = { LIST: 'LIST', ADD: 'ADD' };

const Home = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

  // const [view, setView] = useState(VIEWS.LIST);

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
        name: 'name',
        accountId: 'accountId',
        phoneNumber: 'phoneNumber',
        permission: 'permission',
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
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('name'),
      valueName: 'accountId',
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
      label: t('position'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('datesign'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('datestart'),
      valueName: 'permission',
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

  // if (view == VIEWS.ADD)
  //   return (
  //     <div>
  //       <Button onClick={() => setView(VIEWS.LIST)}>Back</Button>
  //     </div>
  //   );

  return (
    <StyledHome>
      <div className="home">
        <div className="home-employee">
          <div>
            <h3 className="employee-header">{t('manage-employee-list')}</h3>
          </div>
          <div className="employee-add">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search')}
              type="text"
              className="input-employee"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              id="employee-btt"
              variant="contained"
              className="employee-button"
              color="primary"
              startIcon={<ControlPointIcon />}
              onClick={handleOpenDialog}
              // onClick={() => setView(VIEWS.ADD)}
            >
              {t('add')}
            </Button>
          </div>
          <div className="employee-container">
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

      <CreateEmployee open={open} handleClose={handleClose} />
    </StyledHome>
  );
};

export default Home;
