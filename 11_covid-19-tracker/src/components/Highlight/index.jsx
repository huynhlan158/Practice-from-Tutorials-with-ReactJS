import Grid from '@mui/material/Grid'
import HighlightCard from './HighlightCard'

function Highlight ({ report }) {
    const lastDayData = report && report.length ? report[report.length - 1] : []
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: lastDayData.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: lastDayData.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: lastDayData.Deaths,
            type: 'death'
        }
    ]

    return (
        <Grid container spacing={3}>
            {summary.map(item => (
                <Grid key={item.type} item sm={4} xs={12}>
                    <HighlightCard title={item.title} count={item.count} type={item.type} />
                </Grid>
            ))}
            
        </Grid>
    )
}

export default Highlight