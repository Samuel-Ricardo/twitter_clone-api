import expresss from 'express';

const app = expresss();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () =>
  console.log('[API] | listening on: http://localhost:3000'),
);
