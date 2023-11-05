import {useEffect, useState} from 'react'
import noteService from "./services/numbers"

const Notification = (props) => {
    if (props.message.message === null) {
        return null
    }

    return (
        <div className={props.message.style}>
            {props.message.message}
        </div>
    )
}
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
                    {person.name} {person.number} <button type={"button"} onClick={props.dltEntry.bind(this, person)}> Delete </button>
                </p>)}
        </div>

    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchFilter, setSearchFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState({message: null, style: 'error'})

    // A function used to pull the contents of db.json/persons
    useEffect(() => {
        noteService
            .getAll()
            .then(response => {
                setPersons(response.data)
                })
            }, [])

    const dltEntry = (object) => {
        if (window.confirm(`Are you sure you want to delete ${object.name} from Phone Book`)) {
            noteService.deleteEntry(object.id + 1).then(
                () => {
                    noteService
                        .getAll()
                        .then(response => {
                            setPersons(response.data)
                            const msg = {
                                message: `The number for ${object.name} was successfully removed.`,
                                style: 'success'
                            }
                            setErrorMessage(msg)
                            setTimeout(() => {
                                setErrorMessage({message: null, style: 'error'})
                            }, 5000)
                        })
                }).catch(error => {
                setErrorMessage({message: `The person has been deleted from the database`, style: 'error'})
                setTimeout(() => {
                    setErrorMessage({message: null, style: 'error'})
                }, 5000)
            })
        }
    }
    const addNumber = (event) => {
        event.preventDefault()
        const numberObject = {
            name: newName,
            number: newNumber
        }
        const checkDoubleName = (obj) => obj.name === numberObject.name;
        if (persons.findIndex(checkDoubleName) >= 0) {
            const id = persons[persons.findIndex(checkDoubleName)].id
            if (window.confirm(`${numberObject.name} is already in the phonebook do you want to replace it?`)) {
                noteService.update(id, numberObject).then(
                    response => {
                        setPersons(persons.map(person => person.id !== id ? person : response.data));
                        const msg = {
                            message: `The number for ${persons[persons.findIndex(checkDoubleName)].name} was changed successfully`,
                            style: 'success'
                        }
                        setErrorMessage(msg);
                        setTimeout(() => {
                            setErrorMessage({message: null, style: 'error'})
                        }, 5000)
                    }).catch(error => {
                    setPersons(persons)
                    setErrorMessage({message: `The person was not found in the database`, style: 'error'})
                    setTimeout(() => {
                        setErrorMessage({message: null, style: 'error'})
                    }, 5000)
                })
            }
        } else if (((numberObject.name === "") || (numberObject.number === ""))) {
            const msg = {
                message: 'Either the name or the number field is empty!',
                style: 'error'
            }
            setErrorMessage(msg);
            setTimeout(() => {
                setErrorMessage({message: null, style: 'error'})
            }, 5000)
        } else {
            noteService
                .create(numberObject)
                .then(response => {
                    setPersons(persons.concat(numberObject));
                    setErrorMessage({message: `Succesfully added ${numberObject.name}`, style: 'success'});
                    setTimeout(() => {
                        setErrorMessage({message: null, style: 'error'})
                    }, 5000);
                }).catch(error => {
                    setErrorMessage({message: `Something went wrong`, style: 'error'});
                    setTimeout(() => {
                        setErrorMessage({message: null, style: 'error'})
                    }, 5000);
                }
            )

        }
        setNewName('')
        setNewNumber('')
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        setSearchFilter(event.target.value)
    }


    return (
        <div>
            <Notification message={errorMessage} />
            <Filter handleFilterChange={handleFilterChange}
                    filtr={searchFilter}/>
            <PersonForms addNumber={addNumber}
                         newName={newName}
                         newNumber={newNumber}
                         handleNameChange={handleNameChange}
                         handleNumberChange={handleNumberChange}/>
            <Persons people={persons} filtr={searchFilter} dltEntry={dltEntry}/>
        </div>
    )

}

export default App