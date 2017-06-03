import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} from "graphql";

const File = new GraphQLObjectType({
	name: "File",
	description: "A File",
	fields() {
		return {
			id: {
				type: GraphQLInt,
				resolve(file) {
					return file.id;
				}
			},
			format: {
				type: GraphQLString,
				resolve(file) {
					return file.format;
				}
			},
			size: {
				type: GraphQLInt,
				resolve(file) {
					return file.uncompressed_size;
				}
			}
		};
	}
});

export default File;
