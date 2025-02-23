// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cs50-cert",
        destination:
          "https://courses.edx.org/certificates/0a9007180d26449b8593df3ef23a1400",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/aamirazad/",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "https://rxresu.me/aamira/resumes",
        permanent: false,
      },
      {
        source: "/signal",
        destination:
          "https://signal.me/#eu/wD6CgW4YQr53JJtymXMQSHOGQJ-DS-TkO7R_Km1sZSoxmzM32c9Ga5DAc3vV2Is5",
        permanent: false,
      },
      {
        source: "/pgp",
        destination: "/.well-known/openpgpkey",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/openpgpkey",
        destination: "/api/.well-known/openpgpkey",
      },
      {
        source: "/outstanding-academic",
        destination:
          "https://papers.aamira.me/share/wyABSOjNExeQi4nBVfS10rMH4LBkvc8ppvxZdoroEfNY7V9ECF",
      },
      {
        source: "/principals-award",
        destination:
          "https://papers.aamira.me/share/FFrlAJyx3DgTU7N3eFqW9mGKY1NukmXZNmQv4ztosV4Su7ZFhZ",
      },
      {
        source: "/perfect-attendence-2023",
        destination:
          "https://papers.aamira.me/share/PXPJTBMvauXaHVqwyqHtHhNF18n4ayakr8Uu0dUsOVmaArbyOd",
      },
      {
        source: "/presidents-award",
        destination:
          "https://papers.aamira.me/share/hAZ5KImbXUlB3Ul03zV5YtSxY4Oo8XjGQNJk0b7SXvqLyt7yFj",
      },
      {
        source: "/american-citizenship-award",
        destination:
          "https://papers.aamira.me/share/hWSsF4LSg5DJ4DaWQCoTi2a49X2pEodAeJSPqhHB5ER2NOA9qr",
      },
      {
        source: "/profile-picture",
        destination:
          "https://azadphotos.com/api/assets/83900471-95e1-4f33-a032-e41531e7455f/thumbnail?size=preview&key=6Cy6QJLTizf6dILKFfjfm9SJcfZjmR-Dzbk1yIHZFOQwSkAOYrk4QY7LKa0wxOSazU8&c=Y2WyiAHtxlI37LaS42gHmgXhpnI%3D",
      },
    ];
  },
};

module.exports = nextConfig;
