var express = require('express')
var dotenv = require('dotenv')

var app = express();
dotenv.config();

app.get('/:collection/:item', function (req, res) {
  res.redirect(`zotero://select/library/collections/${req.params.collection}/items/${req.params.item}`);
  console.log('Zotero item opened');
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Redirect app listening on port ${port}!`);
});

