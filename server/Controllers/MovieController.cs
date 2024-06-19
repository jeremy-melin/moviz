using Microsoft.AspNetCore.Mvc;
using Moviz.Models;
using Moviz.Services;


[ApiController]
[Route("api/[controller]")]
public class MovieController : ControllerBase {
    private readonly MovieService _movieService;

    public MovieController(MovieService movieService) {
        _movieService = movieService;
    }

    [HttpGet]
    public async Task<List<Movie>> Get() => await _movieService.GetAsync();

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