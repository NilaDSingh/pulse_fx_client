import * as React from 'react';
import './Header.css'
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import NavBar from '../../atoms/NavBar/NavBar'
import SearchBar from "../SearchBar/SearchBar"
import Logo from "../../atoms/Logo/Logo";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';


export default function Header(){
    return (
        <div>
        <div className="header">
                <div className="left-items"><Logo/></div>
                <div className='center-col'>
                    <SearchBar></SearchBar>
                </div>
                <div className='right-items'>
                    <IconButton><NotificationsNoneIcon fontSize="small" className='icons'/></IconButton>
                    <IconButton><PersonOutlineOutlinedIcon  fontSize="small" className='icons'/></IconButton>
                    {/* <IconButton className="left-icons" sx={{ width: 40, height: 40, p: 0.5 }}><NotificationsNoneIcon  fontSize="small" className='icons'/></IconButton>
                    <IconButton className="left-icons" sx={{ width: 40, height: 40, p: 0.5 }}><PersonOutlineOutlinedIcon fontSize="small" className='icons'/></IconButton> */}
                </div>
            </div>
                <Divider sx={{ bgcolor: 'primary.light' }}/>
                <NavBar></NavBar>
        </div>
    )
}
