import './Home.css'
import { Card, CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import NavBar from '@/components/atoms/NavBar/NavBar';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FootPrint from '../../atoms/FootprintCard/FootprintCard';

const buttonStyles={
    color: 'white',
    textTransform: 'none',
    backgroundColor:'#26a9f1',
    fontSize:'0.7rem',
    marginRight:'0.5rem'
}

const cardStyles={
    color: 'white',
    backgroundColor:'#00060e',
    '& .MuiCardHeader-subheader': {
      color: '#a1a1a1',
      fontSize:'0.8rem',
      paddingTop:'0.2rem'
    },
}

export default function Home(){
    return(
    <div className='home-container'>
        <div className='footprint-overview'>
            <div>
            <Card>
                <CardHeader
                    sx={cardStyles}
                    title="Digital Footprint Overview"
                    subheader="Your AI-powered Digital Presence Intelligence Dashboard"
                />
            </Card>
         </div>
         <div>
            <Button sx={buttonStyles} variant='outlined' startIcon={<PsychologyIcon />}>AI Modeling Lab</Button>
            <Button sx={buttonStyles} variant='outlined' startIcon={<RocketLaunchIcon/>}>Quick Actions</Button>
         </div>
        </div>
        <div className='footprint-card-container'>
            <FootPrint />
        </div>
    </div>
    )
}