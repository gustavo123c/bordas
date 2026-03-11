import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Exercícios</h1>
      <ul>
        <li><Link href="/pg210">Exercício da Pg. 210</Link></li>
        <li><Link href="/pg231">Exercício da Pg. 231</Link></li>
        <li><Link href="/pg246">Exercício da Pg. 246</Link></li>
        <li><Link href="/pg263">Exercício da Pg. 263</Link></li>
      </ul>
    </div>
  );
}