
const getAllDataFromDatabase = async () => {
    const response = await fetch('/get-items-from-db')
    const data = await response.json();
    const context = require.context('../../images', true, /\.(png|jpg|jpeg|gif|svg)$/);

    data.forEach(category => {
        category.imageCategory = context(`./${category.imageCategory.slice(13)}`);
        category.items.forEach(item => {
            item.imageItem = context(`./${item.imageItem.slice(13)}`);
            item.combinateItems.forEach(combItem => {
                combItem.imageCombinateItem = context(`./${combItem.imageCombinateItem.slice(13)}`); // Для комбинированных изображений
              });
        })
    })
    return data;
}

export default getAllDataFromDatabase;