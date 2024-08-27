import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { page404 } from './pages/page404.js';
import { pageAbout } from './pages/pageAbout.js';

const app = express();
const port = 5018;


app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.send(pageHome());
});

app.get('/about', (req, res) => {
    return res.send(pageAbout());
});

app.get('/create-account', (req, res) => {
    return res.send(pageCreateAccount());
});

app.get('/accounts', (req, res) => {
    return res.send(pageViewAllAccounts());
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


// app.get('/css/main.css', (req, res) => {
//     return res
//         .setHeader('Content-Type', 'text/css')
//         .send(`* {margin: 0;}`);
// });

app.get('*', (req, res) => {
    return res.send(page404());
});

app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});