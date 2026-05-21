import express, { response } from 'express';
import { posts } from './posts.js';

const app = express();
const port = 1106;
const URL = 'localhost';

// middleware
app.use(express.static('public'));

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

app.get(`/bacheca`, (request, response) => {
    response.json(posts.map(post => {
        return {
            ...post,
            img: `http://${URL}:${port}/bacheca/${post.img}`,
        }
    }));
});

app.get('/prova-query', (request, response) => {
    const queryString = request.query; // qui ci siamo presi i parametri 
    // che vengono passati tramite query string, quindi queryString sarà un oggetto
    // con i parametri
    const { param2 } = queryString; // qui abbiamo fatto il destructuring
    // quindi al posto di param2 ci potrebbe essere qualsiasi cosa gli abbiamo 
    // passato nell'url es: http://localhost:1106/prova-query?param2=ciao
    // param2 dichiarato sorpa avrà come valore 'ciao';

    console.log(queryString);

    response.json({
        valore: param2
    })
});

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('server in ascolto sulla porta ' + port);
    }
});