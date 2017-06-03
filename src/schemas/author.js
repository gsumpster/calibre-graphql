import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from "graphql";

import Book from "./book";

const Author = new GraphQLObjectType({
	name: "Author",
	description: "An Author",
	fields() {
		return {
			id: {
				type: GraphQLInt,
				resolve(author) {
					return author.id;
				}
			},
			name: {
				type: GraphQLString,
				resolve(author) {
					return author.name;
				}
			},
			books: {
				type: new GraphQLList(Book),
				resolve(author) {
					return author.getBooks();
				}
			}
		};
	}
});

export default Author;
