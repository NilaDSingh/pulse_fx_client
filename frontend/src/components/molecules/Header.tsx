import './Header.css'
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import SearchBar from "../atoms/SearchBar/SearchBar"
import Logo from "../atoms/Logo/Logo";
import LibraryMenu from "../atoms/LibraryMenu/LibraryMenu";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';



export default function Header(){
    return (
        <div className="header">
            <Logo/>
            <div><SearchBar></SearchBar></div>
            <div>
                <Button><NotificationsNoneIcon className='icons'/></Button>
                <Button><PersonOutlineOutlinedIcon className='icons'/></Button>
            </div>
        </div>
    )
}
