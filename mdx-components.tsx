import type { MDXComponents } from 'mdx/types';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    h4: ({ children }) => <TypographyH4>{children}</TypographyH4>,
    p: ({ children }) => <TypographyP className="px-2">{children}</TypographyP>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    inlineCode: ({ children }) => (
      <TypographyInlineCode>{children}</TypographyInlineCode>
    ),
    a: ({ children, href }) => (
      <Link href={href!} className="text-red-700 underline">
        <span>{children}</span>
      </Link>
    ),
    ul: ({ children }) => (
      <TypographyUnorderedList>{children}</TypographyUnorderedList>
    ),
    ...components,
  };
}
