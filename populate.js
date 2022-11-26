const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./product.json');

const start = async () => {
  try {
    console.log('populating');
    await connectDB('mongodb://localhost/products');
    await Product.create(jsonProducts);
    console.log('success!!!');
  } catch (error) {
    console.log(error);
  }
}
start()
// testing
