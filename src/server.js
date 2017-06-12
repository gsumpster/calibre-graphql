var express = require("express");
var cors = require("cors");
import graphql from "./index";
var app = express();


app.use(cors());
graphql(app, { prefix: "/calibre", filePath: "calibre"});

app.listen(3000);
