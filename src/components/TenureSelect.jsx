import React from 'react'
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function TenureSelect( {data, setData} ) {

  const handleChange = (event) => {
    setData({...data, loanTerm: event.target.value});
  }

  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Periodo</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={data.loanTerm}
      label="Tenure"
      defaultValue={5}
      onChange={handleChange}
    >
      <MenuItem value={5}>5 años</MenuItem>
      <MenuItem value={10}>10 años</MenuItem>
      <MenuItem value={15}>15 años</MenuItem>
      <MenuItem value={20}>20 años</MenuItem>
      <MenuItem value={25}>25 years</MenuItem>
    </Select>
  </FormControl>
  )
}
