import * as React from 'react';
import { useState } from 'react';
import StatusCard from '../../atoms/StatusCard/StatusCard'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import './Automations.css'
// replace with fetched data
import {automationList} from '../../../services/MockData'

export default function Automations(){
    
    const [automationsCardData, setAutomationsCardData] =React.useState(
        [
            {
                icon:<AccountTreeOutlinedIcon sx={{fontSize:'1.5vw',color:'#50a2ff', background: 'rgba(80, 162, 255, .1)', padding:'0.3rem',borderRadius:'5px'}}/>,
                title:'Active Automations',
                value:automationList.active_automations
            },
            {
                icon:<QueryBuilderIcon sx={{fontSize:'1.5vw', color:'#ff8904', background: 'rgba(255, 137, 4, .1)', padding:'0.3rem',borderRadius:'5px'}}/>,
                title:'Pending Approval',
                value:automationList.pending_approvals
            },
            {
                icon:<ReportProblemOutlinedIcon sx={{fontSize:'1.5vw', color: '#ff6467', background: 'rgba(255, 100, 103, .1)', padding:'0.2rem',borderRadius:'5px'}}/>,
                title:'Urgent Items',
                value:automationList.urgent
            },
            {
                icon:<MonitorHeartOutlinedIcon sx={{fontSize:'1.5vw', color: '#05df72', background: 'rgba(5, 233, 144, .1)', padding:'0.3rem',borderRadius:'5px'}}/>,
                title:'Active Agents',
                value:automationList.active
            },
            {
                icon:<TaskAltOutlinedIcon sx={{fontSize:'1.5vw', color:'#56515aff', background: 'rgba(194, 122, 255, .1)', padding:'0.3rem',borderRadius:'5px'}}/>,
                title:'Success Rate',
                value:automationList.success_rate
            },
            {
                icon:<CandlestickChartOutlinedIcon sx={{fontSize:'1.5vw', color:'#00d3f2', background: 'rgba(0, 211, 242, .1)', padding:'0.3rem',borderRadius:'5px'}}/>,
                title:'Actions Today',
                value:automationList.actions_today
            }
        ]
    )

    return(
        <div className='automations-container'>
            <div className='automations-subtitle'>Manage workflows, approve changes, and monitor AI agents</div>
            <div className='status-cards'>
            {
                automationsCardData.map((d:any)=>{
                    return(
                    <div>
                        <StatusCard data={d}/>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}