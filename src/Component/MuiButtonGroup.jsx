import React from 'react'
import {Stack, Button, ButtonGroup} from '@mui/material';

function MuiButtonGroup() {
  return (
    <Stack spacing={4} direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label='alignment button group'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button onClick={() => alert("This is Right")}>Right</Button>
        </ButtonGroup>
    </Stack>
  )
}

export default MuiButtonGroup
