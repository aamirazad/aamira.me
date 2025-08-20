"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function StripFrontmatter({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Case 1: YAML rendered as content between two <hr> (common when frontmatter isn't parsed)
    const hrs = root.querySelectorAll("hr");
    if (hrs.length >= 2) {
      const start = hrs[0];
      const end = hrs[1];
      // Remove nodes from the first <hr> up to and including the second <hr>
      let node: ChildNode | null = start;
      while (node) {
        const next = node.nextSibling;
        root.removeChild(node);
        if (node === end) break;
        node = next;
      }
      return;
    }

    // Case 2: YAML lines rendered as paragraphs at the top
    while (root.firstElementChild && root.firstElementChild.tagName === "P") {
      const p = root.firstElementChild as HTMLParagraphElement;
      const text = (p.textContent || "").trim().toLowerCase();
      if (
        text === "---" ||
        text.startsWith("title:") ||
        text.startsWith("date:") ||
        text.startsWith("description:") ||
        text.startsWith("tags:")
      ) {
        p.remove();
      } else {
        break;
      }
    }
  }, []);

  return <div ref={ref}>{children}</div>;
}
