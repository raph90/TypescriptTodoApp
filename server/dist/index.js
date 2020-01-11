"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.set("port", process.env.PORT || 8081);
const DIST_DIR = path_1.default.join(__dirname, "../../client/dist"); // NEW
const HTML_FILE = path_1.default.join(DIST_DIR, "index.html");
app.use(express_1.default.static(DIST_DIR));
app.get("/", (req, res) => {
    res.sendFile(HTML_FILE);
});
app.get("/api/hello", (req, res) => {
    res.json({ message: "hello there" });
});
// start the Express server
app.listen(app.get("port"), () => {
    console.log("listening on port" + app.get("port"));
});
//# sourceMappingURL=index.js.map