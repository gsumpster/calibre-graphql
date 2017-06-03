import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
} from "graphql";

import Author from "./schemas/author";
import Publisher from "./schemas/publisher";
import Book from "./schemas/book";
import Tag from "./schemas/tag";
import {
	Author as AuthorModel,
	Publisher as PublisherModel,
	Book as BookModel,
	Tag as TagModel
} from "./db";

const Query = new GraphQLObjectType({
	name: "Query",
	description: "Root Query Object",
	fields: () => {
		return {
			authors: {
				type: new GraphQLList(Author),
				args: {
					id: {
						type: GraphQLInt
					},
					name: {
						type: GraphQLString
					}
				},
				resolve (root, args) {
					return AuthorModel.findAll({ where: args });
				}
			},
			books: {
				type: new GraphQLList(Book),
				args: {
					id: {
						type: GraphQLInt
					},
					name: {
						type: GraphQLString
					},
					author: {
						type: GraphQLString,
					}
				},
				resolve (root, args) {
					const sqlArg = { where: args };
					if(args.author) {
						sqlArg.include = [{model: AuthorModel, where: {name: args.author} }];
						delete sqlArg.where.author;
					}
					return BookModel.findAll(sqlArg);
				}
			},
			tags: {
				type: new GraphQLList(Tag),
				args: {
					name: {
						type: GraphQLString,
					}
				},
				resolve(root, args) {
					return TagModel.findAll({ where: args});
				}
			}
		};
	}
});


const Schema = new GraphQLSchema({
	query: Query,
});

export default Schema;
