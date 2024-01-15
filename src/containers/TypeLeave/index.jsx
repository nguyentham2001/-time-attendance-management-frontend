import React, { useEffect, useState } from 'react';
import StyledTypeLeave from './index.style';
import { useTranslation } from 'react-i18next';
import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
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
import CreateTypeLeave from './CreateTypeLeave';
import Popup from 'src/components/Popup';
import { useSnackbar } from 'notistack';
import debounce from '@src/utils/debounce';
import { usePaginationWithState } from 'src/hooks';
import apis from 'src/apis';
const columns = [
  { id: 'no', label: 'STT' },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'total', label: 'Total' },
  { id: 'actions', label: 'Actions', minWidth: 170 },
];

const TypeLeave = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const [absenceSelected, setAbsenceSelected] = useState(null);
  const [showConfirmDeleteAbsence, setShowConfirmDeleteAbsence] =
    useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = (item) => {
    setAbsenceSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setAbsenceSelected();
    setOpen(false);
  };

  const {
    data,
    onPageChange,
    onParamsChange,
    currentPage,
    limit,
    total,
    searchParams,
    handleCallApi: fetchListAbsence,
  } = usePaginationWithState([], apis.absence.getListAbsence);

  const handleChangePage = (event, newPage) => {
    onPageChange(newPage + 1);
  };
  const handleChangeRowsPerPage = (event) => {
    const newLimit = +event.target.value;
    onParamsChange({ limit: newLimit, pageNum: 1 });
  };

  const handleReloadData = () => {
    fetchListAbsence(searchParams);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    debounce(onParamsChange)({ search: value.trim() });
  };

  const handleOpenDelete = (absence) => {
    setAbsenceSelected(absence);
    setShowConfirmDeleteAbsence(true);
  };

  const handleCloseConfirmDelete = () => {
    setAbsenceSelected();
    setShowConfirmDeleteAbsence(false);
  };

  const handleConfirmDeleteAbsence = async () => {
    try {
      const res = await apis.absence.deleteAbsence(absenceSelected.id);
      if (!res) throw new Error('severError');
      enqueueSnackbar({
        variant: 'success',
        message: t('Xóa thành công'),
      });
      if (data.length <= 1 && currentPage !== 1) {
        onPageChange(currentPage - 1);
      } else {
        handleReloadData();
      }
    } catch (error) {
      enqueueSnackbar({
        variant: 'error',
        message: t(message),
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
    <StyledTypeLeave>
      <div className="type-home">
        <div className="type-header">
          <span className="title-type">{t('Loại đơn xin nghỉ')}</span>
        </div>
        <div className="type-container">
          <div className="search-type">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('Tìm kiếm loại đơn nghỉ')}
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
              onClick={handleOpenDialog}
            >
              {t('add')}
            </Button>
          </div>
          <div className="icon-listmenu">
            <div className="icon-list">
              <MenuIcon />
            </div>
            <span className="title-list">{t('Danh sách loại đơn nghỉ')}</span>
          </div>
        </div>
        <div className="type-footer">
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Tên loại đơn xin nghỉ</TableCell>
                    <TableCell>Số ngày nghỉ tối đa</TableCell>
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
                          if (column.id === 'no') {
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
      <CreateTypeLeave
        open={open}
        handleClose={handleClose}
        handleReloadData={handleReloadData}
        absence={absenceSelected}
      />
      <Popup
        open={showConfirmDeleteAbsence}
        onOk={handleConfirmDeleteAbsence}
        onClose={handleCloseConfirmDelete}
        title={'Delete Absence'}
        okMessage={'Delete'}
        content={'Are you sure you want to delete this position'}
      />
    </StyledTypeLeave>
  );
};

export default TypeLeave;
