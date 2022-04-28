import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import filtersSlice from './filtersSlice'

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [textSearch, setTextSearch] = useState('')
  const [filteredStatus, setFilteredStatus] = useState('All')
  const [filteredPriority, setFilteredPriority] = useState([])

  const handleFilterSearchChange = e => {
    setTextSearch(e.target.value)
    dispatch(filtersSlice.actions.filterSearchChange(e.target.value))
  }

  const handleFilterStatusChange = e => {
    setFilteredStatus(e.target.value)
    dispatch(filtersSlice.actions.filterStatusChange(e.target.value))
  }

  const handleFilterPriorityChange = value => {
    setFilteredPriority(value)
    dispatch(filtersSlice.actions.filterPriorityChange(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          placeholder='input search text' 
          value={textSearch}
          onChange={handleFilterSearchChange}
        />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={filteredStatus}
          onChange={handleFilterStatusChange}
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filteredPriority}
          onChange={handleFilterPriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
