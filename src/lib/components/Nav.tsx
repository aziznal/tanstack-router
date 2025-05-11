import { Link } from '@tanstack/react-router'

export const Nav: React.FC = () => {
  return (
    <nav className="flex items-center gap-3">
      <Link viewTransition to="/">
        Main
      </Link>

      <Link viewTransition to="/hello-world">
        Hello World
      </Link>
    </nav>
  )
}
