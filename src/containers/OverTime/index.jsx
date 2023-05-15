import React, { useState, useEffect } from 'react';
import StyledOverTime from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import MenuIcon from '@mui/icons-material/Menu';
import CustomTable from 'src/components/CustomTable';
// import CreateOverTime from './CreateOverTime';

const limit = 10;
const OverTime = () => {
    const { t } = useTranslation();

    // const [open, setOpen] = React.useState(false);

    // const handleOpenDialog = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

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
            <div className='header-right'>
            <Button
            variant="contained"
            className="createnew-button"
            id='btt-createnew'
            color="primary"
            startIcon={<AdjustIcon/>}
            // onClick={handleOpenDialog}
          
          >
            {t('Tạo mới')}
          </Button>
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
    {/* <CreateOverTime open={open} handleClose={handleClose} /> */}
  </StyledOverTime>);
};

export default OverTime;