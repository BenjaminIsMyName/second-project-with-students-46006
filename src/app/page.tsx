'use client'

import { useState } from 'react'
import Task from './task'
import { TaskType } from './types/task-type'

const tasks: TaskType[] = [
    {
        title: 'Buy cola',
        didComplete: false,
        id: 1,
    },
    {
        title: 'Go to school',
        didComplete: true,
        id: 2,
    },
    {
        title: 'Do homework',
        didComplete: false,
        id: 3,
    },
]

export default function Page() {
    const [value, setValue] = useState('')

    function addTask() {
        tasks.push({
            title: value,
            didComplete: false,
            id: tasks.length + 1,
        })
        setValue('')
    }

    return (
        <div>
            <br />
            <h1 className="text-center">Task Manager</h1>

            <br />

            <div className="flex gap-3 justify-center">
                <input
                    onChange={e => setValue(e.target.value)} // <<<<
                    value={value} // <<<<
                    type="text"
                    className="border border-pink-200 p-1.5 rounded-xl"
                />
                <button
                    onClick={addTask} // <<<<
                    className="bg-pink-500 p-1.5 rounded-lg"
                >
                    Add
                </button>
            </div>

            <br />

            <div className="flex gap-4 flex-col p-5">
                {tasks.map(task => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    )
}
