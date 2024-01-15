import React, { useEffect, useState } from 'react';
import StyledPosition from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CreatePosition from './CreatePosition';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from 'src/components/Popup';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import debounce from '@src/utils/debounce';

import { usePaginationWithState } from 'src/hooks';
import apis from 'src/apis';
const columns = [
  { id: 'no', label: 'STT', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'rank', label: 'Rank', minWidth: 170 },
  { id: 'actions', label: 'Actions', minWidth: 170 },
];

const Position = () => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = React.useState(false);
  const [positionSelected, setPositionSelected] = useState(null);
  const [showConfirmDeletePosition, setShowConfirmDeletePosition] =
    useState(false);

  const handleOpenDialog = (item) => {
    setPositionSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setPositionSelected();
    setOpen(false);
  };

  const {
    data,
    onParamsChange,
    onPageChange,
    currentPage,
    limit,
    total,
    handleCallApi: fetchListPosition,
    searchParams,
  } = usePaginationWithState([], apis.position.getListPositions);

  const handleChangePage = (event, newPage) => {
    onPageChange(newPage + 1);
  };

  const handleReloadData = () => {
    fetchListPosition(searchParams);
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = +event.target.value;
    onParamsChange({ limit: newLimit, pageNum: 1 });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    debounce(onParamsChange)({ search: value.trim() });
  };

  const handleOpenDelete = (position) => {
    setPositionSelected(position);
    setShowConfirmDeletePosition(true);
  };

  const handleCloseConfirmDelete = () => {
    setPositionSelected();
    setShowConfirmDeletePosition(false);
  };

  const handleConfirmDeletePosition = async () => {
    try {
      const res = await apis.position.deletePosition(positionSelected.id);
      if (!res) throw new Error('serverError');
      enqueueSnackbar({
        variant: 'success',
        message: 'Xoa bo phan thanh cong',
      });

      if (data.length <= 1 && currentPage !== 1) {
        onPageChange(currentPage - 1);
      } else {
        handleReloadData();
      }
    } catch (error) {
      enqueueSnackbar({
        variant: 'error',
        message: t('messaga'),
      });
    }
  };

  const actions = [
    {
      icon: <EditIcon />,
      onClick: (item) => handleOpenDialog(item),
    },
    {
      icon: <DeleteIcon className="delete-icon" />,
      onClick: handleOpenDelete,
    },
  ];
  return (
    <StyledPosition>
      <div className="position-home">
        <span className="title-position">{t('Quản lý danh sách chức vụ')}</span>
        <div className="position-container">
          <div className="search-position">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('Tìm kiếm chức vụ')}
              type="text"
              className="input-employee"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              id="employee-btt"
              variant="contained"
              className="employee-button"
              color="primary"
              startIcon={<ControlPointIcon />}
              onClick={() => handleOpenDialog()}
            >
              {t('add')}
            </Button>
          </div>
          <div className="icon-listmenu">
            <div className="icon-list">
              <MenuIcon />
            </div>
            <span className="title-list">{t('Danh sách chức vụ')}</span>
          </div>
          <div className="table-position">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell>Tên chức vụ</TableCell>
                      <TableCell>Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => {
                      const item = data[index];
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            let value = row[column.id];
                            if (column.id == 'no') {
                              value = (currentPage - 1) * limit + index + 1;
                            }
                            if (column.id === 'actions') {
                              return (
                                <TableCell>
                                  {actions.map((action) => (
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
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={total}
                rowsPerPage={limit}
                page={currentPage - 1}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
      <CreatePosition
        open={open}
        position={positionSelected}
        handleClose={handleClose}
        handleReloadData={handleReloadData}
      />
      <Popup
        open={showConfirmDeletePosition}
        onOk={handleConfirmDeletePosition}
        onClose={handleCloseConfirmDelete}
        title={'Delete Position'}
        okMessage={'Delete'}
        content={'Are you sure you want to delete this position'}
      />
    </StyledPosition>
  );
};

export default Position;
