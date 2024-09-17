import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/joy/Divider';
export default function  EachReviewReport() {
    
  return (
    <Card
      variant="outlined"
      sx={{
        // width: 400,
        // to make the card resizable
        marginTop:"25px"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Aligns items vertically centered
          gap: 2, // Space between Avatar and Name
        }}
      >
       
       <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <Typography level="title-lg">NYC Coders</Typography>
      </Box>

      <CardContent sx={{maxHeight:"120px",overflow:"hidden"}} >
        <Divider />
        <Typography level="body-sm">
          We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.
        </Typography>
      </CardContent>

    </Card>
  );
}