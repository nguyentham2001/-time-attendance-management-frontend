import Login from '@src/pages/Login';
import Home from '@src/pages/Home';
import Leave from '@src/pages/Leave';
import Report from '@src/pages/Report';

import Salary from '@src/pages/Salary';
import Shift from '@src/pages/Shift';
import Account from '@src/pages/Account';
import Salary13 from '@src/pages/Salary13';
import Syn from '@src/pages/Syn';
import Detail from '@src/pages/Detail';
import General from '@src/pages/General';
import SalaryProcess from '@src/pages/SalaryProcess';
import OrtherMoney from '@src/pages/OrtherMoney';
import TotalLeave from '@src/pages/TotalLeave';
import Public_detail from '@src/pages/Public_detail';
import routes from '@src/constants/route';
import OverTime from 'src/containers/OverTime';
import SalaryAdvance from '@src/pages/SalaryAdvance';
import CreateRequest from '@src/pages/CreateRequest';
import Deparment from '@src/pages/Deparment';
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
    path: routes.SALARYOFMONTH13,
    component: Salary13,
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
    path: routes.DEPARMENT,
    component: Deparment,
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
  {
    path: routes.TOTALLEAVE,
    component: TotalLeave,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.SALARYPROCESS,
    component: SalaryProcess,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.ORTHERMONEY,
    component: OrtherMoney,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.SALARYADVANCE,
    component: SalaryAdvance,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.CREATEREQUEST,
    component: CreateRequest,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];
