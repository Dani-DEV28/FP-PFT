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
    const {
        workout,
        duration,
        intensity,
        date,
        notes
    } = req.body;

    console.log(workout);
    console.log(duration);
    console.log(intensity);
    console.log(date);
    console.log(notes);

    res.render('summary', { workout, duration, intensity, date, notes});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});