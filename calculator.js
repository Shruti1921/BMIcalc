//importing modules
const express = require("express");
var bodyParser = require('body-parser')

// stores the express module into the app variable!
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

//sends bmiCalculator.html
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

//this is used to post the data on the specific route
app.post("/bmicalculator", function (req, res) {
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    bmi = weigh / (heigh * heigh);
 
    //number to string format
    bmi = bmi.toFixed();
 
    req_name = req.body.Name;
 
    // CONDITION FOR BMI
    if (bmi < 19) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Overweight!");
    } else {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Obese!");
    }
});

//this is used to listen a specific port!
app.listen(port, () => {
    console.log('listening on port');
})
