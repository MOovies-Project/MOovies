import express from 'express';

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server');
});

app.get('/favourite-movies-list', (req, res) => {
  res.send('Favourite 100');
});

app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
