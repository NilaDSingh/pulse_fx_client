// Header status card for Automations tab 
import { useState } from 'react';
import React from 'react';
import {
    Card,
    CardContent
} from '@mui/material';
import './StatusCard.css'
import { Widgets } from '@mui/icons-material';
import { resize } from 'framer-motion';



export default function StatusCard(automationCardData:any){
    const cardStyle={
        backgroundColor:'#000812',
        border:'1px solid #052032',
        width:'13.5vw',
        height:'4rem',
        display:'flex',
        placeItems:'center',
        borderRadius:'10px',
    }
    console.log('status card',automationCardData.data)
    return(
        <Card sx={cardStyle}>
            <CardContent>
                <div className='card-container'>
                    <div>{automationCardData.data.icon}</div>
                    <div className='title-value'>
                        <div className='value'>{automationCardData.data.value}</div>
                        <div className='title'>{automationCardData.data.title}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}