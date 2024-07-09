using Microsoft.AspNetCore.Mvc;
using Moviz.Models;
using Moviz.Services;
using Microsoft.Extensions.Options;


[ApiController]
[Route("api/[controller]")]
public class MovieController : ControllerBase {
    private readonly MovieService _movieService;

    public MovieController(IOptions<MovieDatabaseSettings> movieDatabaseSettings, MongoDBService mongoDBService) {
        _movieService = new MovieService(movieDatabaseSettings, mongoDBService);
    }

    [HttpGet]
    public async Task<List<Movie>> Get() => await _movieService.GetAsync();

    [HttpGet("{title}")]
    public async Task<IActionResult> Get(string title)
    {
        var movie = await _movieService.GetAsync(title);
        if (movie == null) {
            return NotFound();
        }

        return Ok(movie);
    }

    [HttpPost]
    public async Task<IActionResult> Post(Movie newMovie)
    {
        await _movieService.CreateAsync(newMovie);

        return CreatedAtAction(nameof(Get), new { id = newMovie.Id }, newMovie);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        await _movieService.RemoveAsync(id);

        return Ok();
    }
 
 }