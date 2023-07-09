import Link from 'next/link'

type BlogItemProps = {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
}

export const BlogItem = ({
  title,
  description,
  date,
  tags,
  slug,
}: BlogItemProps) => (
  <Link href={`/${encodeURIComponent(slug)}`}>
    <article className="py-8 px-6 rounded border-b-2 border-white/5 hover:bg-white/5">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <h2 className="text-zinc-400 mb-3">{description}</h2>
      <div className="flex justify-between">
        <div>
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 text-zinc-400	 rounded text-xs mr-2 py-1 px-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <time className="text-sm text-zinc-400 font-bold">{date}</time>
      </div>
    </article>
  </Link>
)
