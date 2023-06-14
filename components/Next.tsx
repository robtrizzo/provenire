import Link from 'next/link';

export default function Next({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="no-underline ml-auto py-4 px-8 border-2 border-black rounded-md bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 text-white"
    >
      <h6>Next: {text}</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
