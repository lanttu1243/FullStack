sequence diagram
URL=https://studies.cs.helsinki.fi/exampleapp
participant browser
participant server

    browser-->>server: POST URL/new_note_spa
    server activate
    server-->>browser: the new note in json format
    server deactivate