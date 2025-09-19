import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { agentMenu, assetMenu } from '../../../services/MockData';
import { Height } from '@mui/icons-material';

export default function FilterSearch(props:any){
    const [agent, setAgent] = React.useState('All Agents');
    const [asset, setAsset] = React.useState('All Assets');
    const [textfield, setTextField] = React.useState('');

    const handleAgentChange = (event:any) => {
        setAgent(event.target.value)
        props.filterAgent(event.target.value);
  };

    const handleAssetChange = (event:any) => {
        setAsset(event.target.value)
        props.filterAsset(event.target.value);
  };
  
    const handleTextfieldChange = (event:any) => {
        setAsset(event.target.value)
        props.filterAsset(event.target.value);
  };

  const textStyle={
    backgroundColor:'#000c17',
    color:'white',
    "& .MuiOutlinedInput-input": {
      height: '0rem',
      color:'white',
      fontSize:'small',
    },
    borderRadius:'10px',
    width:'100%'
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

    const cardStyle={
        backgroundColor:"#000812",
        color:'white',
        borderRadius:'15px'
    }

    const buttonStyle={
        width:'100%',
        textTransform:'none',
        color:'white',
        fontSize:'small',
        backgroundColor:"#000c17",
        border:'1px solid #052032',
        height:'2rem',
        borderRadius:'10px'
    }

    return(
        <Card sx={cardStyle}>
            <CardContent sx={{display:'flex', fontSize:'medium'}}>
               <FilterAltOutlinedIcon fontSize='small'/> Filters & Search
            </CardContent>
            <CardContent>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={3}>
                    <div>
                        <TextField 
                        placeholder='Search Changes...'
                        value={textfield}
                        onChange={handleTextfieldChange}
                        sx={textStyle}
                        slotProps={{
                            input:(
                                {startAdornment: <InputAdornment position="start"><SearchOutlinedIcon sx={{color:'#a1a1a1', fontSize:'medium'}}/></InputAdornment>}
                            )
                        }}
                        >
                            <SearchOutlinedIcon fontSize='small'/>
                        </TextField>
                        </div>
                    </Grid>
                    <Grid size={3}>
                    <div><Select
                            value={agent}
                             onChange={handleAgentChange}
                             sx={dropdownStyle}
                         >
                             {agentMenu.map((item)=>{
                                 return(
                                     <MenuItem sx={{fontSize:'small'}} value={item}>{item}</MenuItem>
                                 )
                             })}
                    </Select></div>
                    </Grid>
                    <Grid size={3}>
                    <div><Select
                             value={asset}
                             onChange={handleAssetChange}
                             sx={dropdownStyle}
                         >
                            {assetMenu.map((item)=>{
                                 return(
                                     <MenuItem sx={{fontSize:'small'}} value={item}>{item}</MenuItem>
                                 )
                             })}
                     </Select></div>
                    </Grid>
                    <Grid size={3}>
                    <div className='button-container'><Button sx={buttonStyle}>Export Log <IosShareOutlinedIcon sx={{fontSize:'medium'}}></IosShareOutlinedIcon> </Button></div>
                    </Grid>
                </Grid>
            </Box>
        </CardContent>
        </Card>
    )
}