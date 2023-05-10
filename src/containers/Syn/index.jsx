import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledSyn from './index.style';
import { Button, TextField, InputAdornment, MenuItem } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/joy/FormControl';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const GENERAL_SHIFT = {
  EMPLOYEE: 'EMPLOYEE',
  UNIT: 'UNIT',
  SHIFT_WORK: 'SHIFT_WORK',
};

const Syn = () => {
  const { t } = useTranslation();

  const [generalShift, setGeneralshift] = useState(GENERAL_SHIFT.EMPLOYEE);

  const handleGeneralShiftChanged = (value) => {
    setGeneralshift(value);
  };

  const onPageChange = (page) => {
    console.log('page', page);
  };

  return (
    <StyledSyn>
      <div className="Syn-header">
        <lable className="title-syn">{t('Bảng phân ca tổng hợp')}</lable>
        <div className="group-bttsyn">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleGeneralShiftChanged(GENERAL_SHIFT.EMPLOYEE)}
            >
              {t('Nhân viên')}
            </Button>
            <Button
              onClick={() => handleGeneralShiftChanged(GENERAL_SHIFT.UNIT)}
            >
              {t('Đơn vị')}
            </Button>
            <Button
              onClick={() =>
                handleGeneralShiftChanged(GENERAL_SHIFT.SHIFT_WORK)
              }
            >
              {t('Ca làm việc')}
            </Button>
          </ButtonGroup>
        </div>
        <div className="stack-bttsyn">
          <Stack spacing={2} direction="row">
            <Button variant="outlined">{t('Hôm nay')}</Button>
            <Button variant="contained">{t('Phân ca')}</Button>
          </Stack>
        </div>
      </div>
      {generalShift === GENERAL_SHIFT.EMPLOYEE && (
        <div onChangePagination={onPageChange} className="employee-table">
          <div className="heade-employee">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search-nabar')}
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
            <div className="status">
              <div className="title-status">
                <label>{t('Trạng thái')}</label>
              </div>
              <div className="Status-all">
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
                    <Option value="shift">{t('Đã phân ca')}</Option>
                    <Option value="noshift">{t('Chưa phân ca')}</Option>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker views={['year', 'month']} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="select-syn">
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
        </div>
      )}
      {generalShift === GENERAL_SHIFT.UNIT && (
        <div onChangePagination={onPageChange} className="unit-table">
          <div className="heade-employee">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search-nabar')}
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
            <div className="status">
              <div className="title-status">
                <label>{t('Trạng thái')}</label>
              </div>
              <div className="Status-all">
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
                    <Option value="shift">{t('Đã phân ca')}</Option>
                    <Option value="noshift">{t('Chưa phân ca')}</Option>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker views={['year', 'month']} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="select-syn">
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
        </div>
      )}
      {generalShift === GENERAL_SHIFT.SHIFT_WORK && (
        <div onChangePagination={onPageChange} className="shiftwork-table">
          <div className="heade-employee">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search-nabar')}
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

            <div className="calendar-shiftwork">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DemoItem>
                    <DatePicker views={['year', 'month']} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="select-syn">
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
        </div>
      )}
    </StyledSyn>
  );
};

export default Syn;
