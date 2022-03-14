import React from "react";
import Link from "next/link";
import Container from "@components/layouts/Container";

export default function Navbar() {
  return (
    <nav className="fixed inset-0 bottom-auto z-50">
      <div className="h-16 shadow-sm bg-white">
        <Container className="h-full">
          <div className="grid grid-cols-2 grid-rows-1 h-full">
            <div className="flex flex-row items-center justify-start">
              <Link href="/">
                <a className="font-bold text-2xl">
                  Next<span className="text-sky-500">Q</span>
                </a>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-end">
              <Link href="https://github.com/natainditama/nextjs-quickstart">
                <a className="border border-sky-500 py-2 px-4 rounded hover:bg-sky-500 shadow text-sky-500 hover:text-white">
                  <span className="uppercase  h-full w-full ">Source</span>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
