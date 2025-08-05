import Link from "next/link";

export default function Tab({ children }: { children: React.ReactNode }) {
  return (
    <nav className="flex gap-2 bg-gray-200 px-4 py-2">
        <Link href="/cadastro">
          <button className="bg-rose-300 px-4 py-2">Cadastro de resposta</button>
        </Link>
        <Link href="/relatorio">
          <button className="bg-rose-300 px-4 py-2">Relatório</button>
        </Link>
      </nav>
  );
}
