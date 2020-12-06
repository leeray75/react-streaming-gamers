const express = require('express')
const app = express()
const port = 3100;
const package = require('../../package.json');
const path = require('path');
const proxy = require('express-http-proxy');
const requestProxy = require('express-request-proxy');
const { sep } = path;
let version = package.version;
let versions = version.split(".");
let majorVersion = versions[0];
let minorVersion = versions[1];
let patchVersion = (versions[2].split("-"))[0];
let folderVersion = `${majorVersion}.${minorVersion}.${patchVersion}`;
const replacePath = ['src', 'server'].join(sep);
const dirname = __dirname.replace(`${sep}${replacePath}`, "");
const bundlePath = path.resolve(dirname, 'dist', majorVersion, folderVersion, "js")


app.use("/scripts", express.static(bundlePath));

app.get('/*', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>

</head>
<body>
<div id="app">
</div>
    
  <script src="/scripts/react-streaming-gamers.bundle.js"></script>
</body>
</html>

    `)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})