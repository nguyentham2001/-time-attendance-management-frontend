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

const columns = [
  { id: 'no', label: 'STT' },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'actions', label: 'Actions', minWidth: 170 },
];

const TypeLeave = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actions = [
    {
      icon: <EditIcon />,
    },
    {
      icon: <DeleteIcon className="delete-icon" />,
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
              onClick={handleClickOpen}
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
                    <TableCell>Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
            />
          </Paper>
        </div>
      </div>
      <CreateTypeLeave open={open} handleClose={handleClose} />
    </StyledTypeLeave>
  );
};

export default TypeLeave;
