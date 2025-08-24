import {
  BadgeCent,
  Bookmark,
  Camera,
  ChartArea,
  Clipboard,
  Code,
  File,
  Kanban,
  NotebookPen,
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
    href: "/telegram",
    text: "telegram",
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
    href: "https://fbla.notion.site/",
    text: "FBLA Site",
    description:
      "A notion backed website to serve as a resource for finding information about FBLA specific activities. Namely, a list of events and their information is hosted on this site.",
    wip: true,
  },
  {
    href: "https://historyclub.aamira.me/",
    text: "History Club Site",
    description:
      "A content heavy application build with astro to host information about the HASD History Club's WW2 Simulation simulation. This game, with very complex rules, will be available for others to reference on this pretty website.",
    github: "aamirazad/history-club",
    wip: true,
  },
  {
    href: "https://jobs.aamira.me/",
    text: "Job Journey",
    description:
      "A full stack nextjs app in which students can easily search job postings and employers can easily submit them with secure authentication and ease of use. Project was awarded 3rd place in the Pennsylvania FBLA Competition.",
    badge: "Featured",
    github: "aamirazad/job-journey",
  },
  {
    href: "https://tigertutoringtool.aamira.me/",
    text: "Tigertutoringtool",
    description:
      "Written articles to help students in my class with their classes. Features charts and diagrams as well as linking between articles and a graph view.",
    github: "aamirazad/tigertutoringtool",
  },
  {
    href: "https://homelab-connector.aamira.me",
    text: "Homelab Connector",
    description:
      "A lighting fast full stack nextjs app connecting many self hosted services including paperless-ngx, immich, and whishper with authentication and support for many different use cases.",
    wip: true,
    github: "aamirazad/homelab-connector",
  },
  {
    href: "https://school.aamira.me/threegurlsrunnin",
    text: "Donation Tracker",
    description: "A simple display of how much money has been raised",
    github: "aamirazad/school/tree/main/src/app/threegurlsrunnin",
  },
  {
    href: "https://school.aamira.me/%CE%94",
    text: "Δ Chem",
    description:
      "Delta math inspired chemistry quiz site. Walks the user though solving a problem to teach a concept efficiently.",
    github: "aamirazad/school/tree/main/src/app/%25CE%2594",
  },
  {
    href: "https://school.aamira.me/renaissance-image-collection",
    text: "Renaissance Image Collection",
    description: "An interactive slideshow of images and information",
    github: "aamirazad/school/tree/main/src/app/renaissance-image-collection",
  },
  {
    href: "https://school.aamira.me/enlightenment-french-revolution-timeline",
    text: "Enlightenentment/French Revolution Timeline",
    description: "An interactive timeline made with Timeline JS",
    github:
      "aamirazad/school/tree/main/src/app/enlightenment-french-revolution-timeline",
  },
  {
    href: "https://school.aamira.me/open-source",
    text: "Open Source Writeup",
    description: "A simple html static site about open source",
    github: "aamirazad/school/tree/main/src/app/open-source",
  },
];

export const homelab = [
  {
    text: "Paperless-ngx",
    href: "https://papers.aamira.me/",
    icon: () => <NotebookText />,
  },
  {
    text: "Rybbit",
    href: "https://analytics.aamira.me/",
    icon: () => <ChartArea />,
  },
  {
    text: "Immich",
    href: "https://azadphotos.com/",
    icon: () => <Camera />,
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
    text: "Copyparty",
    href: "https://files.aamira.me/",
    icon: () => <File />,
  },
  {
    text: "Wakapi",
    href: "https://waka.aamira.me/",
    icon: () => <Kanban />,
  },
  {
    text: "Actual",
    href: "https://finance.aamira.me/",
    icon: () => <BadgeCent />,
  },
];
