import './styles.css'

import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {

    return (
        <footer>
            <Link style={{ cursor: 'pointer' }} to='header' spy={true} smooth={true} offset={0} duration={500}><AiFillStar /></Link>
            <span>@Copyrigth 2023 - Todos os direitos reservados a Vitor Dacio</span>
        </footer>
    )
}

export default Footer
