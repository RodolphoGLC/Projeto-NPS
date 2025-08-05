using Microsoft.EntityFrameworkCore;
using NpsApi.Models;

namespace NpsApi.Data;

public class NpsDbContext : DbContext
{
    public NpsDbContext(DbContextOptions<NpsDbContext> options) : base(options)
    {
    }

    public DbSet<Resposta> Respostas { get; set; }
}
