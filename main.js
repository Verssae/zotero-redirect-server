var express = require('express')
var open = require('open')

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.get('/:collection/:item', function (req, res) {
  res.redirect(`zotero://select/library/collections/${req.params.collection}/items/${req.params.item}`);
  console.log('Zotero item opened');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

