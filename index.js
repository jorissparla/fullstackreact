const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const p = req.query.p || 'Buddy';
  res.send({ app: `there ${p}` });
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
