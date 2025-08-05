'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Resposta } from '@/lib/api';
import Tab from '@/components/tab';

export default function RelatorioPage() {
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [nps, setNps] = useState({ total: 0, promotores: 0, detratores: 0, nps: 0 });

  useEffect(() => {
    async function fetchDados() {
      const [respRespostas, respNps] = await Promise.all([
        fetch('http://localhost:5118/Respostas'),
        fetch('http://localhost:5118/Respostas/relatorio'),
      ]);

      const dadosRespostas = await respRespostas.json();
      const dadosNps = await respNps.json();

      console.log('Respostas:', dadosRespostas);
      console.log('NPS:', dadosNps);

      setRespostas(dadosRespostas);
      setNps(dadosNps);
    }

    fetchDados();
  }, []);

  return (
    <main className="min-h-screen bg-gray-200 flex flex-col">
      <header className="bg-gray-700 text-white px-4 py-2">
        <h1>Relatório de Avaliações</h1>
      </header>

      {/* Componente de tab */}
      <Tab children />

      <section className="flex-1 p-8">
        <h2 className="text-lg mb-4">Relatório de avaliações</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 text-center border">
            <p>Total:</p>
            <strong className="text-2xl">{nps.total}</strong>
          </div>
          <div className="bg-white p-4 text-center border">
            <p>Promotores:</p>
            <strong className="text-2xl">{nps.promotores}</strong>
          </div>
          <div className="bg-white p-4 text-center border">
            <p>Detratores:</p>
            <strong className="text-2xl">{nps.detratores}</strong>
          </div>
          <div className="bg-white p-4 text-center border">
            <p>NPS:</p>
            <strong className="text-2xl">{nps.nps}%</strong>
          </div>
        </div>

        <div className="bg-white p-4 border">
          <h3 className="text-md mb-2 font-semibold">Respostas</h3>
          <table className="w-full table-auto border">
            <thead>
              <tr>
                <th className="border p-2">Nome</th>
                <th className="border p-2">Nota</th>
                <th className="border p-2">Comentário</th>
              </tr>
            </thead>
            <tbody>
              {respostas.map((r, index) => (
                <tr key={index}>
                  <td className="border p-2">{r.nomeProduto}</td>
                  <td className="border p-2 text-center">{r.avaliacao}</td>
                  <td className="border p-2">{r.comentario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="bg-gray-700 h-10" />
    </main>
  );
}
