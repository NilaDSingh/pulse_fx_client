import './Home.css'
import { 
    Card, 
    CardHeader, 
    Button,
    CardContent
} from '@mui/material';

import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FootPrint from '../../atoms/FootprintCard/FootprintCard';
import RecommendedActionsCard from '../../molecules/RecommendedActionsCard/RecommendedActionsCard'
import { recommendedData, connectedChannels } from './MockData'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ChannelHealth from '../../molecules/ChannelHealth/ChannelHealth';
import QuickWinsFooter from '../../molecules/QuickWinsFooter/QuickWinsFooter';

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
    console.log('home',connectedChannels)
    return(
    <div className='home-container'>
        <div className='footprint-overview'>
        </div>
        <div className='footprint-card-container'>
            <FootPrint />
        </div>
        <div className='actions-channel-container'>
        <div className="recommended-actions-container">
            <Card 
                sx={{backgroundColor:"#000812", color:'white', border:1, borderColor:'#052032', borderRadius: '15px', height:'30rem'}} title="AI Recommended Actions">
                    <div className='recommendations-header'>
                        <CardHeader
                            avatar={<AutoAwesomeOutlinedIcon sx={{color:'#c27aff'}}></AutoAwesomeOutlinedIcon>}
                            title="Quick Wins Available"
                            subheader='AI found opportunities to boost your score'
                        />
                        <div className='ai-powered'><PsychologyIcon sx={{fontSize:"small"}}/> AI Powered</div>
                    </div>
                    <CardContent>
                        {recommendedData.map((e:any) => {
                            return(
                            <RecommendedActionsCard data={e}
                            />)
                        })} 
                    </CardContent>
                <div><QuickWinsFooter></QuickWinsFooter></div>
            </Card>
        </div>
        <div className='connected-channels'>
            <ChannelHealth connectedChannels={connectedChannels}></ChannelHealth>
        </div>
        </div>
    </div>
    )
}