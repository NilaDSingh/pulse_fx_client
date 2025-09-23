import { useState } from 'react';
import React from 'react';
import './AutomationsAutomation.css'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AutomationCard from '../../atoms/AutomationCard/AutomationCard';
import {automationList, agentMenu, statusMenu} from '../../../services/MockData'

export default function AutomationsAutomations(){

    const [textfield, setTextField] = React.useState('');
    const [agent, setAgent] = React.useState('All Agents');
    const [status, setStatus] = React.useState('All Status');
    const [data, setdata] = React.useState(automationList);
    
    const textStyle={
    backgroundColor:'#000c17',
    color:'white',
    "& .MuiOutlinedInput-input": {
      height: '0rem',
      color:'white',
      fontSize:'small',
    },
    borderRadius:'10px',
    width:'300vw'
  }
  
    const dropdownStyle={
    backgroundColor:'#000c17',
    color:'white',
    fontSize:'small',
    width:'100%',
    height:'2rem',
    borderRadius:'10px',
    border:'1px solid #052032',

  }


      const handleTextfieldChange = (event:any) => {
        setTextField(event.target.value)
  };

      const handleAgentChange = (event:any) => {
        setAgent(event.target.value)
  };

        const handleStatusChange = (event:any) => {
        setAgent(event.target.value)
  };

    return(
    <div>
        <div className='filters'>
        <TextField 
            placeholder='Search Automations...'
            value={textfield}
            onChange={handleTextfieldChange}
            sx={textStyle}
            slotProps={{
                            input:(
                                {startAdornment: <InputAdornment position="start"><SearchIcon sx={{color:'#a1a1a1', fontSize:'medium'}}/></InputAdornment>}
                            )
                        }}
            >
            </TextField>
            <Select
                value={agent}
                onChange={handleAgentChange}
                sx={dropdownStyle}
                >
                {agentMenu.map((item)=>{
                    return(
                    <MenuItem sx={{fontSize:'small'}} value={item}>{item}</MenuItem>)})}
            </Select>
            <Select
                value={status}
                onChange={handleStatusChange}
                sx={dropdownStyle}
                >
                {statusMenu.map((item)=>{
                    return(
                    <MenuItem sx={{fontSize:'small'}} value={item}>{item}</MenuItem>)})}
            </Select>

        </div>
            {data.automations.map((d:any)=>{
                return(
                    <div><AutomationCard data={d}/></div>
                )
            })}
    </div>
)}