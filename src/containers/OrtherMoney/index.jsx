import React, { useEffect, useState }  from 'react';
import StyledOrtherMoney from './index.style';
import { useTranslation } from 'react-i18next';
import { Button} from '@mui/material';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AdjustIcon from '@mui/icons-material/Adjust';
import CustomTable from 'src/components/CustomTable';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const OrtherMoney = () => {
    const { t } = useTranslation();
    const yesterday = dayjs().subtract(1, 'day');

    const [data, setData] = useState([]);

  
    useEffect(() => {
      setData([
        {
        
          no: '1',
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
        label: t('Tài khoản'),
        valueName: 'account',
        align: 'left',
      },
      {
        label: t('Ngày áp dụng'),
        valueName: 'dateapplication',
        align: 'left',
        minWidth: 100,
      },
      {
        label: t('Số tiền'),
        valueName: 'numbermoney',
        align: 'left',
      },
      {
        label: t('Loại tiền'),
        valueName: 'typemoney',
        align: 'left',
      },
      {
        label: t('Ghi chú'),
        valueName: 'note',
        align: 'left',
      }
     
     
    ];
  return <StyledOrtherMoney>
    <div className='orthermoney-home'>
        <lable className='title-orthermoney'>{t('Tiền thưởng/phạt')}</lable>
        <div className='orthermoney-container'>
        <div className='condition'>
          <label className='tittle-condition'>{t('Điều kiện lọc dữ liệu')}</label>
        </div>
        <div className='month'>
        <div className='calendar-month'>
        <span className='title-month'>{t('Tháng:')}</span>
        <span className='requied'>*</span>
        <div className='calendars'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem >
              <DatePicker
                defaultValue={yesterday}
                disablePast
                views={['year', 'month']}
              />
             </DemoItem>
          </LocalizationProvider>
        </div>
       
        </div>
        <div className='type-money'>
        <label className='title-month'>{t('Loại tiền:')}</label>
        <span className='requied'>*</span>
        <div className='select-typemoney'>
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
              <Option value="all ">{t('Tất cả')}</Option>
              <Option value="twonine ">{t('Thường 2/9')}</Option>
              <Option value="thirty-four ">{t('Thưởng 30/4-1/5')}</Option>
              <Option value="newyear ">{t('Thưởng tết âm lịch')}</Option>
              <Option value="new-year ">{t('Thưởng tết dương lịch')}</Option>
              <Option value="salary13 ">{t('Thưởng lương tháng 13')}</Option>
              <Option value="eightthirt ">{t('Thưởng 8/3')}</Option>
              <Option value=" twenlty-ten">{t('Thưởng 20/10')}</Option>
              <Option value="chirld ">{t('Thưởng 1/6')}</Option>
              <Option value="diligence">{t('Thưởng chuyên cần')}</Option>
              <Option value="other ">{t('Thưởng khác')}</Option>
              <Option value="diligent-penalty ">{t('Phạt chuyên cần')}</Option>
              <Option value="other-penalty ">{t('Phạt khác')}</Option>
              <Option value="salary-advance">{t('Tạm ứng lương')}</Option>
              <Option value="salary-compensation">{t('Bù lương')}</Option>

              
            </Select>

        </div>
        </div>
        <div className='button-month'>
        <Button
            variant="contained"
            className="search-button"
            id='btt-search'
            color="primary"
            startIcon={<AdjustIcon/>}
          
          >
            {t('Tìm kiếm')}
          </Button>
        </div>
        </div> 
        <div className='icon-listmenu'>
          <div className='icon-list'>
         < MenuIcon/>
         <span className='title-list'>{t('Danh sách thưởng phạt của của nhân viê trong tháng này ')}</span>
          </div>
        
        <div className='export-file'>
        <Button
          variant="outlined"
            className="export-button"
            id='btt-export'
            color="primary"
            startIcon={<ArrowDownwardIcon />}
          
          >
            {t('Xuất dữ liệu')}
          </Button>

        </div>

        </div>
        <div className='table-salary13'>
        <CustomTable
              heads={heads}
              items={data}
              onChangePagination={onPageChange}
            />

        </div>

        </div>

    </div>

  </StyledOrtherMoney>;
};

export default OrtherMoney;