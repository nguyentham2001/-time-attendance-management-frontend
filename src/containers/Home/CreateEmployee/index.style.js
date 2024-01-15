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
  .css-1869usk-MuiFormControl-root {
    margin: 0px;
  }
  .employee-right {
    margin-left: 20px;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 260px;
    height: 40px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #ccc !important;
  }
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    width: 800px;
  }
  .input-account {
    margin-top: 15px;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    width: 260px;
    padding: 0px;
  }
  .requied {
    color: red;
  }
  .css-1yjfd6v-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    height: 40px;
    width: 260px;
  }

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 260px;
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    height: 40px;
  }
  .css-wahqcs-JoySelect-root {
    width: 260px;
    border-radius: 4px;
  }

  #save {
    background: #1e90ff;
  }

  #cancel {
    background: #6e6b7b;
  }
  .select-gender {
    height: 40px;
    width: 260px;
  }
  #alert-dialog-title {
    color: #0000ff;
  }
  .validate {
    font-size: 15px;
    corlor: red;
  }
`;

export default StyledDialog;
