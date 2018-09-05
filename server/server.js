const express = require('express');
const path = require('path');

let app = express();

//  rendering this whole folder
let publicPath = path.join(__dirname, '..', public);

app.use(express.static(publicPath));

let port = process.env.PROCESS || 3000; 

//  for any page that is not present in "public" folder rendering index.html
app.get('*', (req, res) => {
    res.sendFile(publicPath, 'index.html', (err) => {
        if(!err){
            console.log('index.html renderd successfully')
        }else{
            console.log('error in rendering index.html');
            console.log(err);
        }
    })
});

app.listen(port, () => {
    console.log('app is up on porrt 3000');
});
