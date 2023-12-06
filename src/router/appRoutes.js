import Login from '@src/pages/Login';
import Home from '@src/pages/Home';
import Salary from '@src/pages/Salary';
import Salary13 from '@src/pages/Salary13';
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
import Position from '@src/pages/Position';
import Profile from '@src/pages/Profile';
import TYPELEAVE from '@src/pages/TypeLeave';
import TypeLeave from '@src/pages/TypeLeave';
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
  {
    path: routes.POSITION,
    component: Position,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.PROFILE,
    component: Profile,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.TYPELEAVE,
    component: TypeLeave,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];
