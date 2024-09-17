import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/joy/Box';

// export default function BasicDateCalendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <Box sx={{ width: '50px' ,backgroundColor:"pink"}}> 
//       <DateCalendar />
//       </Box>
//     </LocalizationProvider>
//   );
// }
// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

function BasicDateCalendar() {
  
    return (
        <div style={{ marginTop: "20px" }}>
        <div style={{ backgroundColor: '#fbfcfe', paddingTop: '10px', borderRadius: '8px',paddingLeft:"0px",border:"solid",borderWidth:"1px",borderColor:"#cfd7e0" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: '260px',padding: "0px", margin: "0px" }}>
              <DateCalendar sx={{ width: '100%', padding: "0px", margin: "0px" }} />
            </Box>
          </LocalizationProvider>
        </div>
      </div>
    );
  }
  
  export default BasicDateCalendar;