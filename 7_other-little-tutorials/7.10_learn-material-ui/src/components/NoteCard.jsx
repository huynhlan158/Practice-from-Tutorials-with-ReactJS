import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { yellow, green, pink, blue } from '@mui/material/colors';

function NoteCard ({ note, handleDelete }) {
    
    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar
                            sx={{
                                backgroundColor: note.category == 'work' ? yellow[700] : note.category == 'reminders' ? green[500] : note.category == 'todos' ? pink[500] : blue[500]
                            }}
                        >{note.category[0].toUpperCase()}</Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard