import React from 'react'
import {Stack, Button, IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function MuiButton() {
  return (
    <Stack spacing={4}>
        <Stack spacing={4} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={4} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack display='block' spacing={4} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={4} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} onClick={() => alert("Hello")}>Send</Button>
        </Stack>

        <Stack spacing={4} direction='row'>
            <IconButton aria-label='send' color='primary'><SendIcon/></IconButton>
            <Button variant='contained' color='primary' disableRipple disableElevation>Display</Button>
        </Stack>
    </Stack>
  )
}

export default MuiButton
