var express = require("express");
var graphqlHTTP = require("express-graphql");

import schema from "./schema";

var app = express();
app.use("/graphql", graphqlHTTP({
	schema: schema,
	pretty: true,
	graphiql: true,
}));

app.listen(4000);
