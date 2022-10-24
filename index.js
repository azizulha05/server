const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000;

const productsConnection = require('./Data/products.json')

app.get('/', (req, res) => {
    res.send('My Server test')
})

app.get('/products', (req, res) => {
    res.send(productsConnection)
})
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const getSignItem = productsConnection?.find(p => p.id == id);
    if (!getSignItem) {
        res.send('Please search right product')
    }
    res.send(getSignItem)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const getCategory = productsConnection?.filter(p => p.id == id);
    res.send(getCategory)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} `);
})


module.exports = app;