import styled from 'styled-components';
import { Dialog } from '@mui/material';

export default styled(Dialog)`
  #alert-dialog-description {
    width: 450px;
  }
  .rules-header {
    border: 1px solid black;
    padding: 10px;
  }
  .color-error {
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 20px;
  }
  .blue {
    width: 30px;
    height: 30px;
    background-color: #00ffff;
  }
  .color {
    display: flex;
    margin-top: 10px;
  }
  .yellow {
    width: 30px;
    height: 30px;
    background-color: #ffff00;
  }
  .red {
    width: 30px;
    height: 30px;
    background-color: #f00000;
  }
  .early-late {
    margin-left: 15px;
    font-size: 15px;
    margin-top: 5px;
  }
  .rules-fooer {
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
  }
  .list-rules {
    font-size: 15px;
    margin-top: 10px;
  }
  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    text-transform: none;
    background-color: #808080;
  }
`;
