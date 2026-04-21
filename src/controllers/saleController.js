import Sale from '../models/Sale.js'
import Product from '../models/Product.js'

export const createSale = async (req, res) => {
    try {
        const { products } = req.body;
        
        let total = 0;
        let saleProducts = [];
        
        for (const item of products) {
            const product = await Product.findById(item.productId);

            if(!product) {
                return res.status(404).json({ msg: 'Producto no encontrado'});
            }

            //Validar Existencias
            if (product.stock < item.quantity) {
                return res.status(400).json({
                    msg: `Stock insuficiente para ${product.name}`
                });
            }

            //Calcular Total
            const subtotal = product.price * item.quantity;
            total += subtotal;

            saleProducts.push({
                productId: product._id,
                quantity: item.quantity,
                price: product.price
            });

            product.stock -= item.quantity;
            await product.save();
        }
        
        const sale = new Sale({
            products: saleProducts,
            total,
            user: req.user.id
        });

        await sale.save();

        res.status(201).json(sale);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find()
            .populate('products.productId', 'name')
            .populate('user', 'name');

        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};