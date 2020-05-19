using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Playtest;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PlaytestController : BaseController
  {
    [HttpGet]
    public async Task<ActionResult<List<Card>>> Deck()
    {
      return await Mediator.Send(new List.Query());
    }
  }
}