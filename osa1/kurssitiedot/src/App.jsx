const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.pt1} exercises={props.ex1}/>
            <Part part={props.pt2} exercises={props.ex2}/>
            <Part part={props.pt3} exercises={props.ex3}/>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 =  1000
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content pt1={part1} pt2={part2} pt3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
            <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
        </div>
    )
}

export default App