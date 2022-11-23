const Movie = require('./movies')
const Review = require('./reviews')

Movie.hasMany(Review, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
})

Review.belongsTo(Movie, {
  foreignKey: 'movie_id',
})

module.exports = {
  Movie,
  Review,
}