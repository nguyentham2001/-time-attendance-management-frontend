import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@redux/actions';
import { Button, TextField, Link } from '@mui/material';
import StyledLogin from './index.style';
import { enqueueSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import SubmitButton from 'src/components/SubmitButton';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoggingIn, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (error) {
      enqueueSnackbar({
        variant: 'error',
        message: t(error),
      });
    }
  }, [error]);

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleLogin = () => {
    dispatch(actions.auth.login(email, password));
  };

  return (
    <StyledLogin>
      <div className="Login-home">
        <div className="login-container">
          <div className="Login-header">{t('WELCOME')}</div>
          <div className="Login-container">
            <div className="Login-sign">{t('Sign in to your account')}</div>
            <div className="Login-from">
              <label className="Login-lable"> {t('Email')}</label>
              <br></br>
              <TextField
                id="outlined-basic"
                type="email"
                className="Login-input"
                variant="outlined"
                placeholder="Enter your email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="Login-from">
              <label className="Login-lable"> {t('Password')}</label>
              <br></br>
              <TextField
                id="outlined-basic"
                type="password"
                className="Login-input"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div className="form-link">
              <Link href="#"> forget password?</Link>
            </div>
            <div className="Login-btt">
              <SubmitButton loading={isLoggingIn} onClick={handleLogin}>
                {t('login')}
              </SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
