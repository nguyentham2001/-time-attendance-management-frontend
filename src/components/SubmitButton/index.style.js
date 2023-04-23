import styled from 'styled-components';
import { LoadingButton } from '@mui/lab';
import { COLOR } from '@src/styles/color';

export default styled(LoadingButton)`
  display: flex;
  align-items: center !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  color: ${COLOR.white} !important;
  text-transform: unset !important;
  gap: 16px;

  .MuiLoadingButton-loadingIndicator {
    position: unset;
  }
`;
