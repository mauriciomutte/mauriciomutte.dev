import Link from 'next/link'

const pages = ['Blog', 'About']

const Header = () => {
  return (
    <header className="h-[58px] fixed w-screen px-4 bg-[#16181d]/75 backdrop-blur-md">
      <div className="flex items-center justify-between h-full w-full mx-auto max-w-screen-lg">
        <Link href="/" className="text-lg">
          Maurício <span className="font-bold">Mutte</span>
        </Link>

        <div>
          {pages.map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              className="text-sm uppercase p-4 transition-opacity opacity-50 hover:opacity-100"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
