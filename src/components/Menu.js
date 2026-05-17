import {
  Link
} from "react-router-dom";

const routes = [
  {
    id: 1,
    path: '/',
    label: 'Главная',
  },
  {
    id: 2,
    path: '/cart',
    label: 'Корзина',
  },
  {
    id: 3,
    path: '/products',
    label: 'Товары',
  },
]

export default function Menu() {

  return (
    <nav>
      <ul className="app-menu">
        {routes.map(({ id, path, label }) => (
          <li className="app-menu__item" key={id}>
            <Link
              className="app-menu__link"
              to={path}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}