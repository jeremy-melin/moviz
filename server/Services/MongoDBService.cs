using MongoDB.Driver;
using Moviz.Models;
using Microsoft.Extensions.Options;

namespace Moviz.Services;

public class MongoDBService {
    public IMongoClient mongoClient;
    public IMongoDatabase mongoDatabase;

    public MongoDBService (
        IOptions<MovieDatabaseSettings> movieDatabaseSettings)
    {
        mongoClient = new MongoClient(
            movieDatabaseSettings.Value.ConnectionURI);

        mongoDatabase = mongoClient.GetDatabase(
            movieDatabaseSettings.Value.DatabaseName);
    }
}