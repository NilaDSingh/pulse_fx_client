import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import Badge from '../../atoms/Badge/Badge';
import './AutomationCard.css'

export default function AutomationCard(automations:any){
    
        
    const cardStyle={
        backgroundColor:"#000812",
        border:1,
        borderColor:'#052032',
        borderRadius: '15px',
        marginBottom:'3vh'
    }

    const iconStyle={
        fontSize:'medium',
        color:'white'
    }

    const badgeStyle = (text:string) => {
        if(text==='low'){
            return 'low-priority'
        }else if(text==='medium'){
            return 'medium-priority'
        }else if(text==='high'){
            return 'high-priority'
        }else if(text==='active'){
            return 'active-badge'
        }else if(text==='paused'){
            return 'paused-badge'
        }else if(text==='draft'){
            return 'draft-badge'
        }else{
            return 'tag'
        }
    }

    const selectAutomationIcon = (agent:string) => {
        if(agent==='Sentinel' || agent === 'Scout'){
            return(<RemoveRedEyeOutlinedIcon sx={iconStyle}/>)
        }else if(agent==='Liaison' || agent ==='Publisher'){
            return(<LanguageOutlinedIcon sx={iconStyle}/>)
        }else if(agent==='Curator'){
            return(<SettingsOutlinedIcon sx={iconStyle}/>)
        }else if(agent==='Analyst'){
            return(<TrendingUpOutlinedIcon sx={iconStyle}/>)
        }
        else{
            return(<></>)
        }
    }


    return(
        <div>
        <Card sx={cardStyle}>
                <CardContent>
                    <div className='card'>
                        <div className='agent-icon-background'>
                            {selectAutomationIcon(automations.data.agent)}
                        </div>
                        <div className='info'>
                            <div className='card-header'>
                                <div className='title-badges'>
                                    <div className='automation-title'>{automations.data.title}</div>
                                    <Badge data={automations.data.priority}></Badge>
                                    <Badge data={automations.data.status}></Badge>
                                </div>
                                <div className='icons'>
                                    <CircleIcon sx={iconStyle}/>
                                    <RemoveRedEyeOutlinedIcon sx={iconStyle}/>
                                    <SettingsOutlinedIcon sx={iconStyle}/>
                                    <MoreHorizIcon sx={iconStyle}/>
                                </div>
                            </div>
                            <div className='run-details'>
                                <div><b>Agent:</b> {automations.data.agent}</div>
                                <div><b>Trigger:</b> {automations.data.trigger}</div>
                                <div><b>Next Run:</b> {automations.data.next_run}</div>
                                <div><b>Success Rate:</b> {automations.data.success_rate}</div>
                            </div>
                                <div className='tag-container'>
                                    {automations.data.tags.map((tag:string)=>{
                                        return(
                                        <Badge data={tag}></Badge>
                                    )
                                    })}
                                </div>
                                <div className='summary'>{automations.data.description}</div>
                            </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )

}