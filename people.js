//Initialise the mongoose
const mongoose = require("mongoose");

//Db Connection
mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser: true });

//Cretae a Schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//Create a Model
const People = mongoose.model("People", peopleSchema);

//Create Document
// const people = new People({
//     name: "Suyog",
//     age: 29
// });

const chaitali = new People({
    name: "Chaitali",
    age: 29
});
const Bhushan = new People({
    name: "Bhushan",
    age: 20
});
const Nikhil = new People({
    name: "Nikhil",
    age: 27
});
const Tejal = new People({
    name: "Tejal",
    age: 9
});

const personsArray = [chaitali, Bhushan, Nikhil, Tejal];

//Insert To many document into DB
// People.insertMany(personsArray)
//     .then(function () {
//         console.log("Successfully saved defult items to DB");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

People.find()
    .then(function (people) {
        people.forEach(element => {
            console.log(element.name);
        });
    })
    .catch(function (err) {
        console.log(err);
    });