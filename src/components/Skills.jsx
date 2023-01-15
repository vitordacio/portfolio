import './Skills.css'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { TbApi, TbBrandNextjs } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import Skill from './Skill'


const Skills = () => {
    const skills = [
        { id: 1, icon: <IoLogoHtml5 />, name: 'HTML' },
        { id: 2, icon: <IoLogoCss3 />, name: 'CSS' },
        { id: 3, icon: <IoLogoJavascript />, name: 'JavaScript' },
        { id: 4, icon: <FaReact />, name: 'React.js' },
        { id: 5, icon: <TbBrandNextjs />, name: 'Next.js' },
        { id: 6, icon: <SiTypescript />, name: 'TypeScript' },
        { id: 7, icon: <AiOutlineConsoleSql />, name: 'SQL' },
        { id: 8, icon: <TbApi />, name: 'REST' }
    ]

    const showDesc = () => {
        const hiddenDesc = document.getElementById('hiddenDescription')
        hiddenDesc.style.display = 'flex'
    }
    const hideDesc = () => {
        const hiddenDesc = document.getElementById('hiddenDescription')
        hiddenDesc.style.display = 'none'
    }

    return (
        <div id='skills' className='skills'>
            <h2>Competências</h2>
            <p>Essas são as principais tecnologias e ferramentas que me auxiliam no desenvolvimento de aplicações web:</p>
            <div className="skillsContainer">
                {skills.map((skill) => <Skill key={skill.id} data={skill} />)}
            </div>
            <div className="skillsThinkings">
                <h3>Achismos</h3>
                <div className="thinkingsDescription">
                    <div><div></div>Conhecimento hoje?</div>
                    <div id='hiddenDescription'><div></div>Futuro?</div>
                </div>
                <div className="feeling">
                    <div className="devSenior" onMouseEnter={showDesc} onMouseOut={hideDesc}>Sênior</div>
                    <div className="devPleno">Pleno</div>
                    {/* <div className="devJr">Junior</div> */}
                    <div className="knowledge">Jr</div>
                </div>
            </div>
        </div>
    )
}

export default Skills