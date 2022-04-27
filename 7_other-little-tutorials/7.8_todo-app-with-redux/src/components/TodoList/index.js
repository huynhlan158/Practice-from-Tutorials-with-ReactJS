import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { addTodo } from '../../redux/actions'
import { filteredTodoListSelector } from '../../redux/selectors'

export default function TodoList() {
  const dispatch = useDispatch()
  const inputRef = useRef()

  const [todoInput, setTodoInput] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(filteredTodoListSelector)

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value)
  }

  const handlePrioritySelect = value => {
    setPriority(value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoInput,
      priority: priority,
      completed: false
    }))

    setTodoInput('')
    setPriority('Medium')
    inputRef.current.focus()
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}

        {todoList.map(todo => (
          <Todo 
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            value={todoInput}
            onChange={handleTodoInput}
            ref={inputRef}
          />

          <Select 
            defaultValue="Medium"
            value={priority}
            onChange={handlePrioritySelect}
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

          <Button 
            type='primary'
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
