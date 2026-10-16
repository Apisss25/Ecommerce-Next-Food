"use client";

import { columns } from "../../../Data";
import { legalLinks } from "../../../Data";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-emerald-500 bg-[#1c1c1c] text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold text-white">VENTO BOX</p>
                <p className="text-[11px] text-neutral-400">
                  Healthy Delivered Daily
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-neutral-400">
              Fresh, nutritious meals delivered to your door every day. Making
              healthy eating simple and delicious.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 mt-1 text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm leading-5 text-neutral-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-400">
            © 2026 VENTO BOX. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-neutral-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
