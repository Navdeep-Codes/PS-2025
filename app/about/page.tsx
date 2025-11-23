// @ts-nocheck
import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import { allPages } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={`mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-center ${className || ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0 text-center ${className || ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center ${className || ""}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-center ${className || ""}`}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-center ${className || ""}`}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={`mt-8 scroll-m-20 text-base font-semibold tracking-tight text-center ${className || ""}`}
      {...props}
    />
  ),
};

const navigation = [
  { name: "Projects", href: "https://github.com/Navdeep-Codes" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function About() {
  const page = allPages.find((p) => p.slug === "about");

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="max-w-3xl mx-auto ">
        <article className="prose prose-zinc prose-invert prose-quoteless">
        {page && <Mdx code={page.body.code} components={components} />}
        </article>
      </div>
    </div>
  );
}
