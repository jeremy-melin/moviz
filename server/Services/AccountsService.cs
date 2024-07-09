using MongoDB.Driver;
using Moviz.Models;
using Moviz.Dto;
using Microsoft.Extensions.Options;

namespace Moviz.Services;

public class AccountsService : MongoDBService {

    private readonly IMongoCollection<UserForRegistrationDto> _userCollection;

    public AccountsService(
        IOptions<MovieDatabaseSettings> movieDatabaseSettings, MongoDBService mongoDBService) : base(movieDatabaseSettings)
    {
        _userCollection = mongoDBService.mongoDatabase.GetCollection<UserForRegistrationDto>(
            movieDatabaseSettings.Value.UserCollectionName);
    }

    public async Task CreateAsync(UserForRegistrationDto newUser) =>
        await _userCollection.InsertOneAsync(newUser);
}