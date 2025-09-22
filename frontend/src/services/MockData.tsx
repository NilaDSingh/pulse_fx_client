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
export const automationList={
    active_automations:4,
    pending_approvals:4,
    urgent:1,
    active:4,
    success_rate:'94%',
    actions_today:847,
    automations:[
        {
            title:'Auto-respond to Low Risk Reviews',
            agent:'Liaison',
            next_run:'On trigger',
            success_rate:'94%',
            tags:['reviews', 'response','engagement'],
            trigger:'Positive review (4-5 stars) recieved',
            priority:'medium',
            status:'active',
            executions: 89, 
            avg_response:2.3,
            approval_required: true,
            active:true,
            approvals:[
                {
                    created:'5 minutes ago',
                    task:'Thank Customer for 5-Star Review',
                    risk:'low',
                    type:'content',
                    approved:false,
                    estimated_impact: 'Positive customer engagement, improved response time',
                    summary_description:'Generated thank-you response for Google Business review',
                    response:'Thank you so much for the wonderful 5-star review',
                    platform:'Google',
                    summary:{
                        'Response Text': 'Thank you so much for the wonderful 5-star review',
                        'Platform':'Google Business Profile',
                        'Review Rating':'5 stars'
                    }
                }
            ]
        },
        {
            title:'Content Performance Optimization',
            agent:'Analyst',
            next_run:'Paused',
            success_rate:'87%',
            tags:['content', 'optimization','analytics'],
            trigger:'Engagement rate drops below 2.5%',
            priority:'low',
            status:'paused',
            executions:'23',
            avg_response:2.3,
            approval_required:true,
            active:false,
            approvals:[
                {
                    created:'5 minutes ago',
                    task:'Thank Customer for 5-Star Review',
                    risk:'low',
                    type:'content',
                    approved:false,
                    estimated_impact: 'Positive customer engagement, improved response time',
                    summary_description:'Generated thank-you response for Google Business review',
                    response:'Thank you so much for the wonderful 5-star review',
                    platform:'Google',
                    summary:{
                        'Response Text': 'Thank you so much for the wonderful 5-star review',
                        'Platform':'Google Business Profile',
                        'Review Rating':'5 stars'
                    }
                }
            ]
        },
        {
        title:'Monitor Google Business Profile Rating',
        agent:'Sentinel',
        next_run:'Continuous',
        success_rate:'98%',
        tags:['reviews', 'monitoring','critical'],
        trigger:'Engagement rate drops below 2.5%',
        priority:'high',
        status:'active',
        executions:'247',
        avg_response:2.3,
        approval_required:false,
        active:false,
        approvals:[
            {
                created:'6 hours ago',
                task:'Alert: Rating Dropped to 4.2 Stars',
                risk:'critical',
                type:'publish',
                approved:false,
                estimated_impact: 'Immediate attention needed to prevent further reputation damage',
                summary_description:'Generated thank-you response for Google Business review',
                response:'Thank you so much for the wonderful 5-star review',
                platform:'Google',
                summary:{
                    'Previous Rating': '4.7 stars',
                    'Current Rating:':'4.2 stars',
                    'Recent Reviews':'3 negative reviews in past 24 hours'
                    }
                }
            ]
        }
    ]
}

export const liveMonitoring={
    running:1, 
    pending:2,
    completed:1,
    failed:1,
    tasks:[
        {
            task:'Monitor Google Business Profile Reviews',
            type:'Monitor Reviews',
            agent:'Scout',
            step:'2/4',
            time:'5m 0s',
            status:'running',
            progress:80
        },
        {
            task:'Auto Respond to Social Media Mentions',
            type:'Send Response',
            agent:'Liaison',
            step:'1/3',
            time:'15m 0s',
            status:'pending approval',
            progress:0
        },
        {
            task:'Optimize Website Performance',
            type:'Performance Analysis',
            agent:'Analysis',
            step:'5/5',
            time:'15m 0s',
            status:'completed',
            progress:0
        },
        {
            task:'Update Outdated Business Information',
            type:'Update Profile',
            agent:'Curator',
            step:'2/4',
            time:'5m 0s',
            status:'failed',
            progress:0
        }
    ]
}

export const agents = [
    {
        type:'Scout',
        status:'active',
        current_task:'Monitoring competitor mentions',
        reliability:96,
        speed:89,
        accuracy:94,
        last_active:'2 minutes ago',
        automations:3,
        tags:['Web scraping', 'social listening', 'Trend analysis']
    },
    {
        type:'Sentinel',
        current_task:'Processing review alerts',
        reliability:98,
        speed:92,
        accuracy:97,
        last_active:'30 minutes ago',
        automations:5,
        tags:['Real-time monitoring', 'alert management', 'threat detection']
    }
]

export const templates=[
    {
        title:'Review Response Automation',
        level:'beginner',
        description:'Automatically respond to customer reviews based on sentiment and rating',
        duration:'10 minutes',
        uses:'142',
        tags:['reviews', 'customer service', 'automation'],
        workflow:{
            trigger:'New review recieved',
            conditions:'Rating > 3 stars, Sentiment is positive',
            actions:'Generate response, Post reply, Log interaction'
        }
    },
    {
        title:'SEO Health Monitoring',
        level:'intermediate',
        description:'Monitor and fix common SEO issues automatically',
        duration:'25 minutes',
        uses:'89',
        tags:['seo', 'website', 'monitoring'],
        workflow:{
            trigger:'Weekly schedule',
            conditions:'Broken links detected, Missing meta descriptions',
            actions:'Fix links, Generate descriptions, Update sitemap'
        }
    }
]

export const statusMenu = [
    'All Status',
    'Active',
    'Paused',
    'Draft',
    'Error'
]
