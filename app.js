const express = require('express')
const app = express()

let productsArray = [{name: "John", poles: 1}];
// Configuration constants
const PORT = 3000;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';

// Middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);

app.get('/', (req, res) => {
  // Use the imported functions to get our data
  res.render('index', { productsArray: productsArray });
});

app.post('/save-product', (req, res) => {
  const { productName, poles } = req.body;
  productsArray.push({ name: productName, poles: Number(poles) });
  console.log(req.body);
  console.log(productName);
  console.log(poles);
  res.redirect('/');

  console.log(`Products array: ${productsArray[0].name}`)
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});