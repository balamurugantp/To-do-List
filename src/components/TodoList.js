import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{todo.name}</td>
                        <td>
                            <button className='btn btn-sm btn-primary' onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
               ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;