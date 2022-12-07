import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  Tabs, 
  Tab 
} from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar 
    position="stick"
      sx={{ 
        background:
          'linear-gradient(90deg, rgba(166,135,187,1) 0%, rgba(255,190,190,1) 50%, rgba(241,207,160,1) 100%);' 
      }}
    >
      <Toolbar>
        <Typography variant='h5'>Up 'n Down</Typography>
        <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
          <Tabs 
            textColor='inherit' 
            value={value} 
            onChange={(e,val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/home" label="Home"/>
            <Tab LinkComponent={Link} to="/myDashboard" label="My Dashboard"/>
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button 
            LinkComponent={Link} 
            to="/auth"
            variant="contained"
            sx={{ margin:'1' ,borderRadius:10 }} 
            color="warning">Login</Button
          >
          
          <Button 
            LinkComponent={Link} 
            to="/auth"
            variant="contained" 
            sx={{ margin:'1',borderRadius:10 }} 
            color="warning">Sign Up</Button
          >

          <Button 
            LinkComponent={Link} to="/auth"
            variant="contained" 
            sx={{ margin:'1',borderRadius:10 }} 
            color="warning">Log Out</Button
          >

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;