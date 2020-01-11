import express from "express";
import path from "path";
const app = express();
app.set('port', process.env.PORT || 8080)

const DIST_DIR = path.join(__dirname, "../../client/dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));

app.get( "/", (req, res) => {
    res.sendFile(HTML_FILE);
} );

// start the Express server
app.listen(app.get('port'));

