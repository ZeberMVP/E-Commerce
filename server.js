const express = require('express');
const path = require('path');
require('dotenv').config();

// Middlewares modules
const morgan = require('morgan');

// Routes modules
const productRouter = require('./routes/productRoutes');
const providerRouter = require('./routes/providerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json({ extended: false }));
app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Routes:
app.use('/api/product', productRouter);
app.use('/api/provider', providerRouter);



app.listen(PORT, () => console.log(`Server started port ${PORT}`));