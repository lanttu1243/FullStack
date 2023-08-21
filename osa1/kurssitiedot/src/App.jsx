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
            <Part part={props.pt[0].name} exercises={props.pt[0].exercises}/>
            <Part part={props.pt[1].name} exercises={props.pt[1].exercises}/>
            <Part part={props.pt[2].name} exercises={props.pt[2].exercises}/>
        </div>
    )
}
const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.pt[0].exercises + props.pt[1].exercises + props.pt[2].exercises}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 21},
        {
        name: 'Using props to pass data',
        exercises: 7},
        {
        name: 'State of a component',
        exercises: 14}]

    return (
        <div>
            <Header course={course}/>
            <Content pt={parts}/>
            <Total pt={parts}/>
        </div>
    )
}

export default App