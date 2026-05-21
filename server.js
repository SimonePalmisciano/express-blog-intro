import express, { response } from 'express';
import { posts } from './posts.js';

const app = express();
const port = 1106;
const URL = 'localhost';

app.get('/', (request, response) => {
    // response.json({}) questa è una scorciatoia di quella sotto
    response
        .type('json')
        .send([
            {
                messaggio: 'questa è la home del mio BLOG'
            }
        ])
});

app.get('/bacheca', (request, response) => {
    response.json({ posts })
})

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('server in ascolto sulla porta ' + port);
    }
})