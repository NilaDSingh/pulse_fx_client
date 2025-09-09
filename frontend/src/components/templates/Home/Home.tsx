import './Home.css'
import { 
    Card, 
    CardHeader, 
    Button,
    CardContent
} from '@mui/material';

import FootPrint from '../../atoms/FootprintCard/FootprintCard';
import RecommendedActionsCard from '../../molecules/RecommendedActionsCard/RecommendedActionsCard'
import { recommendedData, connectedChannels } from './MockData'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ChannelHealth from '../../molecules/ChannelHealth/ChannelHealth';
import QuickWinsFooter from '../../molecules/QuickWinsFooter/QuickWinsFooter';
import './Home.css'

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
                sx={{backgroundColor:"#000812", color:'white', border:1, borderColor:'#052032', borderRadius: '15px', height:'35rem'}}>
                    <div className='recommendations-header'>
                        <CardHeader
                            avatar={<AutoAwesomeOutlinedIcon sx={{color:'#c27aff'}}></AutoAwesomeOutlinedIcon>}
                            title="Quick Wins Available"
                            subheader='AI found opportunities to boost your score'
                        />
                    </div>
                    <CardContent>
                        {recommendedData.map((e:any) => {
                            return(
                            <RecommendedActionsCard data={e}
                            />)
                        })} 
                    </CardContent>
                    
                    <CardContent>
                        <QuickWinsFooter></QuickWinsFooter>
                    </CardContent>

            </Card>
        </div>
        <div className='connected-channels'>
            <ChannelHealth connectedChannels={connectedChannels}></ChannelHealth>
        </div>
        </div>
    </div>
    )
}