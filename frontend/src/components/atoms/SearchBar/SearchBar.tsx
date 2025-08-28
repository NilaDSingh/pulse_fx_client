import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MicNoneIcon from '@mui/icons-material/MicNone';
import InputAdornment from '@mui/material/InputAdornment';

import './SearchBar.css'

export default function SearchBar() {
    return (
        <div className="bar-container">
            <TextField 
                className="search-bar" 
                id="search-bar" 
                fullWidth
                placeholder="Type a command: watch, fix, grow, benchmark..." 
                variant="outlined" 
                sx={{ input: { color: "white", width: 400, height: 0}}} 
                slotProps={{
                    input:{
                        endAdornment:(
                            <InputAdornment position='end'><Button><MicNoneIcon className='mic' /></Button></InputAdornment>
                        )
                    }
                }}
                />
        </div>
    );
}