import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StyledLeave from './index.style';
import { Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FormControl from '@mui/joy/FormControl';
import CustomTable from 'src/components/CustomTable';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { VIEW } from 'src/constants';
import CreateLeave from './CreateLeave';
import StyledCreateLeave from './index.style';
const limit = 10;
const Leave = () => {
  const { t } = useTranslation();

  const [view, setView] = useState(VIEW.LIST);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(15);

  useEffect(() => {
    setData([
      {
        id: 'id',
        name: 'Nguyễn Văn A',
      },
    ]);
  }, []);

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const heads = [
    {
      label: t('id'),
      valueName: 'id',
      align: 'left',
    },
    {
      label: t('name'),
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('Vị trí công việc'),
      valueName: 'positiom',
      align: 'left',
    },
    {
      label: t('Đơn vị công tác'),
      valueName: 'workunit',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Ngày nộp đơn'),
      valueName: 'dateofapplication',
      align: 'left',
    },
    {
      label: t('Từ ngày'),
      valueName: 'fromday',
      align: 'left',
    },
    {
      label: t('Đến ngày'),
      valueName: 'today',
      align: 'left',
    },
    {
      label: t('Số ngày nghỉ'),
      valueName: 'numberleave',
      align: 'left',
    },
    {
      label: t('Loại nghỉ'),
      valueName: 'typeofstay',
      align: 'left',
    },
    {
      label: t('Tỷ lệ hưởng lương'),
      valueName: 'salaryleave',
      align: 'left',
    },
    {
      label: t('Lý do nghỉ'),
      valueName: 'reasonforleave',
      align: 'left',
    },
    {
      label: t('Người duyệt'),
      valueName: 'reasonforleave',
      align: 'left',
    },
    {
      label: t('Người thay thế'),
      valueName: 'replace',
      align: 'left',
    },
    {
      label: t('Người liên quan'),
      valueName: 'peopleinvolved',
      align: 'left',
    },
    {
      label: t('Ghi chú'),
      valueName: 'note',
      align: 'left',
    },
    {
      label: t('Trạng thái'),
      valueName: 'status',
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

  if (view == VIEW.ADD) {
    return (
      <StyledCreateLeave>
        <CreateLeave onBack={() => setView(VIEW.LIST)} />
      </StyledCreateLeave>
    );
  }

  return (
    <StyledLeave>
      <div className="leave-header">
        <label className="leave-title">{t('Đơn xin nghỉ')}</label>
        <Button
          variant="contained"
          className="leave-button"
          color="primary"
          startIcon={<ControlPointIcon />}
          onClick={() => setView(VIEW.ADD)}
        >
          {t('add')}
        </Button>
      </div>
      <div className="leave-container">
        <div className="leave-search">
          <TextField
            id="search-leave"
            variant="outlined"
            placeholder={t('search-nabar')}
            type="text"
            className="input-leave"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="status">
            <div className="title-status">
              <label>{t('Trạng thái')}</label>
            </div>
            <div className="status-all">
              <FormControl sx={{ width: 240 }}>
                <Select
                  defaultValue="Tất cả"
                  slotProps={{
                    button: {
                      id: 'select-field-demo-button',

                      'aria-labelledby':
                        'select-field-demo-label select-field-demo-button',
                    },
                  }}
                >
                  <Option value="all">{t('Tất cả')}</Option>
                  <Option value="shift">{t('Đã duyệt')}</Option>
                  <Option value="noshift">{t('Chờ duyệt')}</Option>
                  <Option value="pending">{t('Từ chối')}</Option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="select-leave">
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
        </div>
        <div className="table-leave">
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
    </StyledLeave>
  );
};

export default Leave;
