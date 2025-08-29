
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

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

  return (
    <div>
      <Button
        className="library-button"
        onClick={anchorMenu}
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
        <StyledListHeader>
          <div>Prompt Library<div>Pre-built commands for common tasks</div></div>
        </StyledListHeader>
        {menuItems.map((item, itemIndex)=>{
          return(
          <React.Fragment key={item.header}>
            <ListSubheader>{item.header}</ListSubheader>
            {item.options.map((option, optionIndex) => {
              return(<MenuItem key={`${itemIndex}-${optionIndex}`} onClick={()=>setOption(option)}>{option}</MenuItem>)
            })}
          </React.Fragment>)
        })}
      </Menu>
    </div>
  );
}