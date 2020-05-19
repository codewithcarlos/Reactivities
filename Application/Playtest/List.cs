using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MtgApiManager.Lib.Service;
using Persistence;

namespace Application.Playtest
{
  public class List
  {
    public class Query : IRequest<List<Card>> { }

    public class Handler : IRequestHandler<Query, List<Card>>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<List<Card>> Handle(Query request, CancellationToken cancellationToken)
      {
        var cards = await _context.Cards.ToListAsync();
        // CardService service = new CardService();
        // var result = await service.Where(x => x.Name, "Baneslayer Angel").AllAsync();
        // Trace.WriteLine(result);
        return cards;
      }
    }
  }
}