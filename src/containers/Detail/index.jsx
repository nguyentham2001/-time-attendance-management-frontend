import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledDetail from './index.style';
import { Button, TextField, InputAdornment, Grid, Box } from '@mui/material';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StyledCreateDetail from './index.style';

import CustomTable from 'src/components/CustomTable';
import CreateDetail from './CreateDetail';
import { VIEW } from 'src/constants';

const limit = 10;

const Detail = () => {
  const { t } = useTranslation();

  const [view, setView] = useState(VIEW.LIST);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

  useEffect(() => {
    setData([
      {
        tablename: 1,
        shiftwork: 'id',
        time: 'username',
      },
    ]);
  }, []);

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t('tablename'),
      valueName: 'tablename',
      align: 'left',
    },
    {
      label: t('shiftwork'),
      valueName: 'shiftword',
      align: 'left',
    },
    {
      label: t('time'),
      valueName: 'time',
      align: 'left',
    },
    {
      label: t('applicableunit'),
      valueName: 'applicableunit',
      align: 'left',
    },
    {
      label: t('applicableobject'),
      valueName: 'applicableobject',
      align: 'left',
      minWidth: 100,
    },
  ];

  if (view == VIEW.ADD) {
    return (
      <StyledCreateDetail>
        <CreateDetail onBack={() => setView(VIEW.LIST)} />
      </StyledCreateDetail>
    );
  }

  return (
    <StyledDetail>
      <div className="detail-home">
        <div className="detail-header">
          <label className="detail-title">{t('detailed-shift')}</label>
          <Button
            variant="contained"
            className="detail-button"
            color="primary"
            startIcon={<ControlPointIcon />}
            onClick={() => setView(VIEW.ADD)}
          >
            {t('add')}
          </Button>
        </div>
        <div className="detail-search">
          <TextField
            id="search-detail"
            variant="outlined"
            placeholder={t('search-nabar')}
            type="text"
            className="input-detail"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Select
            className="select-detail"
            placeholder={t('names-of-units')}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              [`& .${selectClasses.indicator}`]: {
                transition: '0.2s',
                [`&.${selectClasses.expanded}`]: {
                  transform: 'rotate(-180deg)',
                },
              },
            }}
          >
            <Option value="administrative ">{t('administrative')}</Option>
            <Option value=" personnel">{t('personnel')}</Option>
            <Option value=" accounting-department">
              {t('accounting-department')}
            </Option>
            <Option value="business-department">
              {t('business-department')}
            </Option>
            <Option value="marketing-room">{t('marketing-room')}</Option>
            <Option value="engineering-department">
              {t('engineering-department')}
            </Option>
            <Option value="quality-controldepartment">
              {t('quality-controldepartment')}
            </Option>
          </Select>
        </div>
        <div className="detail-footer">
          <CustomTable
            heads={heads}
            items={data}
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
    </StyledDetail>
  );
};

export default Detail;
