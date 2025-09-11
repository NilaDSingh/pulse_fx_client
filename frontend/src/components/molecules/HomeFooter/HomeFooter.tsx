import { useState } from 'react';
import React from 'react';
import './HomeFooter.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export default function QuickWinsFooter(data: any){
    // must change warning icon with appropriate logic

    const cardStyle = {
        border:'1px solid #052032',
        backgroundColor:'#000812',
        borderRadius: '15px',
        height:'5rem',
        background: 'linear-gradient(to right, #120c22, #263c44)',
        alignItems:'center',
        marginTop:'2rem',
        
    }

    const buttonStyles={
        textTransform: 'none',
        color:'white',
        fontSize:'x-small',
        backgroundColor:'#081b29',
        border:'1px solid  #020f1c',
        fontWeight:'bold'
    }

    return(
    <Card sx={cardStyle}>
        <CardContent>
                <div className='quick-footer-container'>
                    <div>
                        <div className='quick-footer-title'> Ready to boost your score? </div>
                        <div className='quick-footer-subtitle'>Take action on AI recommendations or explore deeper insights</div>
                    </div>
                    <div className='buttons'>
                        <Button sx={buttonStyles} startIcon={<RemoveRedEyeOutlinedIcon sx={{fontSize:'x-small'}}/>}>Deep Analysis</Button>
                        <Button sx={buttonStyles} startIcon={<AddOutlinedIcon sx={{fontSize:'x-small'}}/>}>Add Channels</Button>
                    </div>
                </div>
        </CardContent>
    </Card>
)
}