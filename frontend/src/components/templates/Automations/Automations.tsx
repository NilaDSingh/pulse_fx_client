import * as React from 'react';
import { useState } from 'react';
import StatusCard from '../../atoms/StatusCard/StatusCard'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import './Automations.css'
// replace with fetched data
import {automationList} from '../../../services/MockData'
import AutomationsAutomation from '../../molecules/AutomationsAutomation/AutomationsAutomation'
export default function Automations(){
    const [textfield, setTextField] =React.useState('')
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
    const [currentTab, setCurrentTab] = React.useState(0);
    const tabTitles=['Automations', 'Approvals', 'Live Monitoring', 'Builder', 'Agents', 'Templates']

    const buttonStyle={
        color:'#a1a1a1',
        textTransform:'none',
        justifyContent:'center',
        fontSize:'small',
        border:'none',
        borderRadius:'15px',
        backgroundColor:'#031826',
        width:'14vw'
    }

    const setTextFilter = (event:any) => {
        setTextField(event?.target.value)
    }
    
    const selectCurrentTab = (i:number) => {
        setCurrentTab(i)
    }
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
            <div className='automation-tabs'>
                <Box>
                    <ButtonGroup sx={{display: 'flex', justifyContent:'center'}}>
                        {
                        tabTitles.map((tab:string, i:number)=>{
                            return(<Button disableRipple onClick={()=>{selectCurrentTab(i)}} sx={buttonStyle}>{tab}</Button>)
                        })
                        }
                    </ButtonGroup>
                </Box>
            </div>
            {currentTab === 0 ? (<div className = 'automations-tab'><AutomationsAutomation/></div>):(<></>)}
            {currentTab === 1 ? (<></>):(<></>)}
            {currentTab === 2 ? (<></>):(<></>)}
            {currentTab === 3 ? (<></>):(<></>)}
            {currentTab === 4 ? (<></>):(<></>)}
            {currentTab === 5 ? (<></>):(<></>)}
            <div>
            </div>
        </div>
    )
}