import { Alert } from '@mui/material';

interface IErrorAlertProps {
  error?: Error;
  title?: string;
  body?: string;
}

const ErrorAlert = ({ error, title = '', body = '' }: IErrorAlertProps) => {
  return (
    <div>
      <Alert severity="error">
        {error ? (
          <>
            <h3>Oops... Something went wrong!</h3>
            <p>{error.message}</p>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <p>{body}</p>
          </>
        )}
      </Alert>
    </div>
  );
};

export default ErrorAlert;
