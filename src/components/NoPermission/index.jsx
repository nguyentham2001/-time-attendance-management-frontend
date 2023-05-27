import React from 'react';
import { useTranslation } from 'react-i18next';

import StyledNoPermission from './index.style';

const NoPermission = () => {
  const { t } = useTranslation();

  return (
    <StyledNoPermission>
      <div id="fobidden">
        <div className="fobidden">
          <div className="fobidden-403">
            <h3>{t('accessDenied')}</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>3</span>
            </h1>
          </div>
          <h2>{t('notPermission')}</h2>
        </div>
      </div>
    </StyledNoPermission>
  );
};

export default NoPermission;
