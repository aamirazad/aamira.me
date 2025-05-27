import { ArrowUpRight } from "lucide-react";
import { useful, projects, homelab } from "./links";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <section>
      <div className="flex items-center space-x-4 h-36">
        <Avatar className="size-[64]">
          <AvatarImage
            src="https://files.aamira.me/inbox/7846690e25ca5ecdb6bd3d1ca9b7c800.webp"
            alt="Profile Picture"
          />
          <AvatarFallback>
            <div className="mx-[64]">AA</div>
          </AvatarFallback>
        </Avatar>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Aamir Azad
        </h1>
      </div>

      <h2 className=" scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
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
      <Link
        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        href="/quick"
      >
        More
      </Link>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Projects
      </h2>
      <p className="my-6 text-slate-400">
        Instead of wasting time on social media, I devote almost all of my free
        time to learning and building with what I have learned. I have built
        many projects, each more ambitious than the last in order to continue to
        push myself and prepare myself for the future.
      </p>
      <div className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300">
        {projects.map((item) => (
          <div key={item.href} className="border-l border-slate-600 pl-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
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
                {item.badge && (
                  <Badge variant={"outline"} className="bg-orange-900">
                    {item.badge}
                  </Badge>
                )}
                {item.github && (
                  <a
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 ml-2 h-7"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.github}
                  >
                    <SiGithub width={20} />
                  </a>
                )}
              </div>

              <p className="ml-2 text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Homelab
      </h2>
      <p className="my-6 text-slate-400">
        With the purpose of teaching myself networking as well as creating
        services I use every day, I have built a homelab setup. Run on a network
        of computers from an old machine I bought on ebay to a raspberry pi, my
        infustructure hosts thousands of gigabytes of data and many intesive
        services with
        <a
          className="underline transition-all hover:text-neutral-800 dark:hover:text-neutral-100 ml-1 h-7"
          href="https://status.aamira.me/"
          rel="noopener noreferrer"
          target="_blank"
        >
          relatively high uptime
        </a>
        . With zero open ports, I have built a secure and reliable system to
        support me and my family.
      </p>
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
