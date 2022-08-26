import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2022{" "}
          <Link href="/">
            <a className="hover:underline">Gremio - Guimarães Rosa</a>
          </Link>
          . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6">
                Politica de Privacidade
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:underline">Contato</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
