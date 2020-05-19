using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
  public class Card
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int Id { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public int Multiverseid { get; set; }
  }
}