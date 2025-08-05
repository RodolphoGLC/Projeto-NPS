// Consumir a API

const BASE_URL = "http://localhost:5118"

// Interfaces dos modelos 

export interface Resposta {
    id: number;
    nomeProduto: string;
    avaliacao: number;
    comentario: string;
}

export interface Relatorio {
    total: number;
    promotores: number;
    detratores: number;
    nps: number;
    respostas: Resposta[];
}

// Metodos

export async function cadastrarResposta(resposta: Resposta) {
  const res = await fetch(`${BASE_URL}/respostas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resposta),
  });

  if (!res.ok) throw new Error("Erro ao cadastrar resposta");

  return res.json();
}

export async function obterRelatório() {
    const res = await fetch(`${BASE_URL}/respostas/relatorio`)

    if (!res.ok) throw new Error("Erro ao obter relatório");

    return res.json() as Promise<Relatorio>;

}
