import { Dialog } from '@mui/material';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  #alert-dialog-description {
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
    displat: flex;
  }
  .information-employee {
    margin: 15px;
  }
  .infor-input .MuiInputBase-input {
    height: 5px;
    border: 1px solid ##6e6b7b;
  }

  #save {
    background: #1e90ff;
  }

  #cancel {
    background: #6e6b7b;
  }
  .select-gender {
    height: 38px;
    width: 223px;
  }
  #alert-dialog-title {
    color: #0000ff;
  }
`;

export default StyledDialog;
