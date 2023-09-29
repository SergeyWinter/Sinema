const { error } = require('console');
const express = require('express');
const path = require('path');
const app=express();
const PORT = 3003;
app.listen(PORT, (error)=>{
    error? console.log(error):console.log(`Listining port ${PORT}`);
})