{
"translatorID":"A62C2-E8B8-11E3-8533-A664DDBCE621",
"translatorType":2,
"label":"Redirected ZotSelect Link",
"creator": "Hansae Ju",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated": "2022-09-20 13:16:00"
}

function doExport() {
  var item;
  while(item = Zotero.nextItem()) {
    Zotero.write(`<IP>:<PORT>/${item.collections[0]}/${item.key}\n\n`);
    }
}
