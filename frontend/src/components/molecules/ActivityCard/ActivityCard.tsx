import React from 'react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Divider
} from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import ImpactMeasured from '../../atoms/ImpactMeasured/ImpactMeasured'
import CircleIcon from '@mui/icons-material/Circle';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

//replace with fetched data from services folder
import './ActivityCard.css'

export default function ActivityCard(activityData:any){

    const cardStyles={
        backgroundColor:"#000812",
        marginBottom:'1rem',
        borderRadius:'15px',
        border:'1px solid #052032',

    }


    const buttonStyle=(buttonType:string)=>{
        return{
            textTransform:'none',
            color:'white',
            fontSize:'smaller',
            border:buttonType=='rollback' ? '1px solid #052032' :'none',
            borderRadius:'10px'
        }
    }

    const setTagClass=(tagName:string)=>{
        if(tagName == 'automated'){
            return 'automated-tag'
        }else if (tagName=='manual'){
            return 'manual-tag'
        }else if (tagName=='approved'){
            return 'approved-tag'
        }
        else{
            return 'normal-tag'
        }
    }

    return(
        <div>
        {
            activityData.data.map((d:any)=>{
                return(
                    <Card sx={cardStyles}>
                        <CardContent>
                            <div className='card-header'>
                                <div className='date-time'>
                                    <AccessTimeOutlinedIcon sx={{fontSize:'small', color:'#a1a1a1'}}/>
                                    <div>{d.date}</div>
                                    <div>{d.time}</div>
                                </div>
                                <div className='tag-rollback'>
                                    <div><div className={setTagClass(d.tag)}>{d.tag}</div></div>
                                    <Button disableRipple sx={buttonStyle('rollback')}><RestartAltOutlinedIcon sx={{fontSize:'medium', marginRight:'0.5rem'}}/>Rollback</Button>
                                </div>
                            </div>
                            <div className='body-container'>
                                <div>
                                    <Typography component="div" sx={{color:'white', display:'flex',justifyContent:'left', placeItems:'center', fontSize:'small', fontWeight:'bold', marginBottom:'0.5rem'}}><SmartToyOutlinedIcon sx={{color:'white', fontSize:'small', marginRight:'0.5rem'}}/> {d.agent} <div className={setTagClass(d.asset)}>{d.asset}</div></Typography>
                                    <Typography  component="div" sx={{color: 'white', fontSize:'small', fontWeight:'bold', marginBottom:'0.5rem'}}>{d.title}</Typography>
                                    <Typography  component="div" sx={{color: '#a1a1a1', fontSize:'small', marginBottom:'0.5rem'}}>{d.description}</Typography>
                                    <Typography  component="div" sx={{color:'white',fontSize:'smaller', backgroundColor:'#010b16', padding:'0.5rem'}}><b>Reason:</b> {d.reason}</Typography>
                                </div>
                                <div className='impact'><ImpactMeasured impactData={d.impact_data}></ImpactMeasured></div>
                            </div>
                            <Divider style={{ background: '#052032', marginTop:'1rem'}} ></Divider>
                            <div className='card-footer'>
                                <div className='id-version'>
                                    <div>ID: {d.id}</div>
                                    <div><CircleIcon sx={{fontSize:'5px'}}/></div>
                                    <div>Version: {d.version}</div>
                                </div>
                                <div className='footer-buttons'>
                                    <div><Button disableRipple sx={buttonStyle('view')}><RemoveRedEyeOutlinedIcon sx={{fontSize:'medium', marginRight:'0.5rem'}}/>View Details</Button></div>
                                    <div><Button disableRipple sx={buttonStyle('view')}><TimelineOutlinedIcon sx={{fontSize:'medium', marginRight:'0.5rem'}}/>View Diff</Button></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })
        }
        </div>
    )
}