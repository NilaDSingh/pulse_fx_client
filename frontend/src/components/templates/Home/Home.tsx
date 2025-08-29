import './Home.css'
import { Card, CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import NavBar from '@/components/atoms/NavBar/NavBar';

const buttonStyles={
    color: 'white',
    textTransform: 'none',
    backgroundColor:'#26a9f1',
    fontSize:'0.7rem',
}

const cardStyles={
    color: 'white',
    backgroundColor:'#00060e',
    '& .MuiCardHeader-subheader': {
      color: '#a1a1a1'
    },
}

export default function Home(){
    return(
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
             <Button sx={buttonStyles} variant='outlined'>AI Modeling Lab</Button>
            <Button sx={buttonStyles} variant='outlined'>Quick Actions</Button>
         </div>
        </div>
    )
}