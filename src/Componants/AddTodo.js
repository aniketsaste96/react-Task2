import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const AddTodo = ({ addTodo }) => {

    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!task || !desc) {
            alert(" Please Enter todo Title and Description!!!");
        } else {
            addTodo(task, desc);
        }

    }

    return (
        <div className="container my-2" id="addtodoList" >
            <h3 className="text-center" id="addtodo">Add Your Todos</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>

                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="form-control" id="title" aria-describedby="todotitle" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>


                <Button type="submit" variant="contained" disableElevation>
                    Add Todo
                </Button>
            </form>
        </div>
    )
}
