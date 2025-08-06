import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab() {
  const pathname = usePathname();

  const tabButton = (href: string, label: string) => {
    return (
      <Link href={href}>
        <button
          className={`cursor-pointer px-4 py-2 rounded-t-xl font-semibold transition duration-200 ${
            pathname === href
              ? "bg-blue-500 text-white border border-blue-300"
              : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-50"
          }`}
        >
          {label}
        </button>
      </Link>
    )
  }

  return (
    <nav className="flex gap-2 bpy-4 mb-8 border-b border-blue-300">
      {tabButton("/cadastro", "Cadastro de resposta")}
      {tabButton("/relatorio", "Relatório")}
    </nav>
  );
}
