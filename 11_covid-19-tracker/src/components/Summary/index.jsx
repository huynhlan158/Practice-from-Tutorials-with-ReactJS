import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import LineChart from '../Charts/LineChart'
import HighMaps from '../Charts/HighMaps'
import axios from 'axios'

function Summary ({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState({})

    useEffect (() => {
        if (selectedCountryId) {
            axios(`https://code.highcharts.com/mapdata/countries/${selectedCountryId}/${selectedCountryId}-all.topo.json`)
                .then(data => setMapData(data.data))
        }
    }, [selectedCountryId])
        
    return (
        <Grid container spacing={2} sx={{marginTop: 5}}>
            <Grid item xs={12} sm={8}>
                <LineChart data={report} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <HighMaps mapData={mapData} />
            </Grid>
        </Grid>
    )
}

export default Summary