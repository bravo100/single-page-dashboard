const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));
// get all anchor and display into browser as single page
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running...`));
