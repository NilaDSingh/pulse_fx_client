import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

export const recommendedData = [
    {
        icon:<WarningAmberIcon sx={{color:'#ff6467', fontSize:'small'}}/>,
        title:'Claim unclaimed Yelp listing',
        desc:'Your Yelp listing is unclaimed with 4 unresponded reviews',
        pts:'+15-20 pts',
        time:'30 min',
        impact:'High Impact',
        category:'Critical Fix'
    },
    {
        icon:<BoltOutlinedIcon sx={{color:'#fdc700', fontSize:'medium'}}/>,
        title:'Get Instagram Verification',
        desc:'Verification badge will boose credibility',
        pts:'+15-20 pts',
        time:'30 min',
        impact:'Medium Impact',
        category:'Growth Opportunity'

    },
    {
        icon:<TrackChangesOutlinedIcon sx={{color:'#50a2ff', fontSize:'small'}}/>,
        title:'Add more Google Business photos',
        desc:'Businesses with more photos get 42% moe requests',
        pts:'+15-20 pts',
        time:'30 min',
        impact:'Medium Impact',
        category:'Optimization'
    }
]