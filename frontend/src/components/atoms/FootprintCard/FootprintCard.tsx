import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinearProgress from '@mui/material/LinearProgress';
import './FootprintCard.css'
import { green } from '@mui/material/colors';
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
            icon:<CheckCircleOutlineIcon />,
            desc:'80+ score'
        },
        {
            cardTitle: 'Urgent Issues',
            value: 1,
            icon:<WarningAmberIcon/>,
            desc:'Needs attention'
        }
    ]
    return(
        <div className='container'>
            {mockData.map((data:any, index)=>{
                return (
                <Card variant="outlined" className={'card-'+index} sx={{ width: '25%', backgroundColor:"#000812"}}>
                    <CardContent>
                        <div className='card-title-icon'>
                            <div>
                            <Typography variant="body2" color="gray" component="div">
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