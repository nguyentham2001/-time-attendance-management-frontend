// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import {
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button,
// } from '@mui/material';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';


// import StyledDialog from './index.style';

// const CreateOverTime = ({ open, handleClose }) => {
//   const { t } = useTranslation();



//   return (
//     <StyledDialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title">{t('add-employee')}</DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-description">
//           1234
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           id="cancel"
//           onClick={handleClose}
//           color="primary"
//           variant="contained"
//           startIcon={<CancelIcon />}
//         >
//           {t('cancel')}
//         </Button>
//         <Button
//           id="save"
//           onClick={handleClose}
//           color="primary"
//           variant="contained"
//           startIcon={<CheckCircleIcon />}
//           autoFocus
//         >
//           {t('save')}
//         </Button>
//       </DialogActions>
//     </StyledDialog>
//   );
// };

// export default CreateOverTime;
