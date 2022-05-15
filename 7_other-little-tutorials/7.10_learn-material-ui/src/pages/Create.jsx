import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { FormControlLabel } from '@mui/material'

export default function Create() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleTitleChange = e => {
    setTitleError(false)
    setTitle(e.target.value)
  }

  const handleDetailsChange = e => {
    setDetailsError(false)
    setDetails(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (title == '') {
      setTitleError(true)
    } else {
      setTitleError(false)
    }

    if (details == '') {
      setDetailsError(true)
    } else {
      setDetailsError(false)
    }

    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          title, details, category
        })
      }).then(() => history.push('/'))
    }

  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
          onChange={handleTitleChange}
          value={title}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          sx={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'block'
          }}
        />

        <TextField 
          onChange={handleDetailsChange}
          value={details}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          sx={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'block'
          }}
        />

        <FormControl 
          sx={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'block'
          }}
        >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio color="secondary" />} value='money' label="Money" />
            <FormControlLabel control={<Radio color="secondary" />} value='todos' label="Todos" />
            <FormControlLabel control={<Radio color="secondary" />} value='reminders' label="Reminder" />
            <FormControlLabel control={<Radio color="secondary" />} value='work' label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>

      <br />
    </Container>
  )
}
