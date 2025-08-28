import SearchBar from "../atoms/SearchBar/SearchBar"
import './Header.css'
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Header(){
    return (
        <div className="header">
            <div className="pulse-container">
                <h1 className="pulse-fx">Pulse FX</h1>
                <p className="description">Digital FootPrint Studio</p>
            </div>
            <div><SearchBar></SearchBar></div>
            <div>
                <Button><NotificationsNoneIcon className='icons'/></Button>
                <Button><PersonOutlineOutlinedIcon className='icons'/></Button>
            </div>
        </div>
    )
}
