import Link from 'next/link';

export function BreadcrumbNav({ title }: { title: string }) {
  return (
    <nav className="text-sm mb-6 text-gray-400">
      <ol className="list-none p-0 inline-flex items-center space-x-2">
        <li className="flex items-center">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          <span className="mx-2 text-gray-600">/</span>
        </li>
        <li className="flex items-center text-gray-300" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
