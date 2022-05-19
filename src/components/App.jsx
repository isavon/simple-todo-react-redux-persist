import React from 'react';
import '../styles/App.css';
import { Row } from 'antd';
import BeginForm from './BeginForm';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

const App = () => 
<>
    <BeginForm />
    <Row justify="center" align="middle">
        <TodoList />
        <CompletedList />
    </Row>
</>

export default App;