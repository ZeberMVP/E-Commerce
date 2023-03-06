module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        product_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        relevance: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: false
        },
        image: {
            type: DataTypes.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
        {
            timestamps: false
        });
    return Product;
};
