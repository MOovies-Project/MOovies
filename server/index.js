import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('MOovies');
});

app.listen(port, () => {
  console.log('Server is listening at http://localhost:' + port);
});
