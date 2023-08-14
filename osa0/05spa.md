sequence diagram
    URL=https://studies.cs.helsinki.fi/exampleapp
    participant browser
    participant server

    browser-->>server: GET URL/spa
    server activate
    server-->>browser: the html document
    server deactivate

    browser-->>server: GET URL/main.css
    server activate
    server-->>browser: the css file
    server deactivate

    browser-->>server: GET URL/spa.js
    server activate
    server-->>browser: the contents of javascript file
    server deactivate

    browser-->>server: GET URL/data.json
    server activate
    server-->>browser: the json file contents
    server deactivate