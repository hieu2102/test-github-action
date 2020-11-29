const express = require('express'),
	app = express();


app.listen(80);


app.get('/', (req,res)=>{
	res.status(200).send('hello world');
})
