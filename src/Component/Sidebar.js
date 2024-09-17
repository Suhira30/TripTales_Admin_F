import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import Menu from '@mui/material/Menu';
import { useNavigate, Link } from 'react-router-dom';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const drawerWidth = 260;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   background: `linear-gradient(90deg, rgba(252, 177, 112, 0.9) 50%, rgba(255, 141, 41, 1) 70%)`,
//   height: '100px',
//   width: '100%',
//   justifyContent: 'center',
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  
  const handleItemClick = (route) => {
    setSelectedItem(route);
    if (route === 'logout') {
      localStorage.removeItem('token');
      navigate('/logout'); 
    } else {
      navigate(route);
    }
  };

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await userService.fetchProfileName();
//         setUserProfile(response);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleDrawerOpen = () => setOpen(true);
//   const handleDrawerClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
    >
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {renderMenu}
      <Drawer
        sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' ,} }}
        variant="persistent"
        anchor="left"
        open= {true}
      >
        <DrawerHeader sx={{height:"100px",marginRight:"35px"}}>
          <h1>Travel-Tales</h1>
        </DrawerHeader>
        <List sx={{ padding: 0,marginLeft:"12px", marginTop:"-20px",textAlign: "center", alignItems: "center", justifyContent: "center" }}>
          {['Dashboard', 'All Post', 'Reviews Report', 'Chat', 'Log out'].map((text, index) => {
            const route = `/${text.toLowerCase().replace(' ', '-')}`;
            return (
              <ListItem
                key={text}
                disablePadding
                onClick={() => handleItemClick(route)}
                sx={{
                  marginTop:"6px",
                  '&:hover': {
                    backgroundColor: 'rgba(42, 138, 179, 0.7)',
                    borderRadius: '0px',
                    width: 'auto',
                    marginLeft: '20px',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                  },
                  backgroundColor: selectedItem === route ? 'rgba(42, 138, 179, 0.9)' : 'inherit'
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeOutlinedIcon />}
                    {index === 1 && <RateReviewOutlinedIcon />}
                    {index === 2 && <ReviewsOutlinedIcon />}
                    {index === 3 && < ChatOutlinedIcon/>}
                    {index === 4 && <LogoutOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  );
};

export default Sidebar;
