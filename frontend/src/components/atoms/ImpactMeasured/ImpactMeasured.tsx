import * as React from 'react';
import { useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Divider from '@mui/material/Divider';
import './ImpactMeasured.css'

export default function ImpactMeasured(data:any){
    const [impactData, setImpactData] =React.useState(data.impactData)

    return(
        <div className='impact-container'>
            <div className='impact-measured'><TrendingUpIcon fontSize='small'/>Impact Measured</div>
            <div>{impactData.chart_title}</div>
            <div className='rate'>Before: <div className='value'>{impactData.before}</div></div>
            <div className='rate'>After: <div className='value'>{impactData.after}</div></div>
            <Divider style={{ background: '#052032' }} ></Divider>
            <div className='change'>Change: <div>{impactData.change}</div></div>
        </div>

    )
}