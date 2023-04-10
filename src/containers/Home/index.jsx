import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledApp from './index.style';
import { Button, TextField, InputAdornment, Icon } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomTable from 'src/components/CustomTable';

const limit = 10;

const App = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

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
      label: t('name'),
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('accountId'),
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
      label: t('permission'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('permission'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('permission'),
      valueName: 'permission',
      align: 'left',
    },
    {
      label: t('common:::actions'),
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
    <StyledApp>
      <div className="home">
        <div className="home-employee">
          <div className="employee-header">
            <h3>Quản lý danh sách nhân viên</h3>
          </div>
          <div className="employee-add">
            <Button
              variant="contained"
              className="employee-button"
              color="primary"
              startIcon={<ControlPointIcon />}
            >
              {t('add')}
            </Button>
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('Tìm kiếm mã hoặc tên nhân viên')}
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
    </StyledApp>
  );
};

export default App;
