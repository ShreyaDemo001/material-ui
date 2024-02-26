import React, { useState } from 'react'
import {Box, MenuItem, InputLabel, FormControl, Select} from '@mui/material';

const MuiSelect = () => {
   const[city, setCity] = useState('');
   console.log({city});
   const handleChange =(event) =>{
    setCity(event.target.value);
   }
  return (
    <Box width='250px'>
      <FormControl fullWidth>
        <InputLabel id='select-item'>City</InputLabel>
          <Select labelId='select-item' id='select-demo' label='City'
          value={city} onChange={handleChange}>
            <MenuItem value='ja'>jalna</MenuItem>
            <MenuItem value='sh'>Shimla</MenuItem>
            <MenuItem value='pu'>Pune</MenuItem>
            <MenuItem value='l'>Leh</MenuItem>
            <MenuItem value='mu'>Mumbai</MenuItem>`
            <MenuItem value='ka'>kashmir</MenuItem>`
          </Select>
      </FormControl>
    </Box>
  )
}

export default MuiSelect



//Multiple Selection

// import React, { useState } from 'react'
// import {Box, TextField, MenuItem} from '@mui/material';

// const MuiSelect = () => {
//   const[cities, setCities] = useState('');
//   const handleChange =(event)=>{
//     const value = event.target.value;
//     setCities(typeof value === 'string' ? value.split(',') : value);
//   }
  
//   return (
//     <Box width='250px'>
//       <TextField label='Select City' select size='small' color='secondary' fullWidth value={cities}
//       onChange={handleChange} SelectProps={{multiple: true}}>
//          <MenuItem value='sh'>Shimla</MenuItem>
//          <MenuItem value='pu'>Pune</MenuItem>
//          <MenuItem value='l'>Leh</MenuItem>
//          <MenuItem value='mu'>Mumbai</MenuItem>
//          <MenuItem value='ka'>kashmir</MenuItem>
//       </TextField>
//     </Box>
//   )
// }

// export default MuiSelect





// Single Select

// import React, { useState } from 'react'
// import {Box, TextField, MenuItem} from '@mui/material';

// const MuiSelect = () => {
//   const[city, setCity] = useState("");
//   console.log({city});
//   const handleChange =(event)=>{
//     setCity(event.target.value);
//   }
//   return (
//     <Box width='250px'>
//       <TextField label='select city' select size='small' color='secondary' fullWidth 
//       helperText='Enter your city' value={city} onChange={handleChange}>
//         <MenuItem value='pu'>Pune</MenuItem>
//         <MenuItem value='l'>Leh</MenuItem>
//         <MenuItem value='mu'>Mumbai</MenuItem>
//         <MenuItem value='ka'>kashmir</MenuItem>
//       </TextField>
//     </Box>
//   )
// }

// export default MuiSelect
