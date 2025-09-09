import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImpactCard from '../../atoms/ImpactCard/ImpactCard';
import './QuickWinsFooter.css'

export default function QuickWinsFooter(data: any){
    // must change warning icon with appropriate logic

    const cardStyle = {
        border:1,
        borderColor: '#052032',
        backgroundColor:'#000812',
        borderRadius: '15px',
        '&:hover': {
            border: "1px solid #0b3855"
        },
        marginBottom:'0.5rem',
        height:'5rem',
        display:'flex',
        placeItems:'center',
        marginTop:'-1rem'
    }

    return(
    <div>
        <Card  
        sx={cardStyle}
      >
            <CardContent>
                <div className='quick-footer-container'>
                    <div>
                        <div className='quick-footer-title'> Want more personalized recommendations? </div>
                        <div className='quick-footer-subtitle'>Get AI insights tailored to your business goals</div>
                    </div>
                    <div><Button>Ask AI</Button></div>
                </div>
            </CardContent>
        </Card>
    </div>
)
}