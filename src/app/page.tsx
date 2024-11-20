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
    return (
        <div>
            <br />
            <h1 className="text-center">Task Manager</h1>

            <div className="flex gap-4 flex-col p-5">
                {tasks.map(task => (
                    <div key={task.id} className="bg-green-300 rounded-lg p-2">
                        <h1>{task.title}</h1>
                        <h2
                            className={`text-sm ${
                                task.didComplete
                                    ? 'text-green-700'
                                    : 'text-red-500'
                            }`}
                        >
                            {task.didComplete ? 'Completed' : 'Not completed'}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
