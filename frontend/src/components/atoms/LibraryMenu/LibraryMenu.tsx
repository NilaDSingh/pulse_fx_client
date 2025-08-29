
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

// export default function GroupedMenu() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [openMenu, setOpenMenu] = React.useState(false)
//   const [menuOption, setMenuOption] = React.useState<string>('')
//   const open = Boolean(openMenu);


//   const toggleMenu = () => {
//     setOpenMenu(!openMenu)
//     console.log(openMenu)
//   }

//   const selectOption = (event: SelectChangeEvent<typeof menuOption>) => {
//     console.log(event)
//   }

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(e.currentTarget);
//     console.log(e.currentTarget)
//     toggleMenu()
//   };

//   const handleClose = () => {
//     setOpenMenu(false);
//   };

//   return (
//     <div>
//       <button
//         id="library-button"
//         onClick={toggleMenu}
//       >
//         Library
//       </button>
//       <Menu
//         id="library-menu"
//         onChange={selectOption}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={toggleMenu}
//         slotProps={{
//           list: {
//             'aria-labelledby': 'basic-button',
//             sx: {
//               py: 0,
//             },
//           },
//         }}
//       >
//         <StyledListHeader>Category 1</StyledListHeader>
//         <MenuItem onClick={toggleMenu} value="Option 1">Option 1</MenuItem>
//         <MenuItem onClick={toggleMenu} value="Option 2">Option 2</MenuItem>
//         <StyledListHeader>Category 2</StyledListHeader>
//         <MenuItem onClick={toggleMenu} value="Option 3">Option 3</MenuItem>
//         <MenuItem onClick={toggleMenu} value="Option 4">Option 4</MenuItem>
//       </Menu>
//     </div>
//   );
// }


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState<string>("")
  const open = Boolean(anchorEl);

  // anchors options to library menu button for display purposes
  const anchorMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // reverts anchor options to library menu button
  const handleClose = () => {
    setAnchorEl(null);
  };

  // selects menu option and closes menu
  const setOption = (event: any) => {
    console.log(event.target.value)
    setSelectedOption(event.target.value)
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
        slotProps={{}}
      >
        <StyledListHeader>Category 1</StyledListHeader>

        <StyledListHeader>Monitoring</StyledListHeader>
        <MenuItem onClick={setOption} value={1}>Watch Google</MenuItem>
        
        <StyledListHeader>Fixes & Updates</StyledListHeader>
        <MenuItem onClick={setOption} value={2}>Fix Broken Links</MenuItem>
        
        <StyledListHeader>Growth & Engagement</StyledListHeader>
        <MenuItem onClick={setOption} value={3}>grow engagement</MenuItem>
        
        <StyledListHeader>Content & Publishing</StyledListHeader>
        <MenuItem onClick={setOption} value={3}>publish case study</MenuItem>
        
        <StyledListHeader>Analysis & Benchmarking</StyledListHeader>
        <MenuItem onClick={setOption} value={3}>Benchmark</MenuItem>
      </Menu>
    </div>
  );
}