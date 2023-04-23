import { styled } from '@mui/material/styles';
import { TableCell } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-head {
    white-space: nowrap;
    background-color: #87cefa;
    font-weight: bold;
    font-size: 15px;
    color: #696969;
    border: ${(props) =>
      props.border ? '1px solid rgba(224, 224, 224, 1)' : 'none'};
  }
  &.MuiTableCell-body {
    font-size: 16px;
    border: ${(props) =>
      props.border ? '1px solid rgba(224, 224, 224, 1)' : 'none'};
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
  &.icon-button {
    padding: 5px;
    background: #ffffff;
    color: #babfc7;
    :hover {
      color: #6e6b7b;
      background: none;
    }
  }
`;

export const StyledCustomTable = styled('div')`
  .table-cell {
    font-weight: 500;
    font-size: 16px;
  }
`;
