import Link from 'next/link'

interface HeaderProps {
    Tittle: string;
}

const Header: React.FC<HeaderProps> = ({ Tittle }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog {Tittle}</a>
      </Link>
      .
    </h2>
  )
}

export default Header
