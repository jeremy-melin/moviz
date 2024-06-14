namespace Moviz.Models;

public class MovieDatabaseSettings
{
    public string ConnectionURI { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string CollectionName { get; set; } = null!;
}