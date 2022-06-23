import { Link, NavLink } from "react-router-dom";

import './appHeader.scss';

const AppHeader = () => {

  // NavLink мы используем, чтобы определять какая страница сейчас активна и в атрибут sytle передаем эту колбэк фун-ию. Если таких ссылок мало, то в style передаем колбэк фун-ию, которая возвращает объект со значением color. Если убираем атрибут end, то при переходе на дочернии ссылки, ссылка будет иметь активный класс.
  const active = (isActive) => ({
    color: isActive ? '#9f0013' : 'inherit'
  })

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li><NavLink
            end
            style={({ isActive }) => active(isActive)}
            // style={({isActive}) => ({color: isActive ? '#9f0013': 'inherit'})}
            to="/">Characters</NavLink></li>
          /
          <li><NavLink
            style={({ isActive }) => active(isActive)}
            to="/comics">Comics</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;