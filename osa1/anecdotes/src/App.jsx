import { useState } from 'react'

const App = () => {
    const strings = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = useState(0)
    const [votes, addVote] = useState(strings.map(_ => 0))
    const oneAdded = (index, arr) => {
        const array = [...arr]
        for (let i = 0; i < arr.length;  i++) {
            if (i === index) {
                array[index]++
            }
        }
        return array
    }

    return (
        <div>
            <h4>Anecdotes:</h4>
            <p>
                {strings[selected]}<br/>
                Votes:  {votes[selected]}<br/>
            </p>
            <button onClick={() => setSelected(Math.floor(8 * Math.random()))}>Next Anecdote</button>
            <button onClick={() => addVote(oneAdded(selected, votes))}>Vote</button>
            <h4>The most votes:</h4>
            <p>
                {strings[votes.indexOf(Math.max.apply(0, votes))]}<br/>
                Votes: {votes[votes.indexOf(Math.max.apply(0, votes))]}
            </p>
        </div>
    )
}

export default App