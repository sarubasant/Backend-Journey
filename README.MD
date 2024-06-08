## EXPRESS.js Framework
-npm init //used to initialize package.json file.

# Introduction to Express.js
- ek npm package hai.
- ek framework hai.
- manages everything from receiving the request and giving the response.

* framework-> ye batata hai ki kaunsi chiz kaise karni hai, flow batati hai. eg-express, angularj
* library-> gives us tools that u can use in any way. eg- react

# Setting up a basic Express application
- npm i express
- copy the boiler code
    const express = require('express')
    const app = express()

    app.get('/', function (req, res) { 
    res.send('Hello World')
    })

    app.listen(3000)

- npm i nodemon -g // install nodemon package globally so that server restarts when changes are made
- nodemon app.js  // to run the program
or if error aayo  vane
npx nodemon app.js
# Routing
//app.get("route",requestHandler)

# Middleware
- jab vi server req accept karta hai waha se route ke bich pahuchne tak agar aap us req ko bich mey rokte ho aur kuch perform karte ho, to ye element middleware kehlata hai.
- client req> middleware> routes> resp

# Request and response handling

# Error handling
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


## Form Handling
- npm i cookie-parser
hum log kuchh bhi data frontend par browser par rakh sakte hai and jab bhi aap kuchh bhi req backend par karoge wo frontend par saved data automatically backend apr chala jayega
