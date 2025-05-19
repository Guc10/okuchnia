const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'okuchnia main page' });
});

app.listen(port, () => console.log(`server is up on port ${port}`));