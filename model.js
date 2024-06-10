const mongoose = require('mongoose');

// Schemas -->

const combinateItemSchema = new mongoose.Schema({
    titleCombinateItem : String,
    imageCombinateItem : String,
    pricecombinateItem : String
})

const productSchema = new mongoose.Schema({
    titleItem : String,
    priceItem : Number,
    imageItem : String,
    combinateItems : [combinateItemSchema]
})

const categorySchema = new mongoose.Schema({
    imageCategory : String,
    titleCategory : String,
    items : [productSchema]
})

// Models -->

const Category = mongoose.model('Category', categorySchema);


// Functions -->

const addCategories = async (objectCategory) => {
    await Category.insertMany(objectCategory)
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

const addProduct = async (objectProduct) => {
    await Category.updateOne({titleCategory : objectProduct.titleCategory}, 
        {$push : {
            items : objectProduct.arrProduct
        }})
        .then(result => console.log(result))
        .catch(err => console.log(err));

}

const addCombinateItems = async (objectItems) => {
    await Category.updateMany({}, { $push: { "items.$[].combinateItems": { $each: objectItems } } })
    .then(result => {
        console.log("Обновление прошло успешно:", result);
    })
    .catch(error => {
        console.error("Ошибка при обновлении:", error);
    });
}

const getItemsFromDatabase = async () => {
    const data = await Category.find()
    return data;
}

const connectToDb = async () => {
    await mongoose.connect('mongodb+srv://Admin:Kot007kot@calmar.hsdtwcq.mongodb.net/?retryWrites=true&w=majority&appName=Calmar');
}

module.exports = {
    connectToDb,
    addCategories, 
    addProduct, 
    addCombinateItems, 
    getItemsFromDatabase
};