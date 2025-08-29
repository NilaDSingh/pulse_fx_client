import TextField from '@mui/material/TextField';
import MicNoneIcon from '@mui/icons-material/MicNone';
import InputAdornment from '@mui/material/InputAdornment';
import LibraryMenu from '../../atoms/LibraryMenu/LibraryMenu'

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
                size='small'
                sx={{ input: { color: "white"}}} 
                slotProps={{
                    input:{
                        endAdornment:(
                            <InputAdornment position='end'>
                                <div>
                                    <MicNoneIcon fontSize="small" className='mic' />
                                </div>
                            </InputAdornment>
                        )
                    }
                }}
                />
                <LibraryMenu></LibraryMenu>
                <button className="parse-button">Parse</button>
        </div>
    );
}