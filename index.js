const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// app.post('/',(req,res) => {
//     let email = req.body.email
	
// 	return res.send('the email value is '+email)
	

app.get('/array', (req, res) => {
   
    
    const arr = [
        {
            firstName : "Vicri",
            lastName  : "kurniawan",
            
    
        },
        {
            firstName : "Vicri",
            lastName  : "kurniawan",
            
    
        },
        {
            firstName : "Vicri",
            lastName  : "kurniawan",
            
    
        }
    ]  
    console.log({arr})
    return res.send({arr})
    
})
    
// let hasil = arr.sort()
//     return res.send(`The value of hasil is ${hasil}`)
//     console.log(arr)



app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
function newFunction() {
    console.log(firstName);
}

//mn