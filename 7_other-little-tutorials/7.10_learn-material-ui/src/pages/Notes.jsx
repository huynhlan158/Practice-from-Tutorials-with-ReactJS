import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes, setNotes]= useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (noteId) => {
    await fetch('http://localhost:8000/notes/' + noteId, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != noteId)
    setNotes(newNotes)
  }
  
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
