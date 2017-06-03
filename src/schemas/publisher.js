import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from "graphql";

import Book from "./book";

const Publisher = new GraphQLObjectType({
	name: "Publisher",
	description: "An Publisher",
	fields() {
		return {
			id: {
				type: GraphQLInt,
				resolve(publisher) {
					return publisher.id;
				}
			},
			name: {
				type: GraphQLString,
				resolve(publisher) {
					return publisher.name;
				}
			},
			books: {
				type: new GraphQLList(Book),
				resolve(publisher) {
					return publisher.getBooks();
				}
			}
		};
	}
});

export default Publisher;
