import { useState } from 'react'

const Filter = (props) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    filter shown with:
                    <input
                        value={props.filtr}
                        onChange={props.handleFilterChange}
                    />
                </div>
            </form>
        </div>
    )
}
const PersonForms = (props) => {
    return (
        <div>
        <h2>Add a new person</h2>
            <form onSubmit={props.addNumber}>
                <div>
                    name:
                    <input
                        value={props.newName}
                        onChange={props.handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={props.newNumber}
                        onChange={props.handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
const Persons = (props) => {
    return (
        <div>
            <h2>Numbers</h2>
            {props.people.filter(person => person.name.toLowerCase().includes(props.filtr.toLowerCase())).map(person =>
                <p key={person.name}>
                    {person.name} {person.number}
                </p>)}
        </div>

    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchFilter, setSearchFilter] = useState('')

    const addNumber = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const numberObject = {
            name: newName,
            number: newNumber
        }
        const checkDouble = (obj) => obj.name === numberObject.name || obj.number === numberObject.number
        if (persons.findIndex(checkDouble) >= 0) {
            alert(`${numberObject.name} or ${numberObject.number} is already added to phonebook`)
        } else if (((numberObject.name === "") || (numberObject.number === ""))) {
            alert('The either the name or the number field is empty!')
        } else {
            setPersons(persons.concat(numberObject))
            console.log(persons)
        }
        setNewName('')
        setNewNumber('')
    }
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setSearchFilter(event.target.value)
    }


    return (
        <div>
            <Filter handleFilterChange={handleFilterChange}
                    filtr={searchFilter}/>
            <PersonForms addNumber={addNumber}
                         newName={newName}
                         newNumber={newNumber}
                         handleNameChange={handleNameChange}
                         handleNumberChange={handleNumberChange}/>
            <Persons people={persons} filtr={searchFilter}/>
        </div>
    )

}

export default App