var express = require('express')
var open = require('open')

var app = express();

app.get('/:collection/:item', function (req, res) {
  res.send('<script>window.close();</script>');
  open(`zotero://select/library/collections/${req.params.collection}/items/${req.params.item}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

