# Zotero Redirect Server
This server converts Zotero links into web links and redirects them to be recognized as links in Notion.

## Usage with Notero
1. Set up [Notero](https://github.com/dvanoni/notero).
2. Paste `redirected-zotselect-link.js` into `<Zotero Data Directory>/translators` (You should configure `<IP>/<PORT>`).
3. The output is `Full Citation` property of synced notion db.

## Install
The default port is 3000. 

Use `.env` to configuration.

```bash
npm i
node main.js #run
```

## Run in background

```bash
npm i -g forever
forerver start main.js
forever list
forerver stop <number>
```

