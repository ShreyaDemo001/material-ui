import React, { useState } from 'react'
import { Stack, TextField, InputAdornment} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextField = () => {
   const[value, setValue] = useState(" ");
   const[viewer, setViewer] = useState(false);
   const handleVisibility =() =>{
    setViewer((prev) => !prev)
   }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label="name" variant='outlined'/>
            <TextField label="name" variant='filled'/>
            <TextField label="name" variant='standard'/>
        </Stack>

        <Stack spacing={2} direction='row' display='block'>
            <TextField label="name" size='small' color='primary'/>
            <TextField label="name" size='medium' color='secondary'/>
            <TextField label="name" size='large' color='success'/>
        </Stack>

        <Stack spacing={2} direction='row'> 
            <TextField label="password" required/>
            <TextField label="password" required helperText="Do not share your password"/>
            <TextField label="password" required value={value} onChange={(e) => setValue(e.target.value)}
            error={!value} helperText={!value ? 'required' : 'Do not share yoor password'} />
        </Stack>
        
        <Stack spacing={2} direction='row'>
            <TextField label="Note" disabled/>
            <TextField label="Note Please" InputProps={{readOnly: true}}/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="Amount" InputProps={{startAdornment : <InputAdornment>$</InputAdornment>}}/>
            <TextField label="Amount" InputProps={{endAdornment : <InputAdornment>$</InputAdornment>}}/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="password" type={viewer ? 'text' : 'password'} InputProps={{endAdornment : (<InputAdornment
            position='end' onClick={handleVisibility}>{viewer ? <VisibilityOffIcon/> : <VisibilityIcon/>}</InputAdornment>)}}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField
