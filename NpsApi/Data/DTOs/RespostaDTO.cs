using System.ComponentModel.DataAnnotations;

namespace NpsApi.Data.DTOs;

public class RespostaDTO
{
    [Required(ErrorMessage = "O campo de nome é obrigatório")]
    public string Nome { get; set; }

    [Required(ErrorMessage = "O campo de avaliação é obrigatório")]
    [Range(0, 5, ErrorMessage = "A avaliação deve estar entre 0 e 5")]
    public int Avaliacao { get; set; }

    public string? Comentario { get; set; }
}
