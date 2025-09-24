import * as React from 'react';
import { useState } from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

import './Badge.css'

export default function Badge (badgeType:any){
    
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

    
    const selectStartIcon=(status:string)=>{
        if(status==='active'){
            return <div><PlayArrowOutlinedIcon sx={iconStyle}/></div>
        }else if(status==='paused'){
            return <div><PauseIcon sx={iconStyle}/></div>
        }else if(status==='draft'){
            return <div><FeedOutlinedIcon sx={iconStyle}/></div>
        }
    }

    return(
        <div>
            <div className={badgeStyle(badgeType.data)}>
                {badgeType.data === 'active'? <PlayArrowOutlinedIcon sx={iconStyle}/>:<></>}
                {badgeType.data === 'paused'? <PauseIcon sx={iconStyle}/>:<></>}
                {badgeType.data === 'draft'? <FeedOutlinedIcon sx={iconStyle}/>:<></>}
                {badgeType.data}
            </div>
        </div>
    )
}