import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const TextfieldIcon = (props) =>{

    return(
        <>
        <FormControl style={{float:'left',marginLeft:'15px',marginBottom:'7px'}} variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                Buscar por razón social
            </InputLabel>
            <Input
            value={props.search}
            onChange={props.handleChangeSearch}
            id="input-with-icon-adornment"
            startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
            }
            />
        </FormControl>
        </>
    )
}

export default TextfieldIcon;