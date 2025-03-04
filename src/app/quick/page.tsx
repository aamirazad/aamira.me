import { ArrowUpRight } from "lucide-react";
import { quick } from "../links";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Quick links
      </h1>
      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        {quick.map((link) => (
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
    </section>
  );
}
