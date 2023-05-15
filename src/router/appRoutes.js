import Login from '@src/pages/Login';
import Home from '@src/pages/Home';
import Leave from '@src/pages/Leave';
import Report from '@src/pages/Report';
import Time from '@src/pages/Time';
import Salary from '@src/pages/Salary';
import Shift from '@src/pages/Shift';
import Account from '@src/pages/Account';
import TimesheetData from '@src/pages/TimesheetData';
import Late_in_early_out from '@src/pages/Late_in_early_out';
import Register_overtime from '@src/pages/Register_overtime';
import Mission_allowance from '@src/pages/Mission_allowance';
import Update_working from '@src/pages/Update_working';
import Syn from '@src/pages/Syn';
import Detail from '@src/pages/Detail';
import General from '@src/pages/General';

import Public_detail from '@src/pages/Public_detail';
import OVERTIME from '@src/pages/OverTime';
import routes from '@src/constants/route';
import OverTime from 'src/containers/OverTime';

export default [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.LEAVE,
    component: Leave,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.TIME,
    component: Time,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.REPORT,
    component: Report,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.SHIFT,
    component: Shift,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.SALARY,
    component: Salary,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.ACCOUNT,
    component: Account,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.SYN,
    component: Syn,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.DETAIL,
    component: Detail,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.GENERAL,
    component: General,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.TIMESHEETDATA,
    component: TimesheetData,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.LATEEARLY,
    component: Late_in_early_out,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.REGISTEROVERTIME,
    component: Register_overtime,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.MISSIONALLOWANCE,
    component: Mission_allowance,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.UPDATEWORKING,
    component: Update_working,
    exact: true,
    restricted: false,
    isPrivate: true,
  },

  {
    path: routes.PUBLICDETAIL,
    component: Public_detail,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.OVERTIME,
    component: OverTime,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];
