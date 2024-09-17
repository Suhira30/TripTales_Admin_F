import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import Notification from '../Component/Notification';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
const Topbar = () => {
    
    
  return (

    // <Card variant="outlined">
    //     <CardContent>
    //       <Typography level="title-md">Outlined card (default)</Typography>
    //       <Typography>Description of the card.</Typography>
    //     </CardContent>
    //   </Card>
    <Box sx={{ width: '100%', marginTop: '30px' }}>
      <Card variant="outlined" sx={{ position: 'relative' }}>
        <CardContent>
          <Box sx={{ justifyContent: 'space-between',}}>
            <Typography variant="h6">Hello ---------------</Typography>
            <Typography>Welcome back Admin!</Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '15px',
              right: '8px',
              display: 'flex',
              gap: '8px'
            }}
          >
            <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
              <Fab
                color="primary"
                aria-label="add"
                sx={{
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: "#2a8ab3", // Slightly darker shade for hover
                  },
                  '&:active': {
                    backgroundColor: "#2285a0", // Even darker shade for active state
                  },
                }}
              >
                <AddIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="edit"
                sx={{
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: "#2a8ab3", // Slightly darker shade for hover
                  },
                  '&:active': {
                    backgroundColor: "#2285a0",
                  },
                }}
              >
                <AddAPhotoOutlinedIcon />
              </Fab>
              <Fab
                sx={{
                  backgroundColor: "#388e3c",
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: "#2a8ab3", // Slightly darker shade for hover
                  },
                  '&:active': {
                    backgroundColor: "#2285a0", // Even darker shade for active state
                  },
                }}
                aria-label="notifications"
              >
                <Notification />
              </Fab>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export  default Topbar;