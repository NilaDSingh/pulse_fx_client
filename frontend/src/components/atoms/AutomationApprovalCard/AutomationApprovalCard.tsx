import { useState } from 'react';
import React from 'react';

import './AutomationApprovalCard.css'
import { 
    Button,
    Card,
    CardContent
 } from '@mui/material';
 import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function AutomationApprovalCard(automation:any){
    console.log('approvals',automation.data?.approvals[0])
    
    const cardStyle={
        backgroundColor:"#000812",
        border:'1px solid #052032',
        borderRadius: '15px',
        marginBottom:'3vh',
        marginTop:'3vh',
        '&:hover':{
            border:'1px solid #26a9f1'
        }
    }

    const buttonStyle=(buttonType:string)=>{
        return(
        { 
            backgroundColor: buttonType==='approve' ? '#26a9f1':'#000c17',
            textTransform:'none',
            fontWeight:'bold',
            fontSize:'small',
            color:'white',
            height:'4vh'
            }
        )
    }

    const iconStyle={
        color:'white',
        fontSize:'medium'
    }

    return(
        <div>
           <Card sx={cardStyle}>
            <CardContent>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'75%'}}>
                    {
                        automation.data?.approvals.map((d:any)=>{
                            let keys = Object.keys(d.summary)
                            console.log(keys)
                            return(
                            <div>
                                    <div className='task'>{d.task}</div>
                                    <div className='details-container'>
                                        <div className='details'><b>Automation:</b> {automation.data.title}</div>
                                        <div className='details'><b>Type:</b> {d.type}</div>
                                        <div className='details'><b>Created:</b> {d.created}</div>
                                    </div>
                                    <Card sx={{backgroundColor:'#010d18', marginTop:'2vh', borderRadius:'15px'}}>
                                        <CardContent>
                                            <div className='card-subtitle'>Estimated Impact</div>
                                            <div className='details'>{d.estimated_impact}</div>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{backgroundColor:'#010d18', marginTop:'2vh', borderRadius:'15px'}}>
                                        <CardContent>
                                            <div className='card-subtitle'>Changes Summary</div>
                                            <div className='details'>{d.changes_summary}</div>
                                            <div style={{marginTop:'2vh'}}>
                                                <div className='summary-info'>{keys[0]} <div style={{color:'white', fontWeight:'bold'}}>{d.summary[keys[0]]}</div></div>
                                                <div className='summary-info'>{keys[1]} <div style={{color:'white', fontWeight:'bold'}}>{d.summary[keys[1]]}</div></div>
                                                <div className='summary-info'>{keys[2]} <div style={{color:'white', fontWeight:'bold'}}>{d.summary[keys[2]]}</div></div>
                                            </div>
                                        </CardContent>
                                    </Card>
                            </div>
                        )
                     })
                    }
                    </div>
                    <div style={{gap:'1vw', display:'flex'}}>
                        <div><Button startIcon={<RemoveRedEyeOutlinedIcon style={iconStyle}/>} sx={buttonStyle('preview')}>Preview</Button></div>
                        <div><Button startIcon={<ClearOutlinedIcon style={iconStyle}/>} sx={buttonStyle('reject')}>Reject</Button></div>
                        <div><Button startIcon={<CheckOutlinedIcon style={iconStyle}/>} sx={buttonStyle('approve')}>Approve</Button></div>
                    </div>
                </div>
            </CardContent>
            </Card> 
        </div>
    )
}