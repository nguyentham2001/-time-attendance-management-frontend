/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ROUTES from '@src/constants/route';
import { Icon } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import YardIcon from '@mui/icons-material/Yard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ReportIcon from '@mui/icons-material/Report';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const sidebarMenu = [
  {
    key: 'Employee',
    heading: 'Quản lý danh sách nhân viên',
    icon: (
      <Icon>
        {' '}
        <MenuBookIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.HOME,
    // subMenu: [
    //   {
    //     key: 'Mangement',
    //     heading: 'management',
    //     route: ROUTES.MANAGEMENT,
    //     role: ['user'],
    //   },
    //   {
    //     key: 'Script',
    //     heading: 'script',
    //     route: ROUTES.HOME,
    //     role: ['user'],
    //   },
    // ],
  },
  {
    key: 'Shift',
    heading: 'Chấm công',
    icon: (
      <Icon>
        <WorkHistoryIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.SHIFT,
    subMenu: [
      {
        key: 'Syn',
        heading: 'Chi tiết công',
        route: ROUTES.PUBLICDETAIL,
      },
      {
        key: 'detail',
        heading: 'Tăng ca',
        route: ROUTES.OVERTIME,
        role: ['user'],
      },
      {
        key: 'work',
        heading: 'Tổng hợp công',
        role: ['user'],
        route: ROUTES.GENERAL,
      },
    ],
  },
   {
    key: 'Salary',
    heading: 'Quản lý lương',
    icon: (
      <Icon>
        <YardIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.SALARY,
    subMenu: [
      {
        key: 'salaryadvance',
        heading: 'Tạm ứng lương',
        route: ROUTES.SYN,
      },
      {
        key: 'rewardandpunishment',
        heading: 'Thưởng và phạt',
        route: ROUTES.ORTHERMONEY,
        role: ['user'],
      },
      {
        key: 'salaryprocess',
        heading: 'Quá trình lương',
        role: ['user'],
        route: ROUTES.SALARYPROCESS,
      },
      {
        key: 'salarymonth',
        heading: 'Lương tháng',
        role: ['user'],
        route: ROUTES.SALARY,
      },
      {
        key: 'salarythirteen',
        heading: 'Lương tháng 13',
        role: ['user'],
        route: ROUTES.SALARYOFMONTH13,
      },
    ],
  },

  {
    key: 'Leave',
    heading: 'Đơn xin nghỉ',
    icon: (
      <Icon>
        <CardGiftcardIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.LEAVE,
    subMenu: [
      {
        key: 'Aplication',
        heading: 'Tạo đơn nghỉ',
        route: ROUTES.LEAVE,
        role: ['user'],
      },
      {
        key: 'lateearly',
        heading: 'Tổng hợp nghỉ phép',
        route: ROUTES. TOTALLEAVE,
        role: ['user'],
      },
    ],
  },

  

];
