// Redireciona para /cadastro automaticamente
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/cadastro');
}