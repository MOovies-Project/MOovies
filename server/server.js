import express, { response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/favourite-movies-list', (req, res) => {
  fs.readFile('favourite-movies-list.json', (err, data) => {
    if (err) throw err;
    let favouriteMoviesList = JSON.parse(data);
    res.json(favouriteMoviesList);
  });
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, rep) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
