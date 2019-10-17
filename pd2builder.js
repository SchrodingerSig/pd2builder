const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const tools = express();

tools.use(helmet());
tools.set("trust proxy", 1);

tools.use(bodyParser.urlencoded({ extended: true }));
tools.use(bodyParser.json());

tools.use("/a/", express.static("./public"));
tools.get("/a/", (req, res) => res.sendFile("index.html", { root: "./pages/"}));
tools.get("/a/test.html",  (req, res) => res.sendFile("test.html", { root: "./pages/"}));
tools.get("/a/bigoil.html",  (req, res) => res.sendFile("bigoil.html", { root: "./pages/"}));

tools.listen(9999, () => console.log("pd2tools started on port 9999")); // eslint-disable-line no-console
