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
    // subMenu: [
    //   {
    //     key: 'AutoCallReport',
    //     heading: 'autoCall',
    //     route: ROUTES.AUTO_CALL_REPORT,
    //     role: ['user'],
    //   },
    // {
    //   key: 'StaffReport',
    //   heading: 'staff',
    //   route: ROUTES.STAFF_REPORT,
    //   role: ['user'],
    // },
    // ],
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
    // subMenu: [
    //   {
    //     key: 'Overview',
    //     heading: 'overview',
    //     route: ROUTES.API_OVERVIEW,
    //   },
    //   {
    //     key: 'Application',
    //     heading: 'application',
    //     route: ROUTES.API_APPLICATION,
    //     role: ['user'],
    //   },
    //   {
    //     key: 'Call',
    //     heading: 'call',
    //     role: ['user'],
    //     route: ROUTES.HOME,
    //     subMenu: [
    //       {
    //         key: 'voiceBroadcasting',
    //         heading: 'voiceBroadcasting',
    //         route: ROUTES.API_VOICE_BROADCASTING,
    //         role: ['user'],
    //       },
    //       {
    //         key: 'CallByCampaign',
    //         heading: 'callByCampaign',
    //         route: ROUTES.API_CALL_BY_CAMPAIGN,
    //         role: ['user'],
    //       },
    //       {
    //         key: 'OTPVerify',
    //         heading: 'otpVerify',
    //         route: ROUTES.API_VOICE_OTP,
    //         role: ['user'],
    //       },
    //     ],
    //   },
    // ],
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
    heading: 'Quản lý nghỉ phép trong năm',
    icon: (
      <Icon>
        <CardGiftcardIcon />
      </Icon>
    ),
    role: ['user'],
    route: ROUTES.LEAVE,
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
