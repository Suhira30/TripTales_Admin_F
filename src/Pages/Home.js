import React from 'react'
import Sidebar from '../Component/Sidebar'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import BioCard from '../Component/BioCard';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import BasicDateCalendar from "../Component/BasicDateCalendar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Notification from '../Component/Notification';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import LastPost from "../Component/LastPost";
import Revenue from "../Tables/Revenue";
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';

// import Footer from "../Component/footer";
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';
const Home =() => {
  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.background.level1,
    }),
  }));

return (
  <>
  <div>
  <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '260px 4.5fr 260px',
        gap: '20px',
        minHeight: '100vh', 
        marginRight:'20px'
      }}
  >
  {/*----------------------------------Coloumn 1-----------------------------------------------------------*/} 
    <Box>
      <Sidebar/>
    </Box>
  {/*----------------------------------Coloumn 2----------------------------------------------------------*/} 
    <Box>
      <Box
      sx={{
        width: '100%',
        marginTop:'30px',
        gap: 2,
      }}>
  {/*--------------------------------1--------------------------------------------------*/}   
     <Card variant="outlined" sx={{ position: 'relative' }}>
        <CardContent>
        <Box sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography level="title-md">Hello ---------------</Typography>
          <Typography>Welcome back Admin !</Typography>
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
          {/* <AddAPhotoOutlinedIcon/>
          <AddCircleOutlineOutlinedIcon/> */}
      <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
        <Fab color="primary" aria-label="add" sx={{ width: 40, height: 40 ,
          '&:hover': {
            backgroundColor: "#2a8ab3", // Slightly darker shade for hover
          },
          '&:active': {
            backgroundColor: "#2285a0", // Even darker shade for active state
          },
        }}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit"  
          sx={{ width: 40, height: 40,
            '&:hover': {
            backgroundColor: "#2a8ab3", // Slightly darker shade for hover
            },
            '&:active': {
            backgroundColor: "#2285a0",
            }, 
          }}>
          <AddAPhotoOutlinedIcon />
        </Fab>
        <Fab 
        sx={{backgroundColor:"#388e3c",justifyContent: 'center', alignItems: 'center',width: 40, height: 40,
          '&:hover': {
            backgroundColor: "#2a8ab3", // Slightly darker shade for hover
          },
          '&:active': {
            backgroundColor: "#2285a0", // Even darker shade for active state
          },
        }} aria-label="edit">
          <Notification />
        </Fab>
      </Box>
    </Box>
    </CardContent>
    </Card>
    </Box>
  {/*--------------------------------2--------------------------------------------------*/} 
      <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1,marginTop:"10px",padding:"0",width:"99.5%",marginLeft:"2px", }}>
        <Grid  size={{ xs: 2, sm: 4, md: 4,}}>
          <Item sx={{width:"200px",padding:"0",margin:"0",marginLeft:"8px",marginRight:"3px"}}> 
          <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Total blogs</Typography>
          <Typography>------</Typography>
        </CardContent>
          </Card>
          </Item>
        </Grid>

        <Grid  size={{ xs: 2, sm: 4, md: 4,}}>
          <Item sx={{width:"200px",padding:"0",margin:"0",marginRight:"3px"}}> 
          <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Total followers</Typography>
          <Typography>------</Typography>
        </CardContent>
          </Card>
          </Item>
        </Grid>

        <Grid  size={{ xs: 2, sm: 4, md: 4,}}>
          <Item sx={{width:"200px",padding:"0",margin:"0",marginRight:"3px"}}> 
        <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Total subscribers</Typography>
          <Typography>------</Typography>
        </CardContent>
          </Card>
          </Item>
        </Grid>

        <Grid  size={{ xs: 2, sm: 4, md: 4,}}>
          <Item sx={{width:"200px",padding:"0",margin:"0",marginRight:"3px"}}> 
        <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Revenue per month</Typography>
          <Typography>------</Typography>
        </CardContent>
          </Card>
          </Item>
        </Grid>
     
      </Grid>
    {/*--------------------------------3--------------------------------------------------*/} 
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Divide into two equal columns
      gap: '20px', // Space between the columns
      marginTop: '20px', // Add some margin on top
      padding: '10px',
      padding:"0",
      marginLeft:"0",marginRight:"0",marginBottom:"0",
      }}>

      <Item sx={{padding:"0",margin:"0", }}> 
        <Card variant="outlined" sx={{height:"430px"}}>
        <CardContent>
          <Typography level="title-md">last Blog </Typography>
          <Box>
          <LastPost/>
          </Box>
        </CardContent>
        </Card>
      </Item>

      <Item sx={{padding:"0",margin:"0",marginLeft:"10px"}}> 
        <Card variant="outlined" sx={{height:"430px"}}>
        <CardContent>
          <Typography level="title-md">last image</Typography>
          <Box>
          <LastPost/>
          </Box>
        </CardContent>
        </Card>
      </Item>
    </Box>
    {/*--------------------------------4--------------------------------------------------*/} 
    <Box sx={{
      // display: 'grid',
      // gridTemplateColumns: '1fr 1fr', // Divide into two equal columns
      // gap: '20px', // Space between the columns
      marginTop: '20px', // Add some margin on top
      // padding: '10px',
      paddingLeft:"0",
      marginLeft:"0",marginRight:"0",marginBottom:"0",
      width:"100%",
      backgroundColor:"pink"
      }}>
      <Item sx={{padding:"0",margin:"0"}}> 
        <Card variant="outlined" sx={{height:"430px",width:"100%"}}>
        <CardContent>
          <Typography level="title-md">Revenue vs month</Typography>
          <Revenue/>
        </CardContent>
        </Card>
      </Item>
    </Box>
    </Box>
    {/*---------------------------------Coloumn 3------------------------------------------------------------*/} 
    <Box>
      <BioCard/>
      <BasicDateCalendar/>
    </Box>
  </Box>
  </div>
  <div>
  </div>
  </>
)
}
export default Home;