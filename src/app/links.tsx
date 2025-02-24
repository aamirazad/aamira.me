import {
  Bookmark,
  Camera,
  Code,
  File,
  ListCheck,
  NotebookText,
  Video,
} from "lucide-react";

export const useful = [
  {
    href: "/github",
    text: "github",
  },
  {
    href: "/resume",
    text: "resume",
  },
  {
    href: "/pgp",
    text: "pgp",
  },
  {
    href: "mailto:aamirmazad@gmail.com",
    text: "email",
  },
  {
    href: "/signal",
    text: "signal",
  },
  {
    href: "https://bsky.app/profile/aamira.me",
    text: "bluesky",
  },
  {
    href: "https://mastodon.social/@aamira",
    text: "mastodon",
  },
];

export const projects = [
  {
    href: "https://github.com/aamirazad/dotsy",
    text: "Dotsy",
    description:
      "A qt python desktop app which syncs and restores linux config files",
    wip: true,
  },
  {
    href: "https://jobs.aamira.me/",
    text: "Job Journey",
    description:
      "A example full stck nextjs app so students can easily search job postings and employers can easily submit them with secure authentication and ease of use",
    wip: true,
  },
  {
    href: "https://homelab-connector.aamira.me",
    text: "Homelab Connector",
    description:
      "A full stack nextjs app connecting many self hosted services including paperless-ngx, immich, and whishper",
    wip: true,
  },
  {
    href: "https://school.aamira.me/threegurlsrunnin",
    text: "Donation Tracker",
    description: "A simple display of how much money has been raised",
  },
  {
    href: "https://school.aamira.me/%CE%94",
    text: "Δ Chem",
    description: "Delta math inspired chemistry quiz site",
  },
  {
    href: "https://school.aamira.me/renaissance-image-collection",
    text: "Renaissance Image Collection",
    description: "An interactive slideshow of images and information",
  },
  {
    href: "https://school.aamira.me/enlightenment-french-revolution-timeline",
    text: "Enlightenentment/French Revolution Timeline",
    description: "An interactive timeline made with Timeline JS",
  },
  {
    href: "https://school.aamira.me/open-source",
    text: "Open Source Writeup",
    description: "A simple html static site about open source",
  },
];

export const homelab = [
  {
    text: "Paperless-ngx",
    href: "https://papers.aamira.me/",
    icon: () => <NotebookText />,
  },
  {
    text: "Immich",
    href: "https://azadphotos.com/",
    icon: () => <Camera />,
  },
  {
    text: "Vikunja",
    href: "https://tasks.aamira.me/",
    icon: () => <ListCheck />,
  },
  {
    text: "Forgejo",
    href: "https://code.aamira.me/",
    icon: () => <Code />,
  },
  {
    text: "Jellyfin",
    href: "https://jellyfin.aamira.me/",
    icon: () => <Video />,
  },
  {
    text: "Linkding",
    href: "https://bookmarks.aamira.me/",
    icon: () => <Bookmark />,
  },
  {
    text: "Files",
    href: "https://files.aamira.me/",
    icon: () => <File />,
  },
];
