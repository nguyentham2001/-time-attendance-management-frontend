import React, { useState, useEffect } from 'react';
import StyledOverTime from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import MenuIcon from '@mui/icons-material/Menu';
import CustomTable from 'src/components/CustomTable';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const OverTime = () => {
    const { t } = useTranslation();

   

    const [data, setData] = useState([]);
  
    
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
        label: t('STT'),
        valueName: 'no',
        align: 'left',
      },
      {
        label: t('Loại tăng ca'),
        valueName: 'typeovertime',
        align: 'left',
      },
      {
        label: t('Thời gian tăng ca'),
        valueName: 'timeovertime',
        align: 'left',
      },
      {
        label: t('Lý do'),
        valueName: 'reason',
        align: 'left',
        minWidth: 100,
      },
      {
        label: t('Trạng thái'),
        valueName: 'status',
        align: 'left',
      },
      {
        label: t('Thao tác'),
        valueName: 'action',
        align: 'left',
      }
      
    ];

  return (<StyledOverTime>
    <div className='overtime-home'>
        <div className='overtime-header'>
            <label className='title-overtime'>{t('Tăng ca')}</label>
            
          </div>
        <div className='overtime-container'>
          <div className='titile-create'>
            <label>{t('Tạo phiếu tăng ca')}</label>
          </div>
          <div className='create-container'>
          <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
        <div className='type-overtime'>
           <label className='title-typeovertime'>{t('Loại tăng ca')}</label>
           <span className='requied'>*</span>
           <div>
               <Select
              className="select-detail"
              placeholder={t('Chọn...')}
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
              <Option value="overtime ">{t('OverTime')}</Option>
              <Option value="overnight ">{t('OverNight')}</Option>
              </Select>
  </div>

          </div>
          <div className='time-overtime'>
          <label className='title-typeovertime'>{t('Loại tăng ca')}</label>
           <span className='requied'>*</span>
           
          </div>
        </Grid>
        <Grid xs={6}>
          1234
        </Grid>
        
      </Grid>
    </Box>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          </div>

        </div>

        <div className='overtime-container'>
            <div className='listovertime'>
                <div className='icon-listovertime'>
                <MenuIcon/>
                </div>
              
               <label className='title-listovertime'>{t('Danh sách phiếu tăng ca')}</label>
             </div>
            <div className='table-overtime'>
            <CustomTable
              heads={heads}
              items={data}
              onChangePagination={onPageChange}
            />


            </div>
             
        </div>

    </div>
   
  </StyledOverTime>);
};

export default OverTime;