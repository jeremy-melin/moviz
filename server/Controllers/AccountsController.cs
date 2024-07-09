using Microsoft.AspNetCore.Mvc;
using Moviz.Services;
using Moviz.Dto;


[ApiController]
[Route("api/[controller]")]
public class AccountsController : ControllerBase {

    private readonly AccountsService _accountsService;

    public AccountsController(AccountsService accountsService) {
        _accountsService = accountsService;
    }

    [HttpPost]
    public async Task<IActionResult> RegisterUser(UserForRegistrationDto user) {
        await _accountsService.CreateAsync(user);

        return Ok();
    }
}