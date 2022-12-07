import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
const Header = () => {
  return (
    <AppBar 
    position='sticky'
      sx={{ 
        background:
          'linear-gradient(90deg, rgba(166,135,187,1) 0%, rgba(255,190,190,1) 50%, rgba(241,207,160,1) 100%);' 
      }}
    >
      <Toolbar>
        <Typography variant='h5'>DASHBOARD</Typography>
        <Box display="flex" marginLeft="auto">
          <Button 
            variant="contained"
            sx={{ margin:'1' ,borderRadius:10 }} 
            color="warning">Login</Button
          >
          
          <Button 
            variant="contained" 
            sx={{ margin:'1',borderRadius:10 }} 
            color="warning">Sign Up</Button
          >
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;