'use client';

import { useState } from 'react';
import Link from 'next/link';
import Tab from '@/components/tab';

export default function CadastroPage() {
  const [nome, setNome] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [observacao, setObservacao] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch('http://localhost:5118/Respostas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ NomeProduto: nome, Avaliacao: Number(avaliacao), Comentario: observacao }),
    });

    if (response.ok) {
      setMensagem('Resposta cadastrada com sucesso!');
      setNome('');
      setAvaliacao('');
      setObservacao('');
    } else {
      setMensagem('Erro ao cadastrar resposta.');
    }
  }

  return (
    <main className="min-h-screen bg-gray-200 flex flex-col">
      <header className="bg-gray-700 text-white px-4 py-2">
        <h1>Projeto NPS</h1>
      </header>

      {/* Componente de tab */}
      <Tab children />

      <section className="flex-1 p-8">
        <h2 className="text-lg mb-4">Cadastro de resposta</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 max-w-3xl shadow-sm border"
        >
          <input
            className="w-full border mb-3 p-2"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="w-full border mb-3 p-2"
            placeholder="Avaliação (0–5)"
            type="number"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
          />
          <input
            className="w-full border mb-3 p-2"
            placeholder="Observação"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
          <button
            className="bg-gray-400 px-4 py-2 text-white"
            type="submit"
          >
            Cadastrar
          </button>
          {mensagem && <p className="mt-4">{mensagem}</p>}
        </form>
      </section>

      <footer className="bg-gray-700 h-10" />
    </main>
  );
}
