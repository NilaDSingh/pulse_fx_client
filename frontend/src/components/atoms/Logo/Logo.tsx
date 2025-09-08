import './Logo.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

// Pulse FX Logo

export default function Logo() {
    return (
        <div className='logo-container'>
            <div><AutoAwesomeOutlinedIcon fontSize='small' sx={{marginRight:'1rem', backgroundColor:'#062337', padding:'0.5rem', borderRadius:'15px', color:'#26a9f1'}}/></div>
            <div>
                <p className="pulse-fx">Pulse FX</p>
                <p className="description">Digital Footprint Intelligence</p>
            </div>
        </div>
    )
}