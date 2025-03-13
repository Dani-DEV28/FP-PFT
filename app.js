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

    const workoutLog = {
        workout: workout,
        duration:duration,
        intensity: intensity,
        date: date,
        notes: notes
    };

    WS_LOGS.push(workoutLog);

    console.log(WS_LOGS);

    res.render('summary', { WS_LOGS });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});