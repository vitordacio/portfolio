import './Header.css'
import { HiMenuAlt3 } from 'react-icons/hi'

const Header = () => {

    const handleMenu = () => {
        const menuNav = document.getElementById('menuNav')
        if (menuNav.style.display === 'flex') {
            return menuNav.style.display = 'none'
        }
        return menuNav.style.display = 'flex'
    }

    return (
        <header id='header'>
            <ul className='nav'>
                <li><a href='#about' >Sobre Mim</a></li>
                <li><a href='#skills'>Competências</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href='#contacts'>Contatos</a></li>
            </ul>
            <div className="headerMenu" onClick={handleMenu}>
                <HiMenuAlt3 />
                <ul id='menuNav'>
                    <li><a href='#about' >Sobre Mim</a></li>
                    <li><a href='#skills'>Competências</a></li>
                    <li><a href='#projects'>Projetos</a></li>
                    <li><a href='#contacts'>Contatos</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header