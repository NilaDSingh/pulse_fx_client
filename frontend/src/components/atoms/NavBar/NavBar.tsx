import * as React from 'react';
import { Tabs, Tab, Box, Typography, makeStyles } from '@mui/material';
import { useState } from 'react';
import { color } from 'framer-motion';

export default function NavBar() {
  const [tab, setTab] = React.useState(0);
  let tabTitles = ["Footprint Studio", "Automations & Approvals", "Change Log"]

  const tabStyles = {
    fontSize:'0.7rem',
    fontWeight:'bold',
    textTransform: 'none',
    minWidth: 30,
    height: 10,
    color: "#a1a1a1"
  }

  // uses index of tab to select
  const handleChange = (event:any, selected:number) => {
    console.log(selected)
    setTab(selected)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} onChange={handleChange}>
        {tabTitles.map((tab)=>{return(<Tab sx={tabStyles} label={tab}></Tab>)})}
      </Tabs>
      {tab === 0 && <Typography>Content for Tab One</Typography>}
      {tab === 1 && <Typography>Content for Tab Two</Typography>}
      {tab === 2 && <Typography>Content for Tab Three</Typography>}
    </Box>
  )
}