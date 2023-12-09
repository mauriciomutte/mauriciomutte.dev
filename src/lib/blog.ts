import fs from 'fs'
import { join } from 'path'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostBySlug(slug: string) {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), 'dd MMM yyyy', {
    locale: ptBR,
  })

  return {
    ...data,
    slug: realSlug,
    date: data.date.toString(),
    formattedDate: date,
    content,
  }
}

export function getAllPosts() {
  const slugs: string[] = fs.readdirSync(postsDirectory)

  const posts = slugs.map((slug: string) => getPostBySlug(slug))

  return posts
}
