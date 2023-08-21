import { useState } from 'react'
const StatisticLine = (props) => {
    var text = props.text
    var value = props.value
    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value}
            </td>
        </tr>
    )
}
const Statistic = (props) => {
    var good = props.good
    var neutral = props.neutral
    var bad = props.bad
    var sum = 0
    var mean = 0
    var positive = 0

    const setSum = () => {
        sum = good + neutral + bad
        return sum
    }
    const setMean = () => {
        if (setSum() === 0) {
            mean = 0
        } else {
            mean = (good - bad) / setSum()
        }
        return mean
    }
    const setPositive = () => {
        if (setSum() === 0) {
            positive = 0
        } else {
            positive = 100 * good / setSum()
        }
        return positive
    }
        if (setSum() !== 0) {
            return (
                <div>
                    <h2>
                        Statistics
                    </h2>
                    <table>
                        <tbody>
                            <StatisticLine text={"Good"} value={good}/>
                            <StatisticLine text={"Neutral"} value={neutral}/>
                            <StatisticLine text={"Bad"} value={bad}/>
                            <StatisticLine text={"Sum"} value={setSum()}/>
                            <StatisticLine text={"Mean"} value={setMean()}/>
                            <StatisticLine text={"Positive (%)"} value={setPositive()}/>
                        </tbody>
                    </table>
                </div>
            )
        } else
            return (
                <div>
                    <h2>Statistics</h2>
                    <p>
                        No Feedback Given
                    </p>
                </div>
            )

}
const Button = (props) => {
    const text = props.text
    const func = props.func
    const val = props.val
    return (
        <button onClick={() => func(val + 1)}>{text}</button>
    )
}
const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text={"Good"} func={setGood} val={good}/>
            <Button text={"Neutral"} func={setNeutral} val={neutral}/>
            <Button text={"Bad"} func={setBad} val={bad}/>
            <Statistic good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}
export default App
