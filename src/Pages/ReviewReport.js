import React from 'react';
import Footer from '../Component/footer';
import Sidebar from "../Component/Sidebar";
import Topbar from "../Component/Topbar";
import EachReviewReport from "../Component/EachReviewReport";
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

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

function ReviewReport() {
  return (
    <>
      <Sidebar>
        <div>
          <Topbar />
        </div>
        <Grid
          container
          spacing={2} // Adjust spacing between grid items
          sx={{ flexGrow: 1, marginTop: "10px", padding: "0", width: "100%" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0" }}>
              <EachReviewReport />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0" }}>
              <EachReviewReport />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0" }}>
              <EachReviewReport />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0" }}>
              <EachReviewReport />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0",}}>
              <EachReviewReport />
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ width: "100%", padding: "0", margin: "0" }}>
              <EachReviewReport />
            </Item>
          </Grid>
        </Grid>

        <div>
          <Footer />
        </div>
      </Sidebar>
    </>
  );
}

export default ReviewReport;
