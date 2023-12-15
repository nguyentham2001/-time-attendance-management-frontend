import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledHome from './index.style';
import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CreateEmployee from './CreateEmployee';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { usePaginationWithState } from 'src/hooks';
import apis from 'src/apis';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from 'src/components/Popup';
import { useSnackbar } from 'notistack';
import debounce from '@src/utils/debounce';
import { getByPath } from '@src/utils/object';

const columns = [
  { id: 'no', label: 'STT' },
  { id: 'employeeId', label: 'employeeId', minWidth: 170 },
  { id: 'name', label: 'name', minWidth: 100 },
  { id: 'phoneNumber', label: 'phoneNumber', minWidth: 170, align: 'right' },
  { id: 'email', label: 'email', minWidth: 170, align: 'right' },
  { id: 'address', label: 'address', minWidth: 170, align: 'right' },
  { id: 'positionId', label: 'positionId', minWidth: 170 },
  { id: 'departmentId', label: 'departmentId', minWidth: 170 },
  { id: 'dateOfBirth', label: 'dateOfBirth', minWidth: 170 },
  { id: 'identityNumber', label: 'identityNumber', minWidth: 170 },
  { id: 'issuedOn', label: 'issuedOn', minWidth: 170 },
  { id: 'issuedBy', label: 'issuedBy', minWidth: 170 },
  { id: 'signingDate', label: 'signingDate', minWidth: 170 },
  { id: 'workingDate', label: 'workingDate', minWidth: 170 },
  { id: 'actions', label: 'Actions', minWidth: 170 },
];

const Home = () => {
  const { t } = useTranslation();

  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = React.useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [showConfirmDeleteUser, setShowConfirmDeleteUser] = useState(false);

  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchListDepartments();
    fetchListPositions();
  }, []);

  const fetchListDepartments = async () => {
    const res = await apis.deparment.getListDeparments();
    const { status } = res || {};
    if (status == 1) {
      setDepartments(res.result.data);
    }
  };

  const fetchListPositions = async () => {
    const res = await apis.position.getListPositions();
    const { status } = res || {};
    if (status == 1) {
      setPositions(res.result.data);
    }
  };

  const handleOpenDialog = (item) => {
    setUserSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setUserSelected();
    setOpen(false);
  };

  const {
    data,
    onParamsChange,
    onPageChange,
    currentPage,
    limit,
    total,
    handleCallApi: fetchListUsers,
    searchParams,
  } = usePaginationWithState([], apis.user.getListUsers);

  const handleReloadData = () => {
    fetchListUsers(searchParams);
  };

  const handleChangePage = (event, newPage) => {
    onParamsChange(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = +event.target.value;
    onParamsChange({ limit: newLimit, pageNum: 1 });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    debounce(onParamsChange)({ search: value.trim() });
  };

  const handleOpenDelete = (user) => {
    setUserSelected(user);
    setShowConfirmDeleteUser(true);
  };

  const handleCloseConfirmDelete = () => {
    setUserSelected();
    setShowConfirmDeleteUser(false);
  };

  const handleConfirmDeleteUser = async () => {
    try {
      const res = await apis.user.deleteUser(userSelected.id);
      if (!res) throw new Error('serverError');

      enqueueSnackbar({
        variant: 'success',
        message: t('Xoa nhan vien thanh cong'),
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
    <StyledHome>
      <div className="home">
        <h3 className="employee-header">{t('manage-employee-list')}</h3>

        <div className="home-employee">
          <div className="employee-add">
            <TextField
              id="search-employee"
              variant="outlined"
              placeholder={t('search')}
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
          <div className="list-employee">
            <div className="icon-listovertime">
              <MenuIcon />
            </div>

            <label className="title-listovertime">
              {t('Danh sách nhân viên')}
            </label>
          </div>
          <div className="employee-container">
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map(({ label }) => (
                        <TableCell>{label}</TableCell>
                      ))}
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
                            let value = getByPath(row, column.id);

                            if (column.id === 'no') {
                              value = (currentPage - 1) * limit + index + 1;
                            }

                            if (column.id == 'departmentId') {
                              const department = departments.find(
                                (e) => e.id == value,
                              );
                              const { name } = department || {};
                              value = name;
                            }

                            if (column.id == 'positionId') {
                              const position = positions.find(
                                (e) => e.id == value,
                              );
                              const { name } = position || {};
                              value = name;
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

      <CreateEmployee
        open={open}
        user={userSelected}
        handleClose={handleClose}
        handleReloadData={handleReloadData}
        departments={departments}
        positions={positions}
      />

      <Popup
        open={showConfirmDeleteUser}
        onOk={handleConfirmDeleteUser}
        onClose={handleCloseConfirmDelete}
        title={'Delete employee'}
        okMessage={'Delete'}
        content={'Are you sure you want to delete this employee'}
      />
    </StyledHome>
  );
};

export default Home;
