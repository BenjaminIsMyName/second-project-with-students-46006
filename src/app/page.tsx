const tasks = [
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
            <h1>Task Manager</h1>

            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
