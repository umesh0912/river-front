import { Alert, Snackbar } from "@mui/material";

interface IProps {
    open: boolean;
    message: string;
    onClose?: () => void
    snackType?: "error" | "success" | "info" | "warning"
};

export const SnackbarWrapper = (props: IProps) => {

    const handleCloseToast = (
        event: React.SyntheticEvent | Event,
        reason?: string
      ) => {
        if (reason === "clickaway") {
          return;
        }
      if(props.onClose) {
        props.onClose()
      }
    };

      return (
        <Snackbar
          open={props.open}
          autoHideDuration={2000}
          onClose={handleCloseToast}
          anchorOrigin={{
            vertical: 'top', horizontal: 'right'   
          }}
        >
          <Alert onClose={handleCloseToast} severity={props.snackType as any} sx={{ width: '100%' }}>
            {props.message}
          </Alert>
        </Snackbar>
      )
}