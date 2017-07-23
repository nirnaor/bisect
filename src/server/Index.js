const express = require('express')
const app = express()
const git = require('./Git')
app.use(express.static('src/server/dist'));


app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
});

app.put('/clone', (req, res)=> {
	const url = req.query.url
    git.clone(url)
	res.json({url: url})
});
