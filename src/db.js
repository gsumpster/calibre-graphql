import Sequelize from "Sequelize";

const db = new Sequelize("","","", {
	dialect: "sqlite",
	storage: "src/calibre/metadata.db", // temporary
});

// init sql_models

export const Author = require("./sql_models/authors")(db, Sequelize);
export const Book = require("./sql_models/books")(db, Sequelize);
export const Comment = require("./sql_models/comments")(db, Sequelize);
export const Data = require("./sql_models/data")(db, Sequelize);
export const Language = require("./sql_models/languages")(db, Sequelize);
export const Publisher = require("./sql_models/publishers")(db, Sequelize);
export const Rating = require("./sql_models/ratings")(db, Sequelize);
export const Series = require("./sql_models/series")(db, Sequelize);
export const Tag = require("./sql_models/tags")(db, Sequelize);
export const Identifier = require("./sql_models/identifiers")(db, Sequelize);

const BookAuthor = require("./sql_models/books_authors_link")(db, Sequelize);
const BookLanguage = require("./sql_models/books_languages_link")(db, Sequelize);
const BookPublisher = require("./sql_models/books_publishers_link")(db, Sequelize);
const BookRating = require("./sql_models/books_ratings_link")(db, Sequelize);
const BookSeries = require("./sql_models/books_series_link")(db, Sequelize);
const BookTag = require("./sql_models/books_tags_link")(db, Sequelize);

// associations

Author.belongsToMany(Book, { through: BookAuthor, foreignKey: "author"});
Book.belongsToMany(Author, { through: BookAuthor, foreignKey: "book"});
Book.hasOne(Rating, { through: BookRating, foreignKey: "book"});
Book.belongsToMany(Language, { through: BookLanguage, foreignKey: "book"});
Book.belongsToMany(Series, { through: BookSeries, foreignKey: "book"});
Book.belongsToMany(Tag, { through: BookTag, foreignKey: "book"});
Book.hasOne(Comment, {foreignKey: "book"});
Book.hasMany(Data, {foreignKey: "book"});
Book.belongsToMany(Publisher, { through: BookPublisher, foreignKey: "book"});
Tag.belongsToMany(Book, { through: BookTag, foreignKey: "tag"});
Publisher.belongsToMany(Book, { through: BookPublisher, foreignKey: "publisher"});
Series.belongsToMany(Book, { through: BookSeries, foreignKey: "series"});

export default db;
