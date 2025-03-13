import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
const PORT = 3000;

const WS_LOGS = [];

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {
    res.render('summary');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});