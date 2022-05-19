import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import FormHelperText from '@mui/material/FormHelperText'
import { useTheme } from '@mui/material/styles'

function CountrySelector ({ value, handleOnChange, countries }) {
    const theme = useTheme()

    return (
        <FormControl sx={{margin: theme.spacing(3), marginLeft: 0}}>
            <InputLabel htmlFor="country-selector" shrink sx={{
                marginLeft: -1.7,
            }}>Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
                {countries.map(country => (
                    <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                ))}
            </NativeSelect>
            <FormHelperText sx={{marginLeft: 0}}>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector