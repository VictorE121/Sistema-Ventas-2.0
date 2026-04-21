import Product from "../models/Product.js";

//Crear Registro
export const createProduct = async (req, res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Obtener Productos Existentes
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

//Actualizar Producto
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(product);

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

//Eliminar Producto
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};