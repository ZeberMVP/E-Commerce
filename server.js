const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Middlewares modules
const morgan = require('morgan');

// Routes modules
const productRouter = require('./routes/productRoutes');
const providerRouter = require('./routes/providerRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/product', productRouter);
app.use('/api/provider', providerRouter);
app.use('/api/order', orderRouter);

if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


app.listen(PORT, () => console.log(`Server started port ${PORT}`));