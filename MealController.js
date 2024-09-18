// соединяем с MealModel
const MealModel = require('./MealModel')


// запрос, чтобы получить информацию - get-запрос
module.exports.getMeal = async(req,res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal)
}
// запрос, чтобы менять информацию - POST запрос
module.exports.saveMeals = async(req,res) => {
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => { console.log('Meal added')
        res.send(data)        
    })
   
}
// запрос, чтобы удалить информацию - DELETE запрос
module.exports.deleteMeal = async(req,res) => {
    const{ _id} = req.body;
    MealModel.findByIdAndDelete(_id)
    .then (() => res.send("Deleted a meal"))
}
module.exports.editMeal = async(req,res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, {title}) 
    .then(() => res.send("Edited a meal"))
}