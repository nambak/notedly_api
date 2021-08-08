const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (request, response) => response.send('Hello Web Server!!!'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));