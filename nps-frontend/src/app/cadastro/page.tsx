"use client";

import { useState } from "react";
import Tab from "@/components/tab";

export default function PaginaCadastro() {
  const [nome, setNome] = useState<string>("");
  const [avaliacao, setAvaliacao] = useState<string>("");
  const [observacao, setObservacao] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/Respostas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nome: nome,
        Avaliacao: avaliacao ? Number(avaliacao) : 1000,
        Comentario: observacao ?? "-",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMensagem("Resposta cadastrada com sucesso!");
      setNome("");
      setAvaliacao("");
      setObservacao("");
    } else {
      let mensagemErro = "Erro ao cadastrar resposta.";

      if (data.errors) {
        const erros = data.errors;
        const mensagensDetalhadas = Object.values(erros)
          .flat()
          .map((msg) => `\n• ${msg}`)
          .join("");
        mensagemErro += mensagensDetalhadas;
      }

      setMensagem(mensagemErro);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-transparent text-black px-8 pt-8 text-2xl font-bold">
        Projeto NPS
      </header>

      <section className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <Tab />

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Cadastro de resposta
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Avaliação (0–5)"
              type="number"
              min={0}
              max={5}
              value={avaliacao}
              onChange={(e) => setAvaliacao(e.target.value)}
            />
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Observação"
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
              type="submit"
            >
              Cadastrar
            </button>
            {mensagem && (
              <p className="mt-4 text-sm text-gray-700">{mensagem}</p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-transparent h-10" />
    </main>
  );
}
