import { ArrowUpRight } from "lucide-react";
import { useful, projects, homelab } from "./links";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Aamir Azad
      </h1>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Useful Links
      </h2>
      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        {useful.map((link) => (
          <li key={link.href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
            >
              <ArrowUpRight />
              <p className="ml-2 h-7">{link.text}</p>
            </a>
          </li>
        ))}
      </ul>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Projects
      </h2>
      <div className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        {projects.map((item) => (
          <div key={item.href} className="border-l border-slate-600 pl-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <a
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 ml-2 h-7"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.href}
                >
                  {item.text}
                </a>
                {item.wip ? (
                  <Badge variant="outline">Work in progress</Badge>
                ) : null}
              </div>

              <p className="ml-2 text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Homelab
      </h2>
      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        {homelab.map((link) => (
          <li key={link.href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
            >
              {link.icon ? link.icon() : <ArrowUpRight />}
              <p className="ml-2 h-7">{link.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
