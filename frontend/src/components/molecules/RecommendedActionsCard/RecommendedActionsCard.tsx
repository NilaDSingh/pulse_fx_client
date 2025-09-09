import { useState } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImpactCard from '../../atoms/ImpactCard/ImpactCard';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import './RecommendedActionsCard.css'


export default function RecommendedActionsCard(data: any){
    // must change warning icon with appropriate logic
    const [button, setShowButton] = React.useState(false)
    const [titleHover, setTitleHover] = React.useState('title')

    const cardStyle = {
        border:1,
        borderColor: '#052032',
        backgroundColor:'#000812',
        borderRadius: '15px',
        '&:hover': {
            border: "1px solid #0b3855"
        },
        marginTop:'0.5rem'

    }
    const cardSpecStyle = {
        fontSize:'x-small', 
        color: "#a1a1a1", 
    }
    const subtitleStyle = {
        fontSize:'0.7rem', 
        color: "#a1a1a1",
        marginTop: '0.5rem'
    }
    const buttonStyle = {
        textTransform:'none',
        color: 'white',
        fontWeight: 'bold',
        fontSize:'small'
    }
    const buttonIconStyle={
        
    }

    const showButton = (val:boolean) =>{
        setShowButton(val)
        if(val==true){
            setTitleHover('title-hover')
        }
        else{
            setTitleHover('title')
        }
    }

    return(
    <div>
        <Card  
        sx={cardStyle}
        onMouseOver={() => showButton(true)}
        onMouseOut={() => showButton(false)}
      >
            <CardContent sx={{display:'flex', justifyContent:'space-between', placeItems:'center'}}>
                <div>
                    <div className='first-line'>
                    <ImpactCard impact={data.data.pts}></ImpactCard>
                    <Typography sx={cardSpecStyle}>{data.data.time}</Typography>
                    </div>
                    <div className={titleHover}><h4>{data.data.title}</h4></div>
                    <Typography sx={subtitleStyle}>{data.data.desc}</Typography>
                </div>
                <div>{button && <Button sx={buttonStyle} endIcon={<EastIcon sx={{fontSize:'x-small'}}></EastIcon>}>Fix this</Button>}</div>
            </CardContent>
        </Card>
    </div>
)
}