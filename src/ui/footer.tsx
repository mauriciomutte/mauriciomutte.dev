import Image from 'next/image'

const links = [
  {
    title: 'Github',
    url: 'https://github.com/mauriciomutte',
    icon: '/static/images/social-github.svg',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/mauriciomutte',
    icon: '/static/images/social-twitter.svg',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/mauriciomutte/',
    icon: '/static/images/social-linkedin.svg',
  },
]

export const Footer = () => {
  return (
    <footer className="flex justify-center py-5 mt-auto">
      {links.map(({ title, url, icon }) => (
        <a
          key={title}
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 -mr-4 mx-10 text-sm opacity-50 transition ease-in-out duration-200 hover:opacity-100"
        >
          <span>{title}</span>
          <Image
            src={icon}
            alt={`${title} logo`}
            height="16"
            width="16"
            className="opacity-0 transition ease-in-out duration-300 group-hover:opacity-100"
          />
        </a>
      ))}
    </footer>
  )
}
