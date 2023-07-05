import './header.scss'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

function Header() {
    const searchModal = useRef()
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(false)

    return (
        <header className='header'
            onKeyDown={(evt) => {
                if (evt.code === 'Escape') {
                    searchModal.current.style.display = 'none';
                }
            }}>
            <div className='container'>

                <div className='header__box header__desktop'>
                    <div className="header__logo-box">
                        <Link to={'/'}>
                            <img className='logo' src={Logo} alt="logo" width={60} height={50} />
                        </Link>
                    </div>

                    <nav className='header__nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to={'/'}>Главная</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to={'/categories'}>Каталог</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to={'/about'}>О нас</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink className='nav__link' to={'/contact'}>Контакт</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='header_search-box'>
                        <button className='search__btn' onClick={() =>
                            (searchModal.current.style.display = 'flex')
                        }>

                        </button>

                        <button className="menu__btn" onClick={(e) => setMenu(true)}>
                            <span></span>
                        </button>
                    </div>
                </div>

                <nav className={menu ? "menu__box menu__box--show" : "menu__box"}>
                    <ul className='nav__list'>
                        <li className='nav__item' onClick={() => setMenu(false)}>
                            <span className='nav__link'>Меню</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#202020' x="0px" y="0px" width="23" height="22" viewBox="0 0 50 50">
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                            </svg>
                        </li>
                        <li className='nav__item'>
                            <NavLink className='nav__link' to={'/'}>Главная</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className='nav__link' to={'/categories'}>Каталог</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className='nav__link' to={'/about'}>О нас</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink className='nav__link' to={'/contact'}>Контакт</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='search__modal' ref={searchModal}>
                    <div className='search__modal__item'>
                        <div className='search__model__item-box'>
                            <input
                                className='search__input'
                                type="text" name='search'
                                placeholder='Search'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className='search__close-btn' onClick={() =>
                                (searchModal.current.style.display = 'none')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#202020' x="0px" y="0px" width="23" height="22" viewBox="0 0 50 50">
                                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header