import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList
} from "graphql";

import Author from "./author";
import Publisher from "./publisher";
import Tag from "./tag";
import File from "./file";

const Book = new GraphQLObjectType({
	name: "Book",
	description: "A book",
	fields() {
		return {
			id: {
				type: GraphQLInt,
				resolve(book) {
					return book.id;
				}
			},
			title: {
				type: GraphQLString,
				resolve(book) {
					return book.title;
				}
			},
			description: {
				type: GraphQLString,
				resolve(book) {
					return book.getComment().then((book) => {
						if(book)
							return book.get("text");
						return "";
					});
				}
			},
			author: {
				type: new GraphQLList(Author),
				resolve(book) {
					return book.getAuthors();
				}
			},
			publisher: {
				type: Publisher,
				resolve(book) {
					return book.getPublishers().then(publishers => publishers[0]);
				}
			},
			tags: {
				type: new GraphQLList(Tag),
				resolve(book) {
					return book.getTags();
				}
			},
			files: {
				type: new GraphQLList(File),
				resolve(book) {
					return book.getData();
				}
			},
			cover: {
				type: GraphQLString,
				resolve(book) {
					return `/${book.path}/cover.jpg`;
				}
			},
			publishedData: {
				type: GraphQLString,
				resolve(book) {
					return book.pubdate;
				}
			}
		};
	}
});

export default Book;
