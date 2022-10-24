import { useState } from 'react';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Form, useNavigate, useSearchParams } from '@remix-run/react';

const FilmSearchEngine = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const titleParam = searchParams.get('title');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Form reloadDocument method="get">
        <Grid container alignItems="center">
          <TextField
            onChange={(e) => setDisableSubmit(e.target.value.length === 0)}
            name="title"
            placeholder="Type a title..."
            variant="outlined"
          />
          <Button
            disabled={disableSubmit}
            type="submit"
            size="small"
            variant="contained"
            sx={{ ml: 2, height: 40 }}
            onClick={() => setLoading(true)}
          >
            {loading ? <CircularProgress sx={{ color: 'white' }} size={15} /> : 'Search'}
          </Button>
        </Grid>
      </Form>
      <Grid container my={2} flexDirection="column">
        {titleParam && titleParam.length > 0 && (
          <>
            <span>
              Showing results for: &quot;<b>{titleParam}</b>&quot;.
            </span>
            <Button sx={{ width: 'fit-content' }} variant="text" onClick={() => navigate('/')}>
              Clear
            </Button>
          </>
        )}
      </Grid>
    </>
  );
};

export default FilmSearchEngine;
