import React from "react";

/**
 * Lightweight content parser that converts a structured text format into React elements.
 * 
 * Supported syntax:
 * - `## Heading` → <h2>
 * - `### Subheading` → <h3>
 * - `- List item` → <li> inside <ul>
 * - `1. Numbered item` → <li> inside <ol>
 * - `> Blockquote text` → <blockquote>
 * - `**bold text**` → <strong>
 * - Empty line → paragraph separator
 */

function parseInlineFormatting(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`bold-${match.index}`} className="font-semibold text-brand-green-900">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

interface ParsedBlock {
  type: "h2" | "h3" | "paragraph" | "ul" | "ol" | "blockquote";
  content: string;
  items?: string[]; // for lists
  id?: string; // for headings (used in TOC)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function parseContentToBlocks(content: string): ParsedBlock[] {
  const lines = content.split("\n");
  const blocks: ParsedBlock[] = [];
  let currentListItems: string[] = [];
  let currentListType: "ul" | "ol" | null = null;
  let currentParagraphLines: string[] = [];

  const flushParagraph = () => {
    if (currentParagraphLines.length > 0) {
      blocks.push({
        type: "paragraph",
        content: currentParagraphLines.join(" "),
      });
      currentParagraphLines = [];
    }
  };

  const flushList = () => {
    if (currentListItems.length > 0 && currentListType) {
      blocks.push({
        type: currentListType,
        content: "",
        items: [...currentListItems],
      });
      currentListItems = [];
      currentListType = null;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Empty line — flush
    if (trimmed === "") {
      flushParagraph();
      flushList();
      continue;
    }

    // H2 heading
    if (trimmed.startsWith("## ") && !trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      const text = trimmed.slice(3).trim();
      blocks.push({ type: "h2", content: text, id: slugify(text) });
      continue;
    }

    // H3 heading
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      const text = trimmed.slice(4).trim();
      blocks.push({ type: "h3", content: text, id: slugify(text) });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "blockquote", content: trimmed.slice(2).trim() });
      continue;
    }

    // Unordered list
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      if (currentListType === "ol") flushList();
      currentListType = "ul";
      currentListItems.push(trimmed.slice(2).trim());
      continue;
    }

    // Ordered list
    const olMatch = trimmed.match(/^\d+\.\s+(.+)/);
    if (olMatch) {
      flushParagraph();
      if (currentListType === "ul") flushList();
      currentListType = "ol";
      currentListItems.push(olMatch[1].trim());
      continue;
    }

    // Default: paragraph text
    flushList();
    currentParagraphLines.push(trimmed);
  }

  // Flush remaining
  flushParagraph();
  flushList();

  return blocks;
}

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const blocks = parseContentToBlocks(content);

  return (
    <div className="article-content space-y-4 md:space-y-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={idx}
                id={block.id}
                className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-brand-green-900 mt-8 md:mt-10 mb-3 md:mb-4 scroll-mt-24 relative group"
              >
                <span className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-brand-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {parseInlineFormatting(block.content)}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={idx}
                id={block.id}
                className="text-lg md:text-xl lg:text-2xl font-display font-semibold text-brand-green-800 mt-6 md:mt-8 mb-2 md:mb-3 scroll-mt-24"
              >
                {parseInlineFormatting(block.content)}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={idx}
                className="text-neutral-700 leading-relaxed text-base md:text-lg font-body"
              >
                {parseInlineFormatting(block.content)}
              </p>
            );

          case "ul":
            return (
              <ul
                key={idx}
                className="space-y-3 pl-1"
              >
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700 text-base md:text-lg font-body">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-gold-500 flex-shrink-0" />
                    <span className="leading-relaxed">{parseInlineFormatting(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol
                key={idx}
                className="space-y-4 pl-1 counter-reset-custom"
              >
                {block.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-neutral-700 text-base md:text-lg font-body">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green-50 text-brand-green-700 font-display font-bold text-sm flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed flex-1">{parseInlineFormatting(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-brand-gold-500 bg-brand-gold-50 pl-6 pr-4 py-4 rounded-r-xl text-neutral-700 italic text-base md:text-lg font-body"
              >
                {parseInlineFormatting(block.content)}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

/**
 * Extract headings from content for Table of Contents generation.
 */
export function extractHeadings(content: string): { id: string; title: string; level: 2 | 3 }[] {
  const lines = content.split("\n");
  const headings: { id: string; title: string; level: 2 | 3 }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4).trim();
      headings.push({ id: slugify(text), title: text, level: 3 });
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3).trim();
      headings.push({ id: slugify(text), title: text, level: 2 });
    }
  }

  return headings;
}
