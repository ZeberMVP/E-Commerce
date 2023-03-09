module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
        provider_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        CIF: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false
        });
    return Provider;
};
