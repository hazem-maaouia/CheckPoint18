import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Addtask} from '../Js/Action/';


const AddTask = ({ handleFilter }) => {
    const dispatch = useDispatch()
    const [task, setTask] = useState('')
    const AddNewTask = () => {
        if (task) {
            dispatch(Addtask({ task: task, isDone: false, id: Math.random() }));
            setTask('')
        }
        else alert('please enter a valid task')

    }
    return (
        <div className='header'>
            <h2>List of what we should do</h2>
            <input type='text'
                placeholder='entre a new task'
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <div>
                <button onClick={
                    AddNewTask
                }
                >Add</button>
                <button onClick={handleFilter}>All</button>
            </div>

        </div>
    )
}

export default AddTask

