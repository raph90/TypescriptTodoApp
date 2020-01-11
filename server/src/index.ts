import express from "express";
import path from "path";
const app = express();
const port = 8080 || process.env.PORT;

const DIST_DIR = path.join(__dirname, "../../client/dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));

app.get( "/", (req, res) => {
    res.sendFile(HTML_FILE);
} );

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
