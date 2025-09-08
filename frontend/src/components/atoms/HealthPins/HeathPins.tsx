import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import './HealthPins.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Homepage Connected Channels Individual Cards

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25em',
  height:'25rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll'

};

export default function HealthPins(connectedChannels:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle={
    textTransform:'none',
    backgroundColor:'#010d18',
    width:'100%',
    justifyContent:'left',
    '&:hover':{
        backgroundColor:'#01101c'
    },
    color:'white',
    marginTop:'1rem',
    borderRadius:'10px'
  }

    const channelButtonStyle={
    textTransform:'none',
    backgroundColor:'#010d18',
    width:'100%',
    justifyContent:'center',
    color:'white',
    marginTop:'1rem',
    borderRadius:'10px'

  }

    const modalStyle={
    height:'100%',
  }

  return (
    <div>
        {connectedChannels.data.map((channel:any)=>{
            return(
            <Button sx={buttonStyle} onClick={handleOpen}>
                <FmdGoodOutlinedIcon fontSize='small' sx={{marginRight:'1rem'}}/>
                <div className='channel-button'>
                    <div>{channel.name}</div>
                    <div className='rating-sub'>0x Rating: {channel.rating}</div>
                </div>
            </Button>)
        })}
        <Button sx={channelButtonStyle}><AddOutlinedIcon fontSize= 'small' sx={{marginRight:'1rem'}}/>Add Channel</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
            <Button sx={{display:'flex', justifyContent:'left'}} onClick={handleClose}>x</Button>
            <div className='modal-header'>
                    <PlaceOutlinedIcon sx={{border:'1px solid black', padding: '0.5rem', borderRadius:'10px' }} fontSize='small'/>
                <div>
                   <Typography variant="h6" component="h2">Google Business Profile</Typography>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}