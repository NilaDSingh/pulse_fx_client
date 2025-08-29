
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {
  ListSubheader,
  Typography,
  Box,
} from '@mui/material';

const StyledListHeader = styled(ListSubheader)({
  backgroundImage: 'var(--Paper-overlay)',
});

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState<string>("")
  const open = Boolean(anchorEl);

  let menuItems=[
    {
      header:"Monitoring",
      options:[
        "watch Google Business Profile for rating drops below 4.2 every day",
        "monitor website traffic drops > 20% weekly",
        "track brand mentions sentiment daily"
      ]},
    {
      header: "Fixes & Updates",
      options: [
        "fix broken links on company website by Friday mode:auto",
        "update business hours across all platforms",
        "claim unclaimed Yelp listing"
      ]},
    {
      header: "Growth & Engagment",
      options:[
        "grow engagement rate to 3.5% by 60d using content_velocity=high",
        "increase LinkedIn followers by 500 monthly",
        "boost local search ranking to top 3"
    ]}
  ]

  // anchors options to library menu button for display purposes
  const anchorMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // reverts anchor options to library menu button
  const handleClose = () => {
    setAnchorEl(null);
  };

  // selects menu option and closes menu
  const setOption = (option:string) => {
    console.log("item selected", option)
    setSelectedOption(option)
    handleClose()

  }

  const headerStyle ={
    fontSize:'0.7rem',
    fontWeight: 'bold',
    color: 'black'
  }

    const menuItemStyle ={
    fontSize:'0.6rem',
    color: 'gray'
  }

  return (
    <div>
      <Button
        className="library-button"
        onClick={anchorMenu}
        variant='outlined'
        size='small'
        startIcon={<LibraryBooksOutlinedIcon/>}
        sx={{ 
            backgroundColor: '#010911', 
            color: 'white', 
            textTransform: 'none' 
            }}
      >
        Library
      </Button>
      <Menu
        className="library-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          width:'100%',
          height:'25rem'
        }}
      >
        <ListSubheader disableSticky>
        <Box>
          <Typography sx={headerStyle}>Prompt Library</Typography>
          <Typography sx={menuItemStyle}>Pre-built commands for common tasks</Typography>
        </Box>
        </ListSubheader >
        <Divider sx={{paddingBottom:'0.5rem'}}></Divider>
        {menuItems.map((item, itemIndex)=>{
          return(
          <React.Fragment key={item.header}>
            <div><ListSubheader  sx={headerStyle} ><LightbulbOutlinedIcon  sx={headerStyle} /> {item.header}</ListSubheader></div>
            {item.options.map((option, optionIndex) => {
              return(<MenuItem sx={menuItemStyle} key={`${itemIndex}-${optionIndex}`} onClick={()=>setOption(option)}>{option}</MenuItem>)
            })}
          </React.Fragment>)
        })}
      </Menu>
    </div>
  );
}