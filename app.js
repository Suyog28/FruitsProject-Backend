const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name not fount"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Juccy"
})



Fruit.deleteOne({ name: "WaterLemon" })
    .then(() => {
        console.log("Record Deleted")
    }).catch((err) => {
        console.log(err)
    })
// fruit.save();
// const banana = new Fruit({
//     name: "banana",
//     rating: 2,
//     review: "Delicious"
// })
// const mongo = new Fruit({
//     name: "mongo",
//     rating: 10,
//     review: "spicy"
// })

// Fruit.insertMany([kiwi, banana, mongo]);