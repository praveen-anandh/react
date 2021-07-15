// const { Router } = require('express');

const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors())

app.use(express.json())



// const INR = 500
// const money = "Dollar"
 


// console.log("INR is " ,INR, "money is", money)
// app.get('/hi',async (req, res) => {
//     res.status(200).send('hi from server')
// })
app.post('/', async (req, res) => {
    console.log(req.body)
    const INR = req.body.INR
    console.log(INR)
    const money = req.body.money
    console.log(money)
    let converted = 1

try{switch(money) {
    case "Dollar": 
    // If request has Dollar, it returns random number
    converted  = Math.floor(Math.random() * 10);
    res.status(200).send({value : converted})
    break;
    //If Euro, returns original value
    case "Euro": 
    converted  = INR * 88.15
    res.status(200).send({value : converted})
    break;
    case "Pound" :
    converted  = INR * 103.07
    res.status(200).send({value : converted})
    break;
    default: 
    res.send(('do not match'))
} }
    catch(err) {
        res.send(err)
    }
})


app.listen(3008, () => console.log('running'))