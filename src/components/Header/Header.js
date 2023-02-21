import './styles.css'

import { useState } from 'react'
import { Link } from 'react-scroll'


const Header = () => {
    const [welcome, setWelcome] = useState(false)

    return (
        <header id='header' className='container' onClick={() => setWelcome(!welcome)} >

            {welcome &&
                <>
                    <nav>
                        <ul>
                            <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                                <li>Sobre Mim</li>
                            </Link>
                            <Link to='skills' spy={true} smooth={true} offset={50} duration={500}>
                                <li>Competências</li>
                            </Link>
                            <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
                                <li>Projetos</li>
                            </Link>
                            <Link to='contacts' spy={true} smooth={true} offset={50} duration={500}>
                                <li>Contatos</li>
                            </Link>
                        </ul>
                    </nav>
                    <div className='welcome'>
                        <h1>Oi, eu sou <span>Vitor Dacio.</span></h1>
                        <h2>Espero que goste do meu portfólio!</h2>
                    </div>
                </>}
        </header>
    )
}

export default Header