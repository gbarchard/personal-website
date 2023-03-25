import { Navbar } from 'flowbite-react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../pages'

export default function Header() {
  const navigate = useNavigate()
  const goToPage = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
      event.preventDefault()
      navigate(path)
    },
    [navigate]
  )

  return (
    <Navbar fluid>
      <Navbar.Brand
        className="hover:text-blue-600 dark:text-gray-400 dark:hover:text-white cursor-pointer text-2xl font-bold"
        href="/"
        onClick={(e) => goToPage(e, '/')}
      >
        Grant Barchard
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {pages
          .filter((p) => !p.hiddenFromNav)
          .map((page) => (
            <Navbar.Link
              className="cursor-pointer"
              href={page.path}
              key={page.path}
              onClick={(e) => goToPage(e, page.path)}
            >
              {page.title}
            </Navbar.Link>
          ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
