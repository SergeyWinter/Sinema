const { error } = require('console');
const express = require('express');
const path = require('path');
const app=express();
const PORT = 3003;
app.listen(PORT, (error)=>{
    error? console.log(error):console.log(`Listining port ${PORT}`);
});
app.get('/', (req,res)=>{
    res.send('<h1>Server worked');
})
