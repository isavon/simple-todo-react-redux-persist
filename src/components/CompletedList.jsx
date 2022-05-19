import React from 'react';
import { Checkbox, Divider, List, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, removeCompleted } from '../store/todoSlice';

const CompletedList = () => {
    const completed = useSelector((state) => state.todos.completed);
    const dispatch = useDispatch();

    if (!completed.length) {
        return;
    }

    const toggle = todo => {
        dispatch(createTodo(todo.text));
        dispatch(removeCompleted(todo.id));
    }

    return (
        <>
            <Divider plain><Typography.Text type="secondary">{completed.length} completed</Typography.Text></Divider>
            <List 
                size="small"
                className="completed-list"
                dataSource={completed}
                renderItem={todo => (
                    <List.Item>
                        <Checkbox checked onChange={() => toggle(todo)}>{todo.text}</Checkbox>
                        <CloseOutlined onClick={() => dispatch(removeCompleted(todo.id))} />
                    </List.Item>
                )}
            />
        </>
    );
};

export default CompletedList;