const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Book Review App!');
});

const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
