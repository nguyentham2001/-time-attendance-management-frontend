/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useHistory, matchPath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Hidden,
  Button,
  Avatar,
} from '@mui/material';
import { ChevronRight, ExpandMore, ExpandLess } from '@mui/icons-material';
import { sidebarMenu } from './config';
import { StyledSidebar } from './index.style';

const hasChildren = (item) => {
  const { subMenu } = item;
  if (!subMenu || subMenu.constructor !== Array || !subMenu.length) {
    return false;
  }
  return true;
};

const PlaceRightBottom = ({ isSubGroup, item, onItemClick, selectedKeys }) => {
  const { t } = useTranslation();

  const handleClick = (route, isGroupMenu) => {
    if (isGroupMenu) return;
    onItemClick(route);
  };

  return (
    <div
      className={`placement-right-top ${
        isSubGroup && 'placement-right-top-sub'
      }`}
    >
      <List component="div" disablePadding className="sub-menu">
        {item.subMenu.map((menuItem, index) => {
          const [lastKey] = selectedKeys.slice(-1);
          const isSubmenuActive = lastKey === menuItem.key;
          const isGroupMenu = hasChildren(menuItem);

          return (
            <ListItem
              key={index.toString()}
              button={!isGroupMenu}
              className={`nested menu-item ${isGroupMenu && 'menu-submenu'}`}
              onClick={() => handleClick(menuItem.route, isGroupMenu)}
            >
              <ListItemIcon
                className={`menu-icon ${isSubmenuActive && 'primary'}`}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                className={`menu-title ${isSubmenuActive && 'primary'}`}
                primary={t(menuItem.heading)}
              />
              {isGroupMenu && <ChevronRight className="menu-icon" />}
              {isGroupMenu && (
                <PlaceRightBottom
                  item={menuItem}
                  isSubGroup
                  onItemClick={onItemClick}
                  selectedKeys={selectedKeys}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const SingleLevel = ({
  item,
  mobile,
  collapsed,
  onItemClick,
  selectedKeys,
  level,
}) => {
  const { t } = useTranslation();

  const isMenuActive = useMemo(() => {
    const [lastKey] = selectedKeys.slice(-1);
    return lastKey === item.key;
  }, [item, selectedKeys]);

  return (
    <ListItem
      button
      onClick={() => onItemClick(item.route)}
      className={`menu-item ${
        isMenuActive && 'background-primary'
      } menu-item-level-${level}`}
    >
      <ListItemIcon className={`menu-icon ${isMenuActive && 'primary'}`}>
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={t(item.heading)}
        className={`menu-title ${!mobile && collapsed && 'hide'}  ${
          isMenuActive && 'primary'
        }`}
      />
    </ListItem>
  );
};

const MultiLevel = ({
  item,
  mobile,
  collapsed,
  onItemClick,
  selectedKeys,
  level,
}) => {
  const { subMenu: children } = item;

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (collapsed) {
      setOpen(false);
    }
  }, [collapsed]);

  useEffect(() => {
    if (collapsed) return;
    if (selectedKeys.includes(item.key)) {
      setOpen(true);
    }
  }, [collapsed, selectedKeys]);

  const handleClick = () => {
    if (!mobile && collapsed) return;
    setOpen((prev) => !prev);
  };

  return (
    <div className="menu-submenu">
      <ListItem
        button
        onClick={handleClick}
        className={`menu-item menu-item-level-${level}`}
      >
        <ListItemIcon
          className={`menu-icon ${
            selectedKeys.includes(item.key) && 'primary'
          }`}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={t(item.heading)}
          className={`menu-title ${!mobile && collapsed && 'hide'}`}
        />
        {open ? (
          <ExpandLess
            className={`menu-icon ${!mobile && collapsed && 'hide'}`}
          />
        ) : (
          <ExpandMore
            className={`menu-icon ${!mobile && collapsed && 'hide'}`}
          />
        )}
      </ListItem>
      {!mobile && collapsed && (
        <PlaceRightBottom
          item={item}
          onItemClick={onItemClick}
          selectedKeys={selectedKeys}
        />
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem
              key={key.toString()}
              item={child}
              mobile={mobile}
              collapsed={collapsed}
              onItemClick={onItemClick}
              selectedKeys={selectedKeys}
              level={level + 1}
            />
          ))}
        </List>
      </Collapse>
    </div>
  );
};

const MenuItem = ({
  item,
  mobile,
  collapsed,
  onItemClick,
  selectedKeys,
  level = 0,
}) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;

  return (
    <Component
      level={level}
      item={item}
      mobile={mobile}
      collapsed={collapsed}
      onItemClick={onItemClick}
      selectedKeys={selectedKeys}
    />
  );
};

export default function Sidebar(props) {
  const { collapsed, toggle } = props;
  const [selectedKeys, setSelectedKeys] = useState([]);

  const { pathname } = useLocation();
  const history = useHistory();

  const isActiveRoute = (route) =>
    matchPath(pathname, { path: route, exact: true });

  useEffect(() => {
    const getFirstRouteMounted = (menu, listKeys) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const menuItem of menu) {
        const { key, route, subMenu } = menuItem;
        if (!subMenu) {
          if (isActiveRoute(route)) {
            return { ...menuItem, listKeys: [...listKeys, key] };
          }
        } else {
          const result = getFirstRouteMounted(subMenu, [...listKeys, key]);
          if (result) return result;
        }
      }
      return null;
    };

    const { listKeys } = getFirstRouteMounted(sidebarMenu, []) || {};
    if (listKeys) {
      setSelectedKeys(listKeys);
    }
  }, [pathname]);

  const handleClickMenu = (route) => {
    history.push(route);
  };

  const renderSidebarWindow = () => (
    <Hidden mdDown implementation="css">
      <Drawer
        open={!collapsed}
        className={`drawer ${!collapsed && 'drawer-open'} ${
          collapsed && 'drawer-close'
        }`}
        variant="permanent"
        classes={{
          paper: `drawer ${!collapsed && 'drawer-open'} ${
            collapsed && 'drawer-close'
          }`,
        }}
      >
        <Toolbar className={`toolbar ${collapsed && 'toolbar-collapsed'} }`}>
          <img
            className={`logo ${collapsed && 'hide'}`}
            src="/img/logo-home.jpg"
            alt="logo"
            onClick={() => {}}
          />
          <Button className="menu-button" onClick={toggle}>
            <img
              src={
                collapsed
                  ? '/img/collapsed-menu-icon.svg'
                  : '/img/menu-icon.svg'
              }
              alt="menu-icon"
            />
          </Button>
        </Toolbar>
        <div className="content">
          <List>
            {sidebarMenu.map((item, index) => (
              <MenuItem
                key={index.toString()}
                item={item}
                collapsed={collapsed}
                onItemClick={handleClickMenu}
                selectedKeys={selectedKeys}
              />
            ))}
          </List>
        </div>
      </Drawer>
    </Hidden>
  );

  const renderSidebarMobile = () => (
    <Hidden mdUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="right"
        open={false}
        //   onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="drawer-mobile">
          <List>
            {sidebarMenu.map((item, index) => (
              <MenuItem
                key={index.toString()}
                item={item}
                collapsed={collapsed}
                onItemClick={handleClickMenu}
                selectedKeys={selectedKeys}
              />
            ))}
          </List>
        </div>
      </Drawer>
    </Hidden>
  );

  return (
    <StyledSidebar collapsed={collapsed}>
      {renderSidebarWindow()}
      {renderSidebarMobile()}
    </StyledSidebar>
  );
}
