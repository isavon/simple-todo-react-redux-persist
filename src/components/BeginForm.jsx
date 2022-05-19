import React, { useRef } from 'react';
import { Button, Form, Input, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/todoSlice';

const BeginForm = () => {
    const [form] = Form.useForm();
    const textRef = useRef(null);
    const dispatch = useDispatch();

    const submit = (values) => {
        if (!values.text.trim().length) {
            return;
        }

        dispatch(createTodo(values.text));
        form.setFieldsValue({text: ''});
        textRef.current.focus();
    }

    return (
        <Row justify="center">
            <Form form={form} layout="inline" onFinish={submit}>
                <Form.Item name="text">
                    <Input placeholder="Enter a todo" ref={textRef} autoFocus autoComplete="off" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add todo</Button>
                </Form.Item>
            </Form>
        </Row>
    );
};

export default BeginForm;