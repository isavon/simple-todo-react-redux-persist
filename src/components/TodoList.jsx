import React from 'react';
import { Checkbox, List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createCompleted, removeTodo } from '../store/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    if (!todos.length) {
        return;
    }

    const toggle = todo => {
        dispatch(createCompleted(todo.text));
        dispatch(removeTodo(todo.id));
    }

    return (
        <List 
            size="small"
            dataSource={todos}
            renderItem={todo => (
                <List.Item>
                    <Checkbox checked={false} onChange={() => toggle(todo)}>{todo.text}</Checkbox>
                    <CloseOutlined onClick={() => dispatch(removeTodo(todo.id))} />
                </List.Item>
            )}
        />
    );
};

export default TodoList;