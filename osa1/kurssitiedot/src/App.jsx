import Course from './Course.jsx'
const App = () => {
    const courses = [{
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 21,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'The fuck around and find out of web development',
                exercises: 100,
                id: 4
            }
        ]
    },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        },
        {
            name: 'The digital design of websites',
            id: 3,
            parts: [
                {
                    name: 'The outlay',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Graphical design',
                    exercises: 15,
                    id: 2
                },
                {
                    name: 'The mathematics of design',
                    exercises: 314,
                    id: 3
                },
                {
                    name: 'Project',
                    exercises: 25,
                    id: 4
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map(course =>
                <Course key={course.id} course={course}/>
            )}
        </div>
    )
}

export default App