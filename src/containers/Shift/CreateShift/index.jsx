import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledCreateShift from './index.style';
import { Button, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Checkbox from '@mui/material/Checkbox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomTable from 'src/components/CustomTable';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
const CreateShift = ({ onBack }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const onPageChange = (page) => {
    console.log('page', page);
  };
  useEffect(() => {
    setData([
      {
        reject: 'Đi muộn',
        fromminutes: '10 ',
        tominutes: '15',
        deductedhour: '2',
        deducteday: '1',
      },
      {
        reject: 'Về sớm',
        fromminutes: '10 ',
        tominutes: '15',
        deductedhour: '2',
        deducteday: '1',
      },
    ]);
  }, []);

  const heads = [
    {
      label: t('Loại'),
      valueName: 'reject',
      align: 'center',
    },
    {
      label: t('Từ(phút)'),
      valueName: 'fromminutes',
      align: 'left',
    },
    {
      label: t('Đến(phút)'),
      valueName: 'tominutes',
      align: 'left',
    },
    {
      label: t('Giờ công bị trừ(giờ)'),
      valueName: 'deductedhour',
      align: 'left',
    },
    {
      label: t('Ngày công bị trừ(ngày)'),
      valueName: 'deducteday',
      align: 'left',
    },
    {
      label: t(''),
      valueName: 'actions',
      align: 'center',
    },
  ];

  const actions = [
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: () => {},
    },
  ];

  return (
    <StyledCreateShift>
      <div className="header-createshift">
        <Button onClick={onBack} startIcon={<ArrowBackIcon />}></Button>
        <lable className="title-createshift"> {t('Phân ca làm việc')}</lable>
        <div className="btt-savecancel">
          <Button
            id="cancel-createshift"
            color="primary"
            variant="contained"
            className="createshift-cancel"
            startIcon={<CancelIcon />}
          >
            {t('cancel')}
          </Button>

          <Button
            id="save-createshift"
            color="primary"
            variant="contained"
            startIcon={<CheckCircleIcon />}
          >
            {t('save')}
          </Button>
        </div>
      </div>
      <div className="createshift-container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <div className="title-header">
                <label className="title-infor">{t('Thông tin chung')}</label>
              </div>
              <div className="nameshift">
                <div>
                  <label className="title-nameshift">{t('Tên ca')}</label>
                  <span className="required">*</span>
                </div>
                <div className="input-nameshift">
                  <TextField type="text"></TextField>
                </div>
              </div>
              <div className="nameshift">
                <div>
                  <label className="title-nameshift">{t('Mã ca')}</label>
                  <span className="required">*</span>
                </div>
                <div className="input-nameshift">
                  <TextField type="text"></TextField>
                </div>
              </div>
              <div className="startend-work">
                <div className="titlestartend">
                  <label>{t('Giờ bắt đầu ca')}</label>
                  <span className="required">*</span>
                </div>
                <div className="clock-startend">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
                <div className="title-startend">
                  <label>{t('Chấm vào')}</label>
                  <label className="from">{t('Từ')}</label>
                </div>
                <div className="clock-startendto">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
                <div className="title-startend">
                  <label>{t('Đến')}</label>
                </div>
                <div className="clock-startendto">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
              </div>
              <div className="startend-work">
                <div className="titlestartend">
                  <label>{t('Giờ kết thúc ca')}</label>
                  <span className="required">*</span>
                </div>
                <div className="clock-startend">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
                <div className="title-startend">
                  <label>{t('Chấm ra')}</label>
                  <label className="from-end">{t('Từ')}</label>
                </div>
                <div className="clock-startendto">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
                <div className="title-startend">
                  <label>{t('Đến')}</label>
                </div>
                <div className="clock-startendto">
                  <Select
                    className="select-timework"
                    placeholder={t('')}
                    indicator={<AccessTimeIcon />}
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
                    <Option value="one ">{t('00:00')}</Option>
                    <Option value="two">{t('00:30')}</Option>
                    <Option value="three">{t('1:00')}</Option>
                    <Option value="four">{t('1:30')}</Option>
                    <Option value="five">{t('2:00')}</Option>
                    <Option value="six">{t('2:30')}</Option>
                    <Option value="seven">{t('3:00')}</Option>
                    <Option value="eight">{t('3:30')}</Option>
                    <Option value="nine">{t('4:00')}</Option>
                    <Option value="ten">{t('4:30')}</Option>
                    <Option value="eleven">{t('5:00')}</Option>
                    <Option value="twelve">{t('5:30')}</Option>
                    <Option value="thirteen">{t('6:00')}</Option>
                    <Option value="fourteen">{t('6:30')}</Option>
                    <Option value="fifteen">{t('7:00')}</Option>
                    <Option value="sixteen">{t('7:30')}</Option>
                    <Option value="seventeen">{t('8:00')}</Option>
                    <Option value="eighteen">{t('8:30')}</Option>
                    <Option value="nineteen">{t('9:00')}</Option>
                    <Option value="twenty">{t('9:30')}</Option>
                    <Option value="twenty-one">{t('10:00')}</Option>
                    <Option value="twenty-two">{t('10:30')}</Option>
                    <Option value="twenty-thirt">{t('11:00')}</Option>
                    <Option value="twenty-four">{t('11:30')}</Option>
                    <Option value="twenty-five">{t('12:00')}</Option>
                    <Option value="twenty-six">{t('12:30')}</Option>
                    <Option value="twenty-seven">{t('13:00')}</Option>
                    <Option value="twenty-eight">{t('13:30')}</Option>
                    <Option value="twenty-nine">{t('14:00')}</Option>
                    <Option value="thirty">{t('14:30')}</Option>
                    <Option value="thirty-two">{t('15:00')}</Option>
                    <Option value="thirty-three">{t('15:30')}</Option>
                    <Option value="thirty-four">{t('16:00')}</Option>
                    <Option value="thirty-five">{t('16:30')}</Option>
                    <Option value="thirty-six">{t('17:00')}</Option>
                    <Option value="thirty-seven">{t('17:30')}</Option>
                    <Option value="thirty-eight">{t('18:00')}</Option>
                    <Option value="thirney-nine">{t('18:30')}</Option>
                    <Option value="thirty-one">{t('19:00')}</Option>
                    <Option value="fourty">{t('19:30')}</Option>
                    <Option value="fourty-one">{t('20:00')}</Option>
                    <Option value="fourty-two">{t('20:30')}</Option>
                    <Option value="fourty-three">{t('21:00')}</Option>
                    <Option value="fourty-four">{t('21:30')}</Option>
                    <Option value="fourty-five">{t('22:00')}</Option>
                    <Option value="fourty-six">{t('22:30')}</Option>
                    <Option value="fourty-seven">{t('23:00')}</Option>
                    <Option value="fourty-eight">{t('23:30')}</Option>
                  </Select>
                </div>
              </div>
              <div className="title-footer">
                <label className="title-infor">{t('Tính công')}</label>
              </div>
              <div className="publicity-workhours">
                <div className="hours">
                  <label className="title-hours"> {t('Giờ công')}</label>
                  <input className="input-hours" type="number" />
                </div>
                <div className="hours-right">
                  <label className="work-day"> {t('Ngày công')}</label>
                  <input className="input-hoursright" type="number" />
                </div>
              </div>
              <div className="publicity-workhours">
                <div className="relax-left">
                  <label className="title-hours">
                    {t('Hệ số ngày thường')}
                  </label>
                  <input className="input-relax" type="number" />
                </div>
                <div className="relax-right">
                  <label className="work-day"> {t('Hệ số ngày nghỉ')}</label>
                  <input className="input-relax" type="number" />
                </div>
              </div>
              <div className="publicity-workhours">
                <div className="relax-left">
                  <label className="title-hours">{t('Hệ số ngày lễ')}</label>
                  <input className="input-holiday" type="number" />
                </div>
                <Button className="btt-holiday">
                  {t('Thiết lập riêng cho từng ngày lễ')}
                </Button>
              </div>
              <div className="checkbox-createshif">
                <Checkbox defaultChecked />
                <label>{t('Nếu không có giờ vào thì bị trừ lương')}</label>
                <div className="hoursday-works">
                  <div className="hours-works">
                    <label className="title-hourswork">{t('Giờ công')}</label>
                    <input className="input-hourswork" type="number" />
                  </div>
                  <div className="days-works">
                    <label className="title-daysswork">{t('Ngày công')}</label>
                    <input className="input-dayswork" type="number" />
                  </div>
                </div>
              </div>
              <div className="checkbox-createshif">
                <Checkbox defaultChecked />
                <label>{t('Nếu không có giờ ra thì bị trừ lương')}</label>
                <div className="hoursday-works">
                  <div className="hours-works">
                    <label className="title-hourswork">{t('Giờ công')}</label>
                    <input className="input-hourswork" type="number" />
                  </div>
                  <div className="days-works">
                    <label className="title-daysswork">{t('Ngày công')}</label>
                    <input className="input-dayswork" type="number" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="title-advanced">
                <label>{t('Tùy chỉnh nâng cao')}</label>
              </div>
              <div className="late-early">
                <Checkbox defaultChecked />
                <label>{t('Đi muộn về sớm')}</label>
                <div className="allow-latecoming">
                  <lable className="title-latecoming">
                    {t('Cho phép đi muộn')}
                  </lable>
                  <input className="input-latecoming" type="number" />
                  <lable className="minute-latecoming">{t('Phút')}</lable>
                </div>
                <div className="allow-earlycoming">
                  <lable className="title-earlyoming">
                    {t('Cho phép về sớm')}
                  </lable>
                  <input className="input-earlycoming" type="number" />
                  <lable className="minute-latecoming">{t('Phút')}</lable>
                </div>
                <div className="penalty">
                  <Checkbox defaultChecked />
                  <label>{t('Phạt đi sớm về muộn')}</label>

                  <Button className="btt-penalty" startIcon={<AddIcon />}>
                    {t('Thêm')}
                  </Button>

                  <div className="table-penalty">
                    <CustomTable
                      heads={heads}
                      items={data}
                      actions={actions}
                      onChangePagination={onPageChange}
                    />
                  </div>
                </div>
              </div>

              <div className="overtime">
                <Checkbox defaultChecked />
                <label>{t('Làm thêm giờ')}</label>
              </div>
              <div className="shift-meal">
                <Checkbox defaultChecked />
                <label>{t('Công ăn ca')}</label>
              </div>
              <div className="secondment">
                <Checkbox defaultChecked />
                <label>{t('Công điều động')}</label>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </StyledCreateShift>
  );
};

export default CreateShift;
