import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  TableCell,
} from '@mui/material';
import { PAGINATION_LIMIT } from '@src/constants';
import { getByPath } from '@src/utils/object';
import { StyledCustomTable, StyledTableCell } from './index.style';
import CustomPagination from '../CustomPagination';

const CustomTableRow = ({ item, heads, actions, index, border }) => {
  if (Object.keys(item).length <= 0) {
    return <TableRow key={index} />;
  }

  return (
    <TableRow key={item.id}>
      {heads.map((head) => {
        if (item.id === 'totalRow') {
          return (
            <TableCell className="table-cell" align={head.align}>
              {head.valueName !== 'actions' &&
              head.valueName !== 'no' &&
              (item[head.valueName] || item[head.valueName] === 0)
                ? item[head.valueName]
                : ' '}
            </TableCell>
          );
        }
        return (
          <StyledTableCell border={border} align={head.align}>
            {head.valueName === 'no' && index}
            {head.valueName === 'actions' &&
              actions.length &&
              Object.keys(item).length !== 0 &&
              actions.map((action) => (
                <IconButton
                  className="icon-button"
                  onClick={() => action.onClick(item)}
                  disabled={
                    typeof action.disable === 'function'
                      ? action.disable(item)
                      : action.disable
                  }
                >
                  {typeof action.icon === 'function'
                    ? action.icon(item)
                    : action.icon}
                </IconButton>
              ))}
            {head.valueName !== 'actions' &&
              head.valueName !== 'no' &&
              getByPath(item, head.valueName)}
          </StyledTableCell>
        );
      })}
    </TableRow>
  );
};

const CustomTable = ({
  heads,
  items,
  actions,
  pagination = { page: 1, limit: PAGINATION_LIMIT, totalPages: 1, total: 0 },
  onChangePagination,
  disablePagination = false,
  border,
}) => {
  const { t } = useTranslation();
  const { page: currentPage, limit, total } = pagination;

  let itemsRender = [{}];
  if (items.length !== 0) {
    itemsRender = items;
  }

  return (
    <StyledCustomTable>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {heads.map((head) => (
                <StyledTableCell border={border} align={head.align}>
                  {head.valueName === 'no' ? t(head.label) : head.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsRender.map((item, index) => (
              <CustomTableRow
                item={item}
                heads={heads}
                actions={actions}
                index={(currentPage - 1) * limit + index + 1}
                border={border}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!disablePagination && (
        <CustomPagination
          currentPage={currentPage}
          limit={limit}
          total={total}
          onChangePagination={onChangePagination}
        />
      )}
    </StyledCustomTable>
  );
};

export default CustomTable;
