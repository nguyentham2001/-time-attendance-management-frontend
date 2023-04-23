import React from 'react';
import StyledSubmitButton from './index.style';

const SubmitButton = ({ className, loading, onClick, ...props }) => {
  const { children } = props;

  return (
    <StyledSubmitButton
      className={className}
      loading={loading}
      loadingPosition="start"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </StyledSubmitButton>
  );
};

export default SubmitButton;
