/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  Popover,
  MenuList,
  Avatar,
  TextField,
  InputAdornment,
} from '@mui/material';
import i18n from '@src/languages';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from '@src/constants';
import { StyledMenuItem, StyledNavbar } from './index.style';
import SearchIcon from '@mui/icons-material/Search';
const languages = [
  { value: 'en-US', label: 'English' },
  { value: 'vi', label: 'Vietnamese' },
];

const CustomMenu = ({ anchorEl, handleClose, items, handleClick }) => {
  const { t } = useTranslation(['layout']);
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted={false}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        style: { transform: 'translateX(10px) translateY(50px)' },
      }}
    >
      {items.map((item) => (
        <MenuItem key={item.value} onClick={() => handleClick(item.value)}>
          <ListItemIcon className="menu-item-icon">
            {/* <img src={`/img/${item.iconPath}`} alt={item.value} /> */}
          </ListItemIcon>
          <Typography variant="inherit"> {t(item.label)}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

const LanguageSelect = () => {
  const { t } = useTranslation(['layout']);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    setAnchorEl(null);
  };

  // const handleOpenLanguage = (e) => {
  //   setAnchorEl(e.currentTarget);
  // };

  const handleCloseLanguage = () => {
    setAnchorEl(null);
  };

  // const getLanguageIcon = (value) => {
  //   const langValue = value || 'en-US';
  //   const language = languages.find((lang) => lang.value === langValue);
  //   return language.iconPath;
  // };

  return (
    <>
      <Button
        color="inherit"
        aria-haspopup="true"
        className="lang-btn"
        // startIcon={
        //   <img src={`/img/${getLanguageIcon(i18n.language)}`} alt="diamond" />
        // }
        // onClick={handleOpenLanguage}
      >
        <Typography className="lang-text">{t(i18n.language)}</Typography>
      </Button>
      <CustomMenu
        anchorEl={anchorEl}
        handleClose={handleCloseLanguage}
        items={languages}
        handleClick={handleChangeLanguage}
      />
    </>
  );
};

const Account = () => {
  const { t } = useTranslation(['layout']);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleViewInfo = () => {
    window.open(`${IAM_URL}/auth/realms/${IAM_REALM}/account`, '_blank');
  };

  const renderAvatar = () => {
    return (
      <Avatar className="avatar" color="primary">
        {'Abc'.slice(0, 1).toUpperCase()}
      </Avatar>
    );
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <div className="account">
      <Popover
        id={id}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuList>
          <StyledMenuItem onClick={handleViewInfo}>
            <AssignmentIndIcon className="info-icon" />
            <Typography>{t('accountInfo')}</Typography>
          </StyledMenuItem>
          <StyledMenuItem>
            <LogoutIcon className="logout-icon" />
            <Typography>{t('logout')}</Typography>
          </StyledMenuItem>
        </MenuList>
      </Popover>
      <div className="avatar-box">
        {renderAvatar()}
        <div className="status-dot" />
      </div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        onClick={handleClickOpenPopover}
      >
        <Typography className="text name-text">{name}</Typography>
        <Typography className="text profile-text">{t('profile')}</Typography>
      </Box>
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation(['layout']);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const history = useHistory();

  return (
    <StyledNavbar>
      <div className="content">
        <Button
          variant="contained"
          color="primary"
          className="button"
          startIcon={<img id="logo-img" src="/img/logo-nabar.png" alt="logo" />}
          onClick={() => history.replace(ROUTES.PAYMENT)}
        >
          {t('timekeeping')}
        </Button>
        <div className="balance-box">
          <TextField
            id="Search"
            variant="outlined"
            placeholder={t('Search.....')}
            type="text"
            className="Search-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="content righ-container">
        {/* <IconButton aria-label="notification" size="medium">
          <Badge
            badgeContent={4}
            color="primary"
            classes={{
              badge: 'badge',
            }}
          >
            <img src="/img/notification-icon.svg" alt="notification" />
          </Badge>
        </IconButton> */}
        <LanguageSelect />
        {/* <div className="phone">
          <IconButton aria-label="phone" size="medium">
            <img
              src="/img/phone-icon.svg"
              alt="phone"
              className="phone-image"
            />
          </IconButton>
        </div> */}
        <Account />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
