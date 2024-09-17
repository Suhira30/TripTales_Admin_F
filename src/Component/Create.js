// import * as React from 'react';
// import { styled } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import Grid from '@mui/joy/Grid';

// const Item = styled(Sheet)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography['body-sm'],
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   borderRadius: 4,
//   color: theme.vars.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: theme.palette.background.level1,
//   }),
// }));

// export default function ResponsiveGrid() {
//   return (
//     <Grid
//       container
//       spacing={{ xs: 2, md: 3 }}
//       columns={{ xs: 4, sm: 8, md: 12 }}
//       sx={{ flexGrow: 1,marginTop:"10px",padding:"0",width:"99.5%",marginLeft:"2px",backgroundColor:"purple"
//       }}
//     >
//       {Array.from(Array(2)).map((_, index) => (
//         <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
//           <Item>{index + 1}</Item>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
