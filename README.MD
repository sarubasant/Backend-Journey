# EXPRESS.js Framework

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

    app.get('/', function (req, res) { //app.get("route",requestHandler)
    res.send('Hello World')
    })

    app.listen(3000)
# Routing
# Middleware
# Request and response handling
# Error handling

