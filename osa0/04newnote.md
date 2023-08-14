sequence graph NEW NOTE
participant browser
participant server
# For this graph URL is https://studies.cs.helsinki.fi/exampleapp

    browser -->> server: POST "FINNOO" to URL/new_note
    activate server
    server -->> browser: 302 FOUND
    deactivate server
# the server doesn't have any other reply other than adding the note was successful.
    browser -->> server: GET URL/notes
    activate server
    server -->> browser: the HTML document
    deactivate server

    browser -->> server: GET URL/main.css
    activate server
    server -->> browser: the css file
    deactivate server

    browser -->> server: GET URL/main.js
    activate server
    server -->> browser: the javascript file
    deactivate server

    browser -->> server: GET URL/data.json
    activate server
    server -->> browser: the contents of the json file
    deactivate server
# data.json file includes to newly posted note.