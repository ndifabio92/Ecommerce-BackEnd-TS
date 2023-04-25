export const getProducts = async (req, res) => {
    try {
        res.send("hola");
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
};
//# sourceMappingURL=products.js.map