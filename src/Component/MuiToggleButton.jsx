import React, { useState } from 'react'
import { Stack, ToggleButtonGroup, ToggleButton} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiToggleButton() {
   const [formate, setFormate] = useState([]);
   console.log({formate});
   const handleChange =(event, updateFormate) =>{
        setFormate(updateFormate);
   }
  return (
    <Stack direction='row'>
        <ToggleButtonGroup color='secondary' value={formate} onChange={handleChange} size='small' orientation='vertical' exclusive>
            <ToggleButton value='bold' aria-label='bold'>
                <FormatBoldIcon/>
            </ToggleButton>
            <ToggleButton value='italic' aria-label='italic'>
                <FormatItalicIcon/>
            </ToggleButton>
            <ToggleButton value='underline' aria-label='underline'>
                <FormatUnderlinedIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
  )
}

export default MuiToggleButton
