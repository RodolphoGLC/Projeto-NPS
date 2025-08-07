using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NpsApi.Migrations
{
    /// <inheritdoc />
    public partial class DockerTeste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NomeProduto",
                table: "Respostas",
                newName: "Nome");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Respostas",
                newName: "NomeProduto");
        }
    }
}
