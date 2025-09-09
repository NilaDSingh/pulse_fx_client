import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import './QuickWinsFooter.css'

export default function QuickWinsFooter(data: any){
    // must change warning icon with appropriate logic

    const cardStyle = {
        border:'1px solid #052032',
        backgroundColor:'#000812',
        borderRadius: '15px',
        height:'5rem',
        marginTop:'-1rem',
        background: 'linear-gradient(to right, #020f1c, #0c1e2e)',
    }

    const buttonStyles={
        textTransform: 'none',
        color:'white',
        fontSize:'smaller',
        backgroundColor:'#081b29',
        border:'1px solid  #020f1c'
    }

    return(
    <Card sx={cardStyle}>
        <CardContent>
                <div className='quick-footer-container'>
                    <div>
                        <div className='quick-footer-title'> Want more personalized recommendations? </div>
                        <div className='quick-footer-subtitle'>Get AI insights tailored to your business goals</div>
                    </div>
                    <div><Button sx={buttonStyles} startIcon={<AutoAwesomeOutlinedIcon sx={{fontSize:'small'}}/>}>Ask AI</Button></div>
                </div>
        </CardContent>
    </Card>
)
}