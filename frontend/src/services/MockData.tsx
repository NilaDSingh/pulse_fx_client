import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import ImpactMeasured from '@/components/atoms/ImpactMeasured/ImpactMeasured';

export const recommendedData = [
    {
        icon:<WarningAmberIcon sx={{color:'#ff6467', fontSize:'small'}}/>,
        title:'Claim unclaimed Yelp listing',
        desc:'Your Yelp listing is unclaimed with 4 unresponded reviews',
        pts: 20,
        time:'30 min',
        impact:'High Impact',
        category:'Critical Fix'
    },
    {
        icon:<BoltOutlinedIcon sx={{color:'#fdc700', fontSize:'medium'}}/>,
        title:'Get Instagram Verification',
        desc:'Verification badge will boose credibility',
        pts:10,
        time:'30 min',
        impact:'Medium Impact',
        category:'Growth Opportunity'

    },
    {
        icon:<TrackChangesOutlinedIcon sx={{color:'#50a2ff', fontSize:'small'}}/>,
        title:'Add more Google Business photos',
        desc:'Businesses with more photos get 42% moe requests',
        pts: 6,
        time:'30 min',
        impact:'Medium Impact',
        category:'Optimization'
    }
]

export const connectedChannels = 
    [
    
            {
                name:'Google Business Profile',
                rating:'91/100'
            },
    
            {
                name:'Company Website',
                rating:'88/100'
            },
    
            {
                name: 'Yelp',
                rating: '45/100'
            }
        ]


// data for Activity tab
export const activityData = [
    {
        agent:'curator',
        asset:'website',
        title:'Updated meta descriptions',
        description:'optimized meta description for 3 product pages to improve SEO performance',
        reason:'Analysis showed meta descriptions were too short and missing target keywords',
        ImpactMeasured:{
            before:'2.3%',
            after:'3.1%',
            change:'+34.8'
        },
        tag:'automated'
    },
    {
        agent:'Liaison',
        asset:'LinkedIn',
        title:'Published case study',
        description:'Posted "Airport CX Transformation case study with expert tone',
        reason:'Scheduled content publication as part of thought leadership and strategy',
        ImpactMeasured:{
            before:'2.1%',
            after:'2.4%',
            change:'+14.3'
        },
        tag:'automated'
    }
]

export const agentMenu=[
    'All Agents',
    'Scout',
    'Sentinel',
    'Curator',
    'Liaison',
    'Analyst',
    'Publisher'
]

export const assetMenu=[
    'All Assets',
    'LinkedIn',
    'Google Business Profile',
    'Analytics Dashboard',
    'Brand Monitoring'
]