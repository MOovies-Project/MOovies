import express from 'express';
import fs from 'fs';

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server');
});

app.get('/favourite-movies-list', (req, res) => {
  fs.readFile('favourite-movies-list.json', (err, data) => {
    if (err) {
      throw err;
    }
    let favouriteMoviesList = JSON.parse(data);
    res.json(favouriteMoviesList);
  });
});

app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
