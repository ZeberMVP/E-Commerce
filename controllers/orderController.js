const proccessOrder = async (req, res) => {
    try {
        order = req.body
        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'There was an error' });
    }
};

module.exports = {
    proccessOrder
};