import React, { useState, useEffect } from 'react';
import StyledUpdeteWorking from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/joy/FormControl';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CustomTable from 'src/components/CustomTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { VIEW } from 'src/constants';
import StyledCreateUpdate from './index.style';
import CreateUpdate from './CreateUpdate';
const limit = 10;
const UpdeteWorking = () => {
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
        label: t('Người đề nghị'),
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
        label: t('Ngày đề nghị'),
        valueName: 'requestdate',
        align: 'left',
      },
      {
        label: t('Ngày làm việc'),
        valueName: 'startdate',
        align: 'left',
      },
      {
        label: t('Ca làm việc'),
        valueName: 'enddate',
        align: 'left',
      },
      {
        label: t('Giờ vào đầu ca'),
        valueName: 'numberdate',
        align: 'left',
      },
      {
        label: t('Giờ ra đầu ca'),
        valueName: 'addressbusiness',
        align: 'left',
      },
      {
        label: t('Giờ vào giữa ca'),
        valueName: 'reason',
        align: 'left',
      },
      {
        label: t('Giờ ra giữa ca'),
        valueName: 'suport',
        align: 'left',
      },
      {
        label: t('Lý do cập nhật'),
        valueName: 'sporter',
        align: 'left',
      },
      {
        label: t('Người duyệt'),
        valueName: 'stust',
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
        <StyledCreateUpdate>
          <CreateUpdate onBack={() => setView(VIEW.LIST)} />
        </StyledCreateUpdate>
      );
    }


  return (
  <StyledUpdeteWorking>
    <div className='updateworking-home'>
        <div className='update-header'>
            <label className="title-update">
            {t('Danh sách nhân viên đi công tác')}
          </label>
          <Button
            variant="contained"
            className="update-button"
            color="primary"
            startIcon={<ControlPointIcon />}
            onClick={() => setView(VIEW.ADD)}
          >
            {t('add')}
          </Button>

        </div>
        <div className='update-container'>
          <div className='updateworking-search'>
            <TextField
              id="search-mission"
              variant="outlined"
              placeholder={t('search-nabar')}
              type="text"
              className="input-working"
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
              <div className="status-update">
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
            <div className="select-update">
              <Select
                className="select"
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
          <div className='table-update'>
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
  </StyledUpdeteWorking> 
  );
};

export default UpdeteWorking;
