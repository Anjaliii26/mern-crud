require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log(process.env.MONGODB_URI);
// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))   
.catch(err => console.log(err));


app.use('/users', require('./routes/Users'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});