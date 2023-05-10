import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreatDetail from './index.style';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Button,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateTableEmployee from './CreateTableEmployee';
import Checkbox from '@mui/material/Checkbox';
import CustomTable from 'src/components/CustomTable';
import { REPEAT_TIME } from 'src/constants';

const weeks = [
  { label: 'monday', value: 1 },
  { label: 'tuesday', value: 2 },
  { label: 'wednesday', value: 3 },
  { label: 'thursday', value: 4 },
  { label: 'friday', value: 5 },
  { label: 'saturday', value: 6 },
  { label: 'sunday', value: 7 },
];
const days = [...Array(31).keys()].map((e) => e + 1);

const APPLICABLE_OBJECT = { STAFF: 'STAFF', ORGANIZATION: 'ORGANIZATION' };

const CreateDetail = ({ onBack }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const [repeatTime, setRepeatTime] = useState(REPEAT_TIME.DAY);

  const [applicableObject, setApplicableObject] = useState(
    APPLICABLE_OBJECT.STAFF,
  );

  const handleRepeatTimeChanged = (value) => {
    setRepeatTime(value);
  };

  const handleApplicableObjectChanged = (event) => {
    const { value } = event.target;
    setApplicableObject(value);
  };

  const onPageChange = (page) => {
    console.log('page', page);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  //table employee

  useEffect(() => {
    setData([
      {
        id: 123,
        name: 'Nguyễn Văn A',
        workunit: 'Bộ phận hành chính',
        position: 'Trưởng phòng hành chính',
      },
    ]);
  }, []);

  const employeeheads = [
    {
      label: t('Mã nhân viên'),
      valueName: 'id',
      align: 'left',
    },
    {
      label: t('Họ và tên'),
      valueName: 'name',
      align: 'left',
    },
    {
      label: t('Đơn vị công tác'),
      valueName: ' workunit',
      align: 'left',
    },
    {
      label: t('Vị trí công việc'),
      valueName: 'position',
      align: 'left',
    },
    {
      label: t(''),
      valueName: 'actions',
      align: 'center',
    },
  ];

  const employeeActions = [
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: () => {},
    },
  ];

  //table unit
  useEffect(() => {
    setData([
      {
        nameunit: 'Bộ phận hành chính',
      },
    ]);
  }, []);

  const unitHeads = [
    {
      label: t('Tên đơn vị'),
      valueName: 'nameunit',
      align: 'left',
    },
    {
      label: t(''),
      valueName: 'actions',
      align: 'center',
    },
  ];

  const unitActions = [
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: () => {},
    },
  ];

  return (
    <StyledCreatDetail>
      <div className="header-creatdetail">
        <Button onClick={onBack} startIcon={<ArrowBackIcon />}></Button>
        <lable className="title-createdetail"> {t('Phân ca làm việc')}</lable>
        <div className="btt-savecancel">
          <Button
            id="cancel-detail"
            color="primary"
            variant="contained"
            className="detail-cancel"
            startIcon={<CancelIcon />}
          >
            {t('cancel')}
          </Button>

          <Button
            id="save-detail"
            color="primary"
            variant="contained"
            startIcon={<CheckCircleIcon />}
          >
            {t('Áp dụng')}
          </Button>
        </div>
      </div>
      <div className="createdetail-container">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <div className="title-general">
                <label className="general-information">
                  {t(' Thông tin chung')}
                </label>
              </div>
              <div className="grid-createdetail">
                <label className="table-name"> {t(' Tên bảng phân ca')}</label>
                <span className="required">*</span>
                <div className="input-tablename">
                  <TextField type="text"></TextField>
                </div>
              </div>
              <div className="grid-selectshift">
                <label className="select-shift"> {t(' Chọn ca là việc')}</label>
                <span className="required">*</span>
                <div className="input-selectshift">
                  <Select
                    className="select-createdetail"
                    placeholder={t('')}
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
                    <Option value="byshift ">{t('Theo ca')}</Option>
                    <Option value="byhours">{t('Theo giờ')}</Option>
                    <Option value="bydate">{t('Theo ngày')}</Option>
                  </Select>
                </div>
              </div>
              <div className="grid-deparment">
                <label className="select-deparment"> {t(' Chọn đơn vị')}</label>
                <span className="required">*</span>
                <div className="deparment">
                  <Select
                    className="select-createdetail"
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
                    <Option value="administrative ">
                      {t('administrative')}
                    </Option>
                    <Option value=" personnel">{t('personnel')}</Option>
                    <Option value=" accounting-department">
                      {t('accounting-department')}
                    </Option>
                    <Option value="business-department">
                      {t('business-department')}
                    </Option>
                    <Option value="marketing-room">
                      {t('marketing-room')}
                    </Option>
                    <Option value="engineering-department">
                      {t('engineering-department')}
                    </Option>
                    <Option value="quality-controldepartment">
                      {t('quality-controldepartment')}
                    </Option>
                  </Select>
                </div>
              </div>
              <div className="startendday-title">
                <label className="title-startend">
                  {t(' Thời gian áp dụng')}
                </label>
              </div>
              <div className="start-endday">
                <Box sx={{ width: '100%' }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={6}>
                      <div className="startend">
                        <label>{t('Ngày bắt đầu')}</label>
                        <span className="required">*</span>
                      </div>

                      <div className="calendar-startendday">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <div className="grid-endday">
                        <div className="startend">
                          <label>{t('Ngày kết thúc')}</label>
                          <span className="required">*</span>
                        </div>

                        <div className="calendar-startendday">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <div className="repeat-detail">
                <div className="endday">
                  <label>{t('Lặp theo')}</label>
                </div>
                <div className="repeat-by">
                  <div className="select-repeat">
                    <div className="select-day">
                      <Select
                        className="select-repeatby"
                        placeholder={t('')}
                        value={repeatTime}
                        onChange={(e, newValue) =>
                          handleRepeatTimeChanged(newValue)
                        }
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
                        {Object.keys(REPEAT_TIME).map((key) => (
                          <Option value={REPEAT_TIME[key]}>{t(key)}</Option>
                        ))}
                      </Select>
                    </div>
                    {repeatTime == REPEAT_TIME.DAY && (
                      <>
                        <div className="loop-cycle">
                          <Radio
                            className="radio-repeat"
                            name="radio-buttons"
                            size="small"
                          />

                          <label className="loop-left">
                            {t(' Chu kì lặp')}
                          </label>
                          <TextField
                            className="number-day"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />

                          <lable className="loop-right">{t(' Ngày')}</lable>
                        </div>
                        <div className="days-work">
                          <Radio
                            className="radio-repeat"
                            name="radio-buttons"
                            size="small"
                          />
                          <label>{t('Ngày làm việc từ thứ 2 đến thứ 6')}</label>
                        </div>
                      </>
                    )}
                    {repeatTime == REPEAT_TIME.WEEK && (
                      <>
                        <div className="repeat-weeks">
                          <label className="loop-week">
                            {t('Chu kì lặp ')}
                          </label>
                          <TextField
                            id="outlined-weeks"
                            className="input-weeks"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />

                          <label className="weekend">{t('Tuần')}</label>
                        </div>

                        <div className="weekend-day">
                          <div className="monday-friday">
                            <Checkbox className="checkbox-monday" />
                            <label className="lable-weekend">
                              {t('Thứ 2')}
                            </label>
                          </div>
                          <div className="weeks">
                            <Checkbox className="checkbox-weekend" />
                            <label className="lable-weekend">
                              {t('Thứ 3')}
                            </label>
                          </div>
                          <div className="weeks">
                            <Checkbox className="checkbox-weekend" />
                            <label className="lable-weekend">
                              {t('Thứ 4')}
                            </label>
                          </div>
                          <div className="weeks">
                            <Checkbox className="checkbox-weekend" />
                            <label className="lable-weekend">
                              {t('Thứ 5')}
                            </label>
                          </div>
                        </div>
                        <div className="weekend-day">
                          <div className="monday-friday">
                            <Checkbox className="checkbox-monday" />
                            <label className="lable-weekend">
                              {t('Thứ 6')}
                            </label>
                          </div>
                          <div className="weeks">
                            <Checkbox className="checkbox-weekend" />
                            <label className="lable-weekend">
                              {t('Thứ 7')}
                            </label>
                          </div>
                          <div className="weeks">
                            <Checkbox className="checkbox-weekend" />
                            <label className="lable-weekend">
                              {t('Chủ nhật')}
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                    {repeatTime == REPEAT_TIME.MONTH && (
                      <>
                        <div className="repeat-weeks">
                          <label className="loop-week">
                            {t('Chu kì lặp ')}
                          </label>
                          <TextField
                            className="input-month"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />

                          <label className="month">{t('Tháng')}</label>
                        </div>
                        <div className="onmonthday">
                          <div>
                            <Radio
                              className="radio-month "
                              name="radio-buttons"
                              size="small"
                            />

                            <label className=" radio-on">{t('Vào')}</label>
                          </div>

                          <div className="select-onmonth">
                            <Select
                              className="select-monthday"
                              placeholder={t('')}
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
                              {weeks.map(({ label, value }) => (
                                <Option value={value}>{t(label)}</Option>
                              ))}
                            </Select>
                          </div>
                        </div>{' '}
                        <div className="onmonthday">
                          <div>
                            <Radio
                              className="radio-month "
                              name="radio-buttons"
                              size="small"
                            />

                            <label className="onday">{t('Vào ngày')}</label>
                          </div>

                          <div className="select-onday">
                            <Select
                              className="select-monthday"
                              placeholder={t('')}
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
                              {days.map((e) => (
                                <Option value={e}>{t(`${e}`)}</Option>
                              ))}
                            </Select>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="applicable-object">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    {t('Đối tượng áp dụng')}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={applicableObject}
                    onChange={handleApplicableObjectChanged}
                  >
                    <FormControlLabel
                      value={APPLICABLE_OBJECT.STAFF}
                      control={<Radio />}
                      label={t('Danh sách nhân viên')}
                    />
                    <FormControlLabel
                      value={APPLICABLE_OBJECT.ORGANIZATION}
                      control={<Radio />}
                      label={t('Cơ cấu tổ chức')}
                    />
                  </RadioGroup>
                </FormControl>
                <div className="search-applicable">
                  <TextField
                    id="search-object"
                    variant="outlined"
                    placeholder={t('search-nabar')}
                    type="text"
                    className="input-object"
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
                    className="createdetail-button"
                    color="primary"
                    startIcon={<ControlPointIcon />}
                    onClick={handleOpenDialog}
                  >
                    {t('add')}
                  </Button>
                </div>
                {applicableObject === APPLICABLE_OBJECT.STAFF && (
                  <div className="table-employee">
                    <CustomTable
                      heads={employeeheads}
                      items={data}
                      actions={employeeActions}
                      onChangePagination={onPageChange}
                    />
                  </div>
                )}
                {applicableObject === APPLICABLE_OBJECT.ORGANIZATION && (
                  <div className="table-unit">
                    <CustomTable
                      heads={unitHeads}
                      items={data}
                      actions={unitActions}
                      onChangePagination={onPageChange}
                    />
                  </div>
                )}
              </div>
            </Grid>
            <Grid xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Box>
      </div>

      <CreateTableEmployee open={open} handleClose={handleClose} />
      {/* <nhanvien open={openAddApplicable&& appplicableObject === APPLICABLE_OBJECT.STAFF } handleClose={handleClose} /> */}
      {/* <tochuc open={openAddApplicable&& appplicableObject === APPLICABLE_OBJECT.ORGANIZATION } handleClose={handleClose} /> */}
    </StyledCreatDetail>
  );
};
export default CreateDetail;
