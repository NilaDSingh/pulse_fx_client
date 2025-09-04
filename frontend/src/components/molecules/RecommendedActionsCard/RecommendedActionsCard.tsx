import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ImpactCard from '../../atoms/ImpactCard/ImpactCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';import './RecommendedActionsCard.css'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
export default function RecommendedActionsCard(data: any){
    // must change warning icon with appropriate logic

    const cardStyle = {
        border:1,
        borderColor: '#052032',
        backgroundColor:'#000812',
        borderRadius: '15px'

    }

    const cardSpecStyle = {
        fontSize:'x-small', 
        color: "#a1a1a1", 
        marginRight: '1rem'
    }

    const titleStyle = {
        color:'white', 
        fontSize:'medium',
        marginLeft:'6px'
    }

    const subtitleStyle = {
        fontSize:'small', 
        color: "#a1a1a1",
        marginTop: '0.5rem'
    }
    
    return(
    <div>
        <Card sx={cardStyle}>
            <CardContent>
                <div className='first-line-container'>
                <div className="card-header">
                    <Typography>{data.data.icon}</Typography>
                    <Typography sx={titleStyle}> {data.data.title}</Typography>
                    <ImpactCard impact={data.data.impact}></ImpactCard>
                </div>
                <Button>
                    <EastIcon sx={{fontSize:"small",color:'white'}}/>
                </Button>
                </div>
                <Typography sx={subtitleStyle}>{data.data.desc}</Typography>
                <div className="card-specs">
                    <Typography sx={cardSpecStyle}><TrendingUpIcon sx={{fontSize:'x-small'}}/>{data.data.pts}</Typography>
                    <Typography sx={cardSpecStyle}><CalendarTodayIcon sx={{fontSize:'x-small'}}/> {data.data.time}</Typography>
                    <ImpactCard impact={data.data.category}></ImpactCard>
                </div>

            </CardContent>
        </Card>
    </div>
)
}