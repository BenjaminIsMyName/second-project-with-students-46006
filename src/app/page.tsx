'use client'

import { useState } from 'react'
import Task from './task'
import { TaskType } from './types/task-type'
import { CoolCard } from './cool-card'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { FaPlus } from 'react-icons/fa'
import { Bounce, ToastContainer, toast } from 'react-toastify'

const INIT_STATE: TaskType[] = [
    // למחוק את המשימות שהיו פה
]

export default function Page() {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(INIT_STATE)
    const [count, setCount] = useState(0) // להוסיף את השורה הזאת

    function addTask() {
        setCount(count + 1) // וגם את השורה הזאת

        setTasks([
            ...tasks,
            {
                title: value,
                didComplete: false,
                id: count,
                createdAt: new Date(),
            },
        ])

        setValue('')

        toast.success('New task added', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        })
    }

    return (
        <div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <Drawer>
                <DrawerTrigger className="bg-slate-300 p-4 fixed left-2 top-2 rounded-lg">
                    Open
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>חג שמח</DrawerTitle>
                        <DrawerDescription>
                            נתראה בשיעור הבא אחרי חנוכה
                        </DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>

            <br />
            <h1 className="text-center">Task Manager</h1>
            <h2 className="text-center">Tasks created: {count} </h2>
            <br />

            <div className="flex gap-3 justify-center">
                <input
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    type="text"
                    className="border border-pink-200 p-1.5 rounded-xl"
                />
                <button
                    onClick={addTask}
                    className="bg-pink-500 p-1.5 rounded-lg"
                >
                    <FaPlus />
                </button>
            </div>

            <br />

            <div className="flex gap-4 flex-col p-5">
                {tasks.map(task => (
                    <Task
                        task={task}
                        key={task.id}
                        toggle={function () {
                            // Write code to toggle didComplete for this task
                            setTasks(
                                tasks.map(t =>
                                    t.id != task.id
                                        ? t
                                        : { ...t, didComplete: !t.didComplete }
                                )
                            )
                        }}
                        delete={function () {
                            setTasks(tasks.filter(t => t.id != task.id))
                        }}
                    />
                ))}
            </div>

            <CoolCard />
        </div>
    )
}
