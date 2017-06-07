var express = require("express");
var graphqlHTTP = require("express-graphql");
var cors = require("cors");
var path = require("path");

import schema from "./schema";

var app = express();
app.use(cors());
app.use("/img", express.static(path.join(__dirname, 'calibre')));
app.use("/graphql", graphqlHTTP({
	schema: schema,
	pretty: true,
	graphiql: true,
}));

app.listen(3000);
