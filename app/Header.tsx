import Link from "next/link";
import React from "react";
function Header() {
  return (
    <header className="p-5 bg-indigo-500">
      <div className="space-x-4">
        <Link
          href="/"
          className="px-2 py-1 bg-indigo-300 text-white font-bold rounded-lg"
        >
          Home
        </Link>
        <Link
          href="/todos"
          className="px-2 py-1 bg-indigo-300 text-white font-bold rounded-lg"
        >
          Todos
        </Link>
        <Link
          href="/search"
          className="px-2 py-1 bg-indigo-300 text-white font-bold rounded-lg"
        >
          Search
        </Link>
      </div>
    </header>
  );
}

export default Header;
