import React from 'react';
import Link from 'next/link';
import Container from '@layouts/Container';

export default function Navbar() {
  return (
    <nav className="fixed inset-0 bottom-auto z-50">
      <div className="h-16 bg-white shadow-sm">
        <Container className="h-full">
          <div className="grid h-full grid-cols-2 grid-rows-1">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <a className="text-2xl font-bold">
                  Next<span className="text-sky-500">Q</span>
                </a>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-end">
              <Link href="https://github.com/natainditama/nextjs-quickstart">
                <a className="rounded border border-sky-500 py-2 px-4 text-sky-500 shadow hover:bg-sky-500 hover:text-white">
                  <span className="h-full  w-full uppercase ">Source</span>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
