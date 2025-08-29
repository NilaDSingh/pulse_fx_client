import * as React from 'react';
import './Header.css'
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import NavBar from '../../atoms/NavBar/NavBar'
import SearchBar from "../SearchBar/SearchBar"
import Logo from "../../atoms/Logo/Logo";

type HeaderProps = {
  tab1?:JSX.Element;
  tab2?:JSX.Element;
  tab3?:JSX.Element;
};

export default function Header({tab1, tab2, tab3}: HeaderProps){
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
                </div>
            </div>
                <Divider sx={{ bgcolor: 'primary.light' }}/>
                <NavBar tab1={tab1} tab2={tab2} tab3={tab3}></NavBar>
        </div>
    )
}
