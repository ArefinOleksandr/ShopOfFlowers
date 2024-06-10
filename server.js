const express = require('express');
const { connectToDb, addCategories, addProduct, addCombinateItems, getItemsFromDatabase } = require('./model');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

try {
    connectToDb();
    console.log('Connect to database complete!')
} catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error')
}

app.post('/create-category', async(req, res) => {
    console.log(req.body);
    const data  = req.body
    await addCategories(data.arrayCategories)
    .then(res.send(200))
    .catch(err => console.log(err));

})

app.post('/create-product', async(req, res) => {
    const data = req.body;
    await addProduct(data)
    .then(res.send(200))
    .catch(err => console.log(err));
})

app.post('/create-combinate-items', async (req, res) => {
    const data = req.body;
    await addCombinateItems(data.arrItems)
    .then(res.send(200))
    .catch(err => console.log(err));
})

app.get('/get-items-from-db', async (req, res) => {
    try {
        const data = await getItemsFromDatabase()
        .then(result => res.status(200).send(result))
    } catch (error) {
        res.status(500).send('Server Error! \n' + error);
        console.log(error)
    }
})

app.get('/express', async (req, res) => {
    res.send({express : 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'})
    
    
})