import fs from 'fs'
import { join } from 'path'
import { remark } from 'remark'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import html from 'remark-html'
import prism from 'remark-prism'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostBySlug(slug) {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), 'dd MMM yyyy', {
    locale: ptBR,
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    content,
    frontmatter: { ...data, date },
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return posts
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)

  return result.toString()
}
