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
        id:0,
        version:1.0,
        agent:'Curator',
        asset:'website',
        title:'Updated meta descriptions',
        description:'optimized meta description for 3 product pages to improve SEO performance',
        reason:'Analysis showed meta descriptions were too short and missing target keywords',
        impact_data:{
            chart_title:'Review Sentiment',
            before:'2.3%',
            after:'3.1%',
            change:'+34.8'
        },
        tag:'automated',
        time:'02:32 PM',
        date:'1/15/2024'
    },
    {
        id:1,
        version:1.1,
        agent:'Liaison',
        asset:'LinkedIn',
        title:'Published case study',
        description:'Posted "Airport CX Transformation case study with expert tone',
        reason:'Scheduled content publication as part of thought leadership and strategy',
        impact_data:{
            chart_title:'Page Load Success',
            before:'2.1%',
            after:'2.4%',
            change:'+14.3'
        },
        tag:'automated',
        time:'02:32 PM',
        date:'1/15/2024'
    },
    {
        id:2,
        version:1.2,
        agent:'Publisher',
        asset:'Google Business Profile',
        title:'Updated business hours',
        description:'Modified operating hours for holiday schedule',
        reason:'Manual update requested for holiday hours adjustment',
        impact_data:{
            chart_title:'Click-Through Rate',
            before:'2.1%',
            after:'2.4%',
            change:'+14.3'
        },
        tag:'manual',
        time:'02:32 PM',
        date:'1/15/2024'
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

// data for Automations tab
const generalInfo={
        'Active Automations':4,
        'Pending Approval':'4',
        'Urgent Items':1,
        'Active Agents':4,
        'Success Rate':'94%',
        'Actions Today':847
}
const automationList=[
    {
        title:'Auto-respond to Low Risk Reviews',
        agent:'Liaison',
        next_run:'On trigger',
        success_rate:'94%',
        tags:['reviews', 'response','engagement'],
        requires_approval:true,
        trigger:'Positive review (4-5 stars) recieved',
        priority:'medium',
        status:'active',
        executions: 89, 
        ave_response:2.3
    },
    {
        title:'Content Performance Optimization',
        agent:'Agent',
        next_run:'Paused',
        success_rate:'87%',
        tags:['content', 'optimization','analytics'],
        requires_approval:true,
        trigger:'Engagement rate drops below 2.5%',
        priority:'low',
        status:'paused',
        executions:'23',
        avg_response:2.3
    }
]

const executionlog=[
    {
        task:'Review response posted',
        triggered:'2 hours ago',
        time_taken:1.3
    },
    {
        task:'Profile updated',
        triggered:'5 hours ago',
        time_taken:2.1
    }
]

