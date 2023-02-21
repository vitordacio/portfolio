import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'

const contacts = [
    {
        id: 1,
        logo: <BsLinkedin />,
        name: 'Linkedin',
        text: '/in/vitordacio/',
        link: 'https://www.linkedin.com/in/vitordacio/'
    },
    {
        id: 2,
        logo: <BsGithub />,
        name: 'GitHub',
        text: '/vitordacio',
        link: 'http://www.github.com/vitordacio'
    },
    {
        id: 3,
        logo: <BsWhatsapp />,
        name: 'WhatsApp',
        text: '+55 (87) 99926-9060',
        link: 'http://wa.me/5587999269060'
    },
    {
        id: 4,
        logo: <MdOutlineMail />,
        name: 'Email',
        text: 'vitordacio@hotmail.com'
    }
]

export default contacts