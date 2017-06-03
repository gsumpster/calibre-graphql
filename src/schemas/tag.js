import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from "graphql";

import Book from "./book";

const Tag = new GraphQLObjectType({
	name: "Tag",
	description: "A Tag",
	fields() {
		return {
			id: {
				type: GraphQLInt,
				resolve(tag) {
					return tag.id;
				}
			},
			name: {
				type: GraphQLString,
				resolve(tag) {
					return tag.name;
				}
			},
			books: {
				type: new GraphQLList(Book),
				resolve(tag) {
					return tag.getBooks();
				}
			}
		};
	}
});

export default Tag;
