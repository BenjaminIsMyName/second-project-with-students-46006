import { Button } from '@/components/ui/button'
import { TaskType } from './types/task-type'
import { Trash } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { FaBeer, FaCoffee } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
interface Props {
    task: TaskType
    toggle: () => void
    delete: () => void
}

export default function Task(props: Props) {
    return (
        <div
            key={props.task.id}
            className="bg-green-300 rounded-lg p-2 flex justify-between items-center"
        >
            <div>
                <h1>
                    <FaBeer />
                    <FaCoffee />

                    {props.task.title}
                </h1>

                <p>{formatDistanceToNow(props.task.createdAt)}</p>

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

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="bg-red-500">
                        <Trash />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gradient-to-t from-red-800 to-black">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={props.delete}
                            className="bg-red-500"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
