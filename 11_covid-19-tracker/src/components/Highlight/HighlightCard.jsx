import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Countup from 'react-countup'

function HighlightCard ({ title, count, type }) {
    return (
        <Card sx={{
            borderLeft: type == 'confirmed' ? '5px solid #c9302c' : type == 'recovered' ? '5px solid #28a745' : '5px solid gray'
        }}>
            <CardContent>
                <Typography
                    component='p' 
                    variant='body2'
                    sx={{fontSize: 18}}
                >
                    {title}
                </Typography>
                <Typography
                    component='span' 
                    variant='body2'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}
                >
                    <Countup end={count || 0} duration={1} separator= ','/>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HighlightCard