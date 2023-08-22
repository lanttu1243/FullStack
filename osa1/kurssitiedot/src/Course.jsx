const Header = (props) => {
    return (
        <div>
            <h2>{props.course.name}</h2>
        </div>
    )
}
const Part = (props) => {
    return (
        <p>{props.part.name}  {props.part.exercises}</p>
    )
}
const Content = (props) => {
    return (
        <div>
            {props.course.parts.map( pt =>
                <Part key={pt.id} part={pt} />
            )}
        </div>
    )
}
const Total = (props) => {
    const sum = (total, currentValue) => {
        return total + currentValue
    }
    return (
        <p>
            <b>
                Total Number of Exercises for Course: {
                props.course.parts.map(pt =>
                    pt.exercises
                ).reduce(sum)
            }
            </b>
        </p>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course}/>
            <Content course={props.course}/>
            <Total course={props.course}/>
        </div>
    )
}
export default Course