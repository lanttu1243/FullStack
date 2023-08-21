const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}
const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.pt1.name} exercises={props.pt1.exercises}/>
            <Part part={props.pt2.name} exercises={props.pt2.exercises}/>
            <Part part={props.pt3.name} exercises={props.pt3.exercises}/>
        </div>
    )
}
const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.pt1.exercises + props.pt2.exercises + props.pt3.exercises}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 21}
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7}
    const part3 = {
        name: 'State of a component',
        exercises: 14}

    return (
        <div>
            <Header course={course}/>
            <Content pt1={part1} pt2={part2} pt3={part3}/>
            <Total pt1={part1} pt2={part2} pt3={part3}/>
        </div>
    )
}

export default App