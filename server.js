import express from 'express';

const app = express();
const port = 1106;
const URL = 'localhost';

app.get('/', (request, response) => {
    response
        .type('json')
        .send({
            messaggio: 'questo è un server di mia proprietà'
        })
})

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('server in ascolto sulla porta ' + port);
    }
})