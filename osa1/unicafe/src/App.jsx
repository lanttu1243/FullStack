import { useState } from 'react'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            <p>
                good: {good} <br/>
                neutral: {neutral} <br/>
                bad: {bad} <br/>
                sum: {good + bad + neutral} <br/>
                mean: {(good - bad) / (good + bad + neutral)} <br/>
                positive: {good / (good + bad + neutral)}%
            </p>
        </div>
    )
}
export default App
