import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledShift from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import CustomTable from 'src/components/CustomTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
const limit = 10;
const Shift = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setData([
      {
        id: 2345,
        namework: 'Ca hành chính',
        timestart: '8:00',
        beginwork: '7:30',
      },
    ]);
  }, []);

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t('idwork'),
      valueName: 'id',
      align: 'left',
    },
    {
      label: t('namework'),
      valueName: 'namework',
      align: 'left',
    },
    {
      label: t('timestart'),
      valueName: 'timestart',
      align: 'left',
    },
    {
      label: t('beginwork'),
      valueName: 'beginwork',
      align: 'left',
    },
    {
      label: t('finalwork'),
      valueName: 'finalwork',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('timeend'),
      valueName: 'timeend',
      align: 'left',
    },
    {
      label: t('finalstart'),
      valueName: 'finalstart',
      align: 'left',
    },
    {
      label: t('finalbegin'),
      valueName: 'finalbegin',
      align: 'left',
    },
    {
      label: t('moneyday'),
      valueName: 'moneyday',
      align: 'left',
    },
    {
      label: t('timeday'),
      valueName: 'timeday',
      align: 'left',
    },
    {
      label: t('everyday'),
      valueName: 'everyday',
      align: 'left',
    },
    {
      label: t('restday'),
      valueName: 'restday',
      align: 'left',
    },
    {
      label: t('holiday'),
      valueName: 'holiday',
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
    <StyledShift>
      <div className="shift-home">
        <div className="shift-header">
          <label className="shift-title">{t('shiftwork')}</label>
          <Button
            variant="contained"
            className="shift-button"
            color="primary"
            startIcon={<ControlPointIcon />}
          >
            {t('add')}
          </Button>
        </div>
        <div className="shift-container">
          <TextField
            id="search-shift"
            variant="outlined"
            placeholder={t('search-nabar')}
            type="text"
            className="input-shift"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="shift-footer">
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
    </StyledShift>
  );
};

export default Shift;
