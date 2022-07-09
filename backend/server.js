const express = require('express');

const App = express();
const Port = 4000;

App.get('',(req,res) => {
    res.send('hello');
})

App.listen(Port,console.log(`Server is running on http://localhost:${Port}`));