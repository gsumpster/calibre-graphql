import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";

export default (app, options) => {
	if (options.noCovers) {
		app.use(`${options.prefix}/image`, express.static(options.filePath));
	}
	app.use(`${options.prefix}/graphql`, graphqlHTTP({
		schema: schema,
		graphiql: options.graphiql,
	}));
};
