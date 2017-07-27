const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Params', req.query.p);
  res.send({ app: 'there' });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
