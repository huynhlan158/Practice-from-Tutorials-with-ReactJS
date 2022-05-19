import { useEffect, useState } from 'react'
import { getCountries, getReportByCountry } from './apis'
import CountrySelector from "./components/CountrySelector"
import Highlight from "./components/Highlight"
import Summary from "./components/Summary"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import grey from '@mui/material/colors/grey'
import { sortBy } from 'lodash'
import Typography from '@mui/material/Typography'
import moment from 'moment'
import 'moment/locale/vi'
import '@fontsource/roboto'
import { Container } from '@mui/material'

moment.locale('vi')

const theme = createTheme({
    palette: {
        primary: grey
    }
})

function App () {
    const [ countries, setCountries ] = useState([])
    const [ selectedCountryId, setSelectedCountryId ] = useState('vn')
    const [ report, setReport ] = useState([])

    useEffect(() => {
        getCountries()
            .then(res => {
                const countries = sortBy(res.data, 'Country')
                setCountries(countries)
            })
    }, [])

    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value)
    }

    useEffect(() => {

        if (countries.length > 0) {

            const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId.toLowerCase())
    
            getReportByCountry(Slug)
                .then(res => {
                    res.data.pop()
                    setReport(res.data)
                })
        }
        
    }, [countries, selectedCountryId])

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{marginTop: 10}}>
                <Typography variant="h2" component='h2'>Số liệu COVID-19</Typography>
                <Typography>{moment().format('LLL')}</Typography>
                <CountrySelector 
                    value={selectedCountryId} 
                    countries={countries} 
                    handleOnChange={handleOnChange}
                />

                <Highlight 
                    report={report} 
                />

                <Summary 
                    report={report} 
                    selectedCountryId={selectedCountryId}
                />
            </Container>
        </ThemeProvider>
    )
}

export default App