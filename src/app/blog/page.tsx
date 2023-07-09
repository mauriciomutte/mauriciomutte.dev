import { compareDesc } from 'date-fns'

import { allPosts } from '@/contentlayer/generated'
import { BlogItem } from '@/ui/blog-item'
import { formatDate } from '@/lib/utils'

export const metadata = {
  title: 'Blog',
}

const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
)

export default function BlogPage() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold my-4 gradient">Latest Content</h1>
      <div className="-mx-6">
        {posts.map((post) => (
          <BlogItem
            key={post.slug}
            slug={post.slug}
            date={formatDate(post.date)}
            tags={post.tags}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  )
}
