import './LibraryMenu.css'
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';

export default function LibraryMenu(){
    return(
        <Dropdown>
           <MenuButton>Library</MenuButton> 
        </Dropdown>
    )
}