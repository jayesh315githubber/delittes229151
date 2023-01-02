const { response } = require('express')
var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(require,response)=>{
    response.send(path.join(__dirname,'/index.html'))
})

app.listen(8081,'0.0.0.0',()=>{
    console.log('sever started on port no 8081');
})