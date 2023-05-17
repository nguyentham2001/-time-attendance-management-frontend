import React, { useEffect, useState } from 'react';
import StyledSalaryProcess from './index.style';
import { useTranslation } from 'react-i18next';
import CustomTable from 'src/components/CustomTable';
import MenuIcon from '@mui/icons-material/Menu';

const SalaryProcess = () => {
    const { t } = useTranslation();


  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData([
      {
      
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
      label: t('Lương chính hức'),
      valueName: 'salary',
      align: 'left',
    },
    {
      label: t('Phụ cấp ăn'),
      valueName: 'mealallowance',
      align: 'left',
      minWidth: 100,
    },
    {
      label: t('Phụ cấp xăng xe'),
      valueName: 'gasolinecarallowance',
      align: 'left',
    },
    {
      label: t('Phụ cấp điện thoại'),
      valueName: 'phoneallowance',
      align: 'left',
    },
    {
      label: t('Phụ cấp trách nhiệm'),
      valueName: 'responsibilityallowance',
      align: 'left',
    },
    {
      label: t('Tổng'),
      valueName: 'total',
      align: 'left',
    },
    {
      label: t('Ngày áp dụng'),
      valueName: 'applicabledate',
      align: 'left',
    },
    {
      label: t('Trạng thái'),
      valueName: 'status',
      align: 'left',
    }
   
   
  ]; 
  return (
  <StyledSalaryProcess>
    <div className='salaryprocess-home'>

   <label className='title-salaryprocess'>{t('Quá trình lương')}</label>
   <div className='salaryprocess-container'>
        <div className='icon-listmenu'>
          <div className='icon-list'>
           < MenuIcon/>
          </div>
           <lable className='title-list'>{t('Quá trình thay đổi lương của nhan viên ')}</lable>
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
    </StyledSalaryProcess>
  );
};

export default SalaryProcess;