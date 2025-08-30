import * as React from 'react';
import { Tabs, Tab, Box, Typography, makeStyles, Divider } from '@mui/material';
import { useState } from 'react';
import { color } from 'framer-motion';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

type CustomTabProps = {
  tab1?:JSX.Element;
  tab2?:JSX.Element;
  tab3?:JSX.Element;
};

export default function NavBar({tab1, tab2,tab3}: CustomTabProps) {
  const [tab, setTab] = React.useState(0);
  let tabTitles = [
    {
      icon: <HomeOutlinedIcon fontSize='small'/>,
      title:"Home"
    }, 
    {
      icon: <SettingsOutlinedIcon fontSize='small'/>, 
      title:"Automations"
    },
    {
      icon: <WatchLaterOutlinedIcon fontSize='small'/>,
      title:"Activity"
    }
  ]

  const tabStyles = {
    fontSize:'0.7rem',
    fontWeight:'bold',
    textTransform: 'none',
    minWidth: 30,
    color: "#a1a1a1",
  }

  // uses index of tab to select
  const handleChange = (event:any, selected:number) => {
    console.log(selected)
    setTab(selected)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs sx={{height:'3.5rem', marginTop:'-1rem'}} value={tab} onChange={handleChange}>
        {tabTitles.map((tab)=>{return(<Tab disableRipple sx={tabStyles} label={tab.title} icon={tab.icon} iconPosition="start"></Tab>)})}
      </Tabs>
      <Divider sx={{ bgcolor: 'primary.light' }}/>
      {tab === 0 && <Typography>{tab1}</Typography>}
      {tab === 1 && <Typography>{tab2}</Typography>}
      {tab === 2 && <Typography>{tab3}</Typography>}
    </Box>
  )
}