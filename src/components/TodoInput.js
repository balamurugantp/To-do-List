import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    style={{fontSize: 25 + 'px'}}
                    placeholder="Enter your todo"
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit" style={{fontSize: 20 + 'px', marginLeft: 20 + 'px'}}>Add Todo</button>
            </form>
        </div>

    );
};

export default TodoInput;