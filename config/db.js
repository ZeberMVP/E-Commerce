const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL)

const ProductModel = require('../models/product');
const ProviderModel = require('../models/provider');

const Product = ProductModel(sequelize, Sequelize);
const Provider = ProviderModel(sequelize, Sequelize);

Product.belongsTo(Provider, { foreignKey: 'provider_name' });
Provider.hasMany(Product, { foreignKey: 'provider_name' });

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database and tables created');
    });

module.exports = {
    sequelize,
    Product,
    Provider,
};
