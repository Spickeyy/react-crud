import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (

    <Box
      component="header"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      sx={{ py: 3 }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate(routes.MovieCreatePage)}
      >
        <AddIcon />
        ADD A Movie
      </Button>
    </Box>
  );
};

export default Header;
