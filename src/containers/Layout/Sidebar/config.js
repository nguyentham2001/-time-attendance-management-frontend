/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ROUTES from '@src/constants/route';
import { Icon } from '@mui/material';

export const sidebarMenu = [
  {
    key: 'Employee',
    heading: 'Quản lý danh sách nhân viên',
    icon: <Icon>Employee</Icon>,
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
    icon: <Icon>Shift</Icon>,
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
    icon: <Icon>Time</Icon>,
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
    icon: <Icon>Salary</Icon>,
    role: ['user'],
    route: ROUTES.SALARY,
  },

  {
    key: 'Leave',
    heading: 'Quản lý nghỉ phép trong năm',
    icon: <Icon>LEAVE</Icon>,
    role: ['user'],
    route: ROUTES.LEAVE,
  },

  {
    key: 'Account',
    heading: 'Quản lý tài khoản người dùng',
    icon: <Icon>Account</Icon>,
    role: ['user'],
    route: ROUTES.ACCOUNT,
  },

  {
    key: 'Report',
    heading: 'Báo cáo và thống kê',
    icon: <Icon>Report</Icon>,
    role: ['user'],
    route: ROUTES.REPORT,
  },
];
