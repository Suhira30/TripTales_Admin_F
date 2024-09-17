import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function Notification() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

//   const handleBadgeVisibility = () => {
//     setInvisible(!invisible);
//   };

  return (
      <div>
        <Badge color="error" badgeContent={count}>
          <EmailOutlinedIcon  sx={{color:"#ffffff"}}/>
        </Badge>
        
      </div>
     
  );
}
