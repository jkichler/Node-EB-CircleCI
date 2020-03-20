const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('*', (req, res) => {
  res.send(`<h1>Hello My World</h1>`);
});
// testing
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
