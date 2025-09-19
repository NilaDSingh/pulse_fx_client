import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinearProgress from '@mui/material/LinearProgress';
import './FootprintCard.css'

// Homepage Footprint Card

export default function FootPrint(){
    const mockData = [
        {
            cardTitle:'EX Rating',
            value: '77/100',
            icon: <BarChartIcon />,
            desc:<LinearProgress sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#26a9f1' } }} variant="determinate" value={77}/>
        },
        {
            cardTitle:'Market Rate',
            value:'#2',
            icon: <StarBorderIcon />,
            desc:'Moved up 1 position'
        },
        {
            cardTitle:'Strong Channels',
            value: 3,
            icon:<TaskAltOutlinedIcon />,
            desc:'80+ score'
        },
        {
            cardTitle: 'Urgent Issues',
            value: 1,
            icon:<WarningAmberIcon/>,
            desc:'Needs attention'
        }
    ]

    const cardStyle = {
        width:'25%',
        backgroundColor:"#000812",
        border:1,
        borderColor:'#052032',
        borderRadius: '15px'
    }
    return(
        <div className='container'>
            {mockData.map((data:any, index)=>{
                return (
                <Card variant="outlined" sx={cardStyle}>
                    <CardContent>
                        <div className='card-title-icon'>
                            <div>
                            <Typography variant="body2" color="#a1a1a1" component="div">
                                {data.cardTitle}
                            </Typography>
                            <Typography variant="h6" color="white">
                                {data.value}
                            </Typography>
                            </div>
                            <div className={'card-'+index+'-icon'}>{data.icon}</div>
                        </div>
                        <div className={'data-'+index+'-desc'}>{data.desc}</div>
                    </CardContent>
                </Card>)
            })}
        </div>
    )
}