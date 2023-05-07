import { compareDesc } from 'date-fns'

import { allPosts } from '@/contentlayer/generated'
import { BlogItem } from '@/ui/blog-item'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div style={{ width: '100%' }}>
      <h1 className="gradient">Blog</h1>

      <div style={{ margin: '0 -24px' }}>
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
