import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './AutomationApprovalCard.css'

export default function AutomationApprovalCard(automation:any){
    console.log('approvals',automation.data?.approvals[0])
    
    const cardStyle={
        backgroundColor:"#000812",
        border:1,
        borderColor:'#052032',
        borderRadius: '15px',
        marginBottom:'3vh'
    }
    return(
        <div>
           <Card sx={cardStyle}>
            <CardContent>
                <div>
                    {
                        automation.data?.approvals.map((d:any)=>{
                            return(
                            <div>
                                <div>
                                    <div className='task'>{d.task}</div>
                                    <div className='details-container'>
                                        <div className='details'><b>Automation:</b> {automation.data.title}</div>
                                        <div className='details'><b>Type:</b> {d.type}</div>
                                        <div className='details'><b>Created:</b> {d.created}</div>
                                    </div>
                                    <Card sx={{backgroundColor:'#010d18', marginTop:'2vh'}}>
                                        <CardContent>
                                            <div >Estimated Impact</div>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{backgroundColor:'#010d18', marginTop:'2vh'}}>
                                        <CardContent>
                                            <div>Changes Summary</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        )
                     })
                    }
                </div>
            </CardContent>
            </Card> 
        </div>
    )
}