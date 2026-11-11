import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updatedDate?: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  coverImage?: string | null;
  author: string;
  authorRole?: string;
  readingTime: number;
  featured?: boolean;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Strip markdown formatting from text if present
    const cleanText = rawText.replace(/[*_`[\]]/g, '').trim();
    const id = cleanText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ id, text: cleanText, level });
  }

  return toc;
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug: realSlug,
    title: data.title || 'Untitled Article',
    date: data.date || '2026-01-01',
    updatedDate: data.updatedDate || data.date || '2026-03-01',
    excerpt: data.excerpt || '',
    category: data.category || 'Media Technology',
    tags: Array.isArray(data.tags) ? data.tags : [data.category || 'Media Technology'],
    coverImage: data.coverImage || null,
    author: data.author || 'Vanto Player Engineering',
    authorRole: data.authorRole || 'Streaming Media Systems Architect',
    readingTime,
    featured: Boolean(data.featured),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      try {
        return getPostBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    // sort posts by date descending
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => {
    if (p.category) set.add(p.category);
  });
  return Array.from(set);
}
