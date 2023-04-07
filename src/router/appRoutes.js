import Login from '@src/pages/Login';
import Home from '@src/pages/Home';
import Leave from '@src/pages/Leave';
import Report from '@src/pages/Report';
import Time from '@src/pages/Time';
import Salary from '@src/pages/Salary';
import Shift from '@src/pages/Shift';
import Account from '@src/pages/Account';

import routes from '@src/constants/route';

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
];
