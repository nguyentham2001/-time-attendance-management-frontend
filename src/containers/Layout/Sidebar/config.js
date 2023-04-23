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
    heading: 'Quản lý ca làm việc',
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
        heading: 'Bảng phân ca tổng hợp',
        route: ROUTES.SYN,
      },
      {
        key: 'detail',
        heading: 'Phân ca chi tiết',
        route: ROUTES.DETAIL,
        role: ['user'],
      },
      {
        key: 'work',
        heading: 'Ca làm việc',
        role: ['user'],
        route: ROUTES.SHIFT,
      },
    ],
  },
  {
    key: 'Time',
    heading: 'Quản lý chấm công',
    icon: (
      <Icon>
        <KeyboardIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.TIME,
    subMenu: [
      {
        key: 'detailedtimesheer',
        heading: 'Bảng chấm công chi tiết',
        route: ROUTES.TIME,
        role: ['user'],
      },
      {
        key: 'Timesyn',
        heading: 'Bảng chấm công tổng hợp',
        route: ROUTES.GENERAL,
        role: ['user'],
      },
      {
        key: 'Timedata',
        heading: 'Dữ liệu chấm công',
        route: ROUTES.TIMESHEETDATA,
        role: ['user'],
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
  },

  {
    key: 'Leave',
    heading: 'Quản lý đơn nghỉ trong năm',
    icon: (
      <Icon>
        <CardGiftcardIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.LEAVE,
    subMenu: [
      {
        key: 'Salary',
        heading: 'Đơn xin nghỉ',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Đăng ký đi muộn, về sớm',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Đăng ký làm thêm',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Đề nghị đi công tác',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Đề nghị cập nhật công',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Đề nghị đổi ca',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Phê duyệt chấm công',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Bảng tổng hợp nghỉ phép',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Bảng tổng hợp nghỉ bù',
        route: ROUTES.SALARY,
        role: ['user'],
      },
      {
        key: 'Salary',
        heading: 'Kế hoạch nghỉ phép',
        route: ROUTES.SALARY,
        role: ['user'],
      },
    ],
  },

  {
    key: 'Account',
    heading: 'Quản lý tài khoản người dùng',
    icon: (
      <Icon>
        <SwitchAccountIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.ACCOUNT,
  },

  {
    key: 'Report',
    heading: 'Báo cáo và thống kê',
    icon: (
      <Icon>
        <ReportIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.REPORT,
  },
];
