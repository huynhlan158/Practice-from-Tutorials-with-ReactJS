import { useState, useEffect, memo } from 'react'
import HighchartsReact from "highcharts-react-official"
import Highchart from 'highcharts'
import moment from 'moment'
import ButtonGroup from '@mui/material/ButtonGroup' 
import Button from '@mui/material/Button'

const generateOptions = (data) => {
    const categories = data.map(item => moment(item.Date).format('DD/MM/YYYY'))

    return {
        chart: {
            height: 500
        },
        title: {
            text: 'Tổng ca nhiễm',
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F35858'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px">{point.key}</span><table>',
            pointFormat: 
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td> + <td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Tổng Ca Nhiễm',
                data: data.map(item => item.Confirmed)
            }
        ]
    }
}

function LineChart ({ data }) {
    const [options, setOptions] = useState({})
    const [reportType, setReportType] = useState('all')

    useEffect(() => {
        let filteredData = []
        switch (reportType) {
            case '30':
                filteredData = data.slice(data.length-30)
                break
            case '7': 
                filteredData = data.slice(data.length-7)
                break
            default:
                filteredData = data
                break
        }

        setOptions(generateOptions(filteredData))
    }, [data, reportType])

    return (
        <>
            <ButtonGroup
                size="small"
                variant="outlined"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    onClick={() => setReportType('all')}
                    color={reportType === 'all' ? 'error' : 'primary'}
                >Tất cả</Button>

                <Button 
                    onClick={() => setReportType('30')}
                    color={reportType === '30' ? 'error' : 'primary'}
                >30 ngày</Button>

                <Button 
                    onClick={() => setReportType('7')}
                    color={reportType === '7' ? 'error' : 'primary'}
                >7 ngày</Button>
            </ButtonGroup>
            <HighchartsReact 
                highcharts={Highchart}
                options={options}
            />
        </>
    )
}

export default memo(LineChart)