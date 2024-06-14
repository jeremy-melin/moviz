using MongoDB.Driver;
using Moviz.Models;
using Microsoft.Extensions.Options;

namespace Moviz.Services;

public class MovieService {
    private readonly IMongoCollection<Movie> _moviesCollection;

    public MovieService(
        IOptions<MovieDatabaseSettings> movieDatabaseSettings)
    {

        var mongoClient = new MongoClient(
            movieDatabaseSettings.Value.ConnectionURI);

        var mongoDatabase = mongoClient.GetDatabase(
            movieDatabaseSettings.Value.DatabaseName);

        _moviesCollection = mongoDatabase.GetCollection<Movie>(
            movieDatabaseSettings.Value.CollectionName);
    }

    public async Task<List<Movie>> GetAsync() =>
        await _moviesCollection.Find(_ => true).ToListAsync();

    public async Task<Movie?> GetAsync(string id) =>
        await _moviesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Movie newMovie) =>
        await _moviesCollection.InsertOneAsync(newMovie);

    public async Task UpdateAsync(string id, Movie updatedMovie) =>
        await _moviesCollection.ReplaceOneAsync(x => x.Id == id, updatedMovie);

    public async Task RemoveAsync(string id) =>
        await _moviesCollection.DeleteOneAsync(x => x.Id == id);
}