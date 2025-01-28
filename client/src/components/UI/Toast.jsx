import { Snackbar, Alert } from '@mui/material';
import { useState, forwardRef } from 'react';

const Toast = forwardRef(({ message, severity, open, onClose }, ref) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <Snackbar
      ref={ref}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity || 'info'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
});
Toast.displayName = 'Toast';

export default Toast;