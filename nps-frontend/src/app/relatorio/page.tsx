"use client";

import { useEffect, useState } from "react";
import { Resposta } from "@/lib/api";
import Tab from "@/components/tab";

export default function PaginaRelatorio() {
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [nps, setNps] = useState({
    total: 0,
    promotores: 0,
    detratores: 0,
    nps: 0,
  });

  useEffect(() => {
    async function fetchDados() {
      const [respRespostas, respNps] = await Promise.all([
        fetch("http://localhost:5118/Respostas"),
        fetch("http://localhost:5118/Respostas/relatorio"),
      ]);

      const dadosRespostas = await respRespostas.json();
      const dadosNps = await respNps.json();

      setRespostas(dadosRespostas);
      setNps(dadosNps);
    }

    fetchDados();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-transparent text-black px-8 pt-8 text-2xl font-bold">
        Projeto NPS
      </header>

      <section className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <Tab />

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Relatório de avaliações
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl shadow p-4 text-center border border-blue-100">
              <p className="text-gray-600">Total:</p>
              <strong className="text-2xl text-gray-800">{nps.total}</strong>
            </div>
            <div className="bg-green-50 rounded-xl shadow p-4 text-center border border-green-100">
              <p className="text-gray-600">Promotores:</p>
              <strong className="text-2xl text-green-600">
                {nps.promotores}
              </strong>
            </div>
            <div className="bg-red-50 rounded-xl shadow p-4 text-center border border-red-100">
              <p className="text-gray-600">Detratores:</p>
              <strong className="text-2xl text-red-500">
                {nps.detratores}
              </strong>
            </div>
            <div className="bg-indigo-50 rounded-xl shadow p-4 text-center border border-indigo-100">
              <p className="text-gray-600">NPS:</p>
              <strong className="text-2xl text-indigo-500">{nps.nps}%</strong>
            </div>
          </div>

          {/* <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Respostas Cadastradas</h3>
            <table className="w-full table-auto border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Nome</th>
                  <th className="border p-3 text-center">Nota</th>
                  <th className="border p-3 text-left">Comentário</th>
                </tr>
              </thead>
              <tbody>
                {respostas.map((r, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-3">{r.nomeProduto}</td>
                    <td className="border p-3 text-center">{r.avaliacao}</td>
                    <td className="border p-3">{r.comentario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Respostas Cadastradas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {respostas.map((r, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Produto
                  </p>
                  <p className="text-base text-gray-800 font-semibold mb-2 line-clamp-3">
                    {r.nomeProduto}
                  </p>

                  <p className="text-sm text-gray-500 mb-1 font-medium">Nota</p>
                  <p className="text-base text-blue-600 font-bold mb-2">
                    {r.avaliacao}
                  </p>

                  
                      <p className="text-sm text-gray-500 mb-1 font-medium">
                        Comentário
                      </p>
                      <p className="text-base text-gray-700 line-clamp-3">{r.comentario}</p>
                    
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-transparent h-10" />
    </main>
  );
}
