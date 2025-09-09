import HealthPins from "../../atoms/HealthPins/HeathPins"
import './ChannelHealth.css'
import { 
    Card, 
    CardContent,
    Modal,
    Typography,
    Button
} from '@mui/material';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function ChannelHealth(data:any){
    const channelCardStyle={
        border:'1px solid #052032',
        backgroundColor:'#00060e',
        color:'white',
        borderRadius:'15px',
        height:'35rem'
    }
    
    console.log('Channel health')

    return(
    <div className='channel-health-container'>
        <Card sx={channelCardStyle}>
            <CardContent>
                <Typography sx={{display:'flex'}}><MonitorHeartOutlinedIcon fontSize="small" sx={{marginRight:"0.5rem"}}/>Channels</Typography>
                <Card sx={{backgroundColor:'#02101d', border:'1px solid #052032', marginTop:'1rem', borderRadius: '15px'}}>
                    <CardContent>
                        <div className="channel-subcard">
                            <Typography sx={{display:'flex', fontSize:'small'}}>
                                <PsychologyIcon fontSize='small' sx={{color:'#26a9f1', marginRight:'rem'}}/>AI Discovery
                            </Typography>
                                <Button sx={{textTransform:'none',color:'white', backgroundColor:'#26a9f1', height:'1.5rem', fontSize:'x-small'}} >
                                    <SearchOutlinedIcon sx={{fontSize:'small'}}/>Scan
                                </Button>
                        </div>
                        <div className="channel-subtitle">Click Scan to discover your social profiles</div>
                    </CardContent>
                </Card>
                <div className='connected-subtitle'>Connected ({data.connectedChannels.length}) </div>
                <HealthPins data={data.connectedChannels}></HealthPins>
            </CardContent>
        </Card>
    </div>
)
}