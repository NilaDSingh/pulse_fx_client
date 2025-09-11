import * as React from 'react';
import { Tabs, Tab, Box, Typography, makeStyles, Divider } from '@mui/material';
import { useState } from 'react';
import { color } from 'framer-motion';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Button from '@mui/material/Button';
import { BorderAllRounded } from '@mui/icons-material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Activity from '../../templates/Activity/Activity';
import './NavBar.css'
type CustomTabProps = {
  tab1?:JSX.Element;
  tab2?:JSX.Element;
};


const tabStyles1 = {
    fontSize:'0.7rem',
    fontWeight:'bold',
    textTransform: 'none',
    minWidth: 30,
    color: "#a1a1a1",
    border:'5px, solid yellow',
  }

  const tabStyles2={
    fontSize:'0.7rem',
    fontWeight:'bold',
    textTransform: 'none',
    minWidth: 30,
    color: "#a1a1a1",
    border:'1px, solid purple',
  }

  const buttonStyles={
    color: 'white',
    textTransform: 'none',
    backgroundColor:'#26a9f1',
    fontSize:'0.7rem',
    marginRight:'0.5rem'
}

export default function NavBar({tab1, tab2}: CustomTabProps) {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [prevTabName, setPrevTabName] = React.useState('Home');

  const [tabStyle, setTabStyle] =React.useState(tabStyles1);
  let tabTitles = [
    {
      icon: <HomeOutlinedIcon sx={{marginRight:'0.5rem', fontSize:'medium'}}/>,
      title:"Dashboard"
    }, 
    {
      icon: <SettingsOutlinedIcon sx={{marginRight:'0.5rem', fontSize:'medium', color:currentTab==1?'#bb7cfe':''}}/>, 
      title:"Automations"
    },
    {
      icon: <WatchLaterOutlinedIcon sx={{marginRight:'0.5rem', fontSize:'medium', color:currentTab==2?'#05df72':''}}/>,
      title:"Activity"
    }
  ]
  // uses index of tab to select
  const setTab = (index:number, id:string) => {
    setCurrentTab(index)    
  };

  return (
    <Box sx={{ width: '100%'}}>
            <Divider sx={{ bgcolor: '#052032' }}/>

      <ButtonGroup  sx={{height:'3rem', placeItems:'center'}}>
        {tabTitles.map((tab, index)=>{return(<button id={tab.title} className={currentTab==index?'selected':'unselected'} onClick={() => setTab(index, tab.title)}>{tab.icon}{tab.title}</button>)})}
      </ButtonGroup>
      <Divider sx={{ bgcolor: '#052032' }}/>
      {currentTab === 0 && <Typography>{tab1}</Typography>}
      {currentTab === 1 && <Typography>{tab2}</Typography>}
      {currentTab === 2 && <div className='tab3'><Activity/></div>} 
    </Box>
  )
}