import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="spacing">

            {/* <td>{todo.sno + 1}</td> */}
            <td>{todo.task}</td>
            <td>{todo.desc}</td>

            <Button className="btn btin-sm btn-danger" key={todo.sno} onClick={() => { onDelete(todo) }} color="error" variant="contained" startIcon={<DeleteIcon />}>
                Close
            </Button>


        </div>
    )
}
