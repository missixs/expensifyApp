const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port =  process.env.PORT || 3000 ;  //heroku provides this env variable 

app.use(express.static(publicPath));

//only send index.html regardless of what user requested 
app.get('*', (requstObj, responsObj)=>{
    responsObj.sendFile(path.join(publicPath, 'index.html'));
});

//while using heroku static port is not applicable
//app.listen(3000,  ()=>{
app.listen(port,  ()=>{
  
        console.log('Server is up');
});