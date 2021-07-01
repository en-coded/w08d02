const express = require('express');
const app = express();

const nameList = ['Amit', 'Sumit']

app.get('/:name', (req, res) => {
  res.send('Wow! Hello there, ' + res.send(nameList[req.params.name]))
})



// Tell the app to listen on port 3000
// for HTTP requests from client
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
