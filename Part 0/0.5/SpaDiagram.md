sequenceDiagram

Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
Server-->>Browser: HTML DOCUMENT
Browser->>Server:GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: CSS file
Browser->>Server:GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Server-->>Browser:spa.js
Browser->>Server:GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser : Data.json file
Browser->>Server:GET https://studies.cs.helsinki.fi/favicon.ico
Server-->>Browser:FavIcon
