import { TaskType } from './types/task-type'

interface Props {
    task: TaskType
    toggle: () => void
}

export default function Task(props: Props) {
    return (
        <div key={props.task.id} className="bg-green-300 rounded-lg p-2">
            <h1>{props.task.title}</h1>

            <div className="flex gap-2">
                <input
                    onChange={props.toggle}
                    checked={props.task.didComplete}
                    type="checkbox"
                />

                <h2
                    className={`text-sm ${
                        props.task.didComplete
                            ? 'text-green-700'
                            : 'text-red-500'
                    }`}
                >
                    {props.task.didComplete ? 'Completed' : 'Not completed'}
                </h2>
            </div>
        </div>
    )
}
