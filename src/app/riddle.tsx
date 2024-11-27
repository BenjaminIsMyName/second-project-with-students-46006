export default function Riddle() {
    const answers = []

    for (let i = 40; i < 70; i++) {
        const sum = i < 10 ? i : (i % 10) + Math.floor(i / 10)

        if (i % 3 == 0 && sum == 9) {
            answers.push(i)
        }
    }

    return (
        <div>
            The answers are{' '}
            {answers.map(answer => (
                <div key={answer}>{answer}</div>
            ))}
        </div>
    )
}
