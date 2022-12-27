const path = require('path');
const express = require('express');

const app = express();

const userRouter = require('./routes/users');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist/assets')));

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
})

app.use((req, res) => res.status(404).send('Error: Not Found'));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
