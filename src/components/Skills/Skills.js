import './styles.css'

import { useEffect, useState } from 'react'

import Skill from '../Skill/Skill'
import data from '../../data/skills'


const Skills = () => {
    const [skills, setSkills] = useState([])
    const [future, setFuture] = useState(false)

    useEffect(() => {
        setSkills(data)
    }, [])

    return (
        <div id='skills' className='skills container'>
            <h2>Competências</h2>
            <p>Essas são as principais tecnologias e ferramentas que me auxiliam no desenvolvimento de aplicações web:</p>
            <div className="skillsContainer">
                {skills.map((skill) => <Skill key={skill.id} data={skill} />)}
            </div>
            <div className="skillsThinkings">
                <h3>Achismos</h3>
                <div className="thinkingsDescription">
                    <div><div style={{ backgroundColor: '#999' }}></div>Conhecimento hoje?</div>
                    {future && <div><div style={{ backgroundColor: '#ffd700' }}></div>Futuro?</div>}
                </div>
                <div className="feeling">
                    <div className="devSenior" onMouseEnter={() => setFuture(true)} onMouseOut={() => setFuture(false)}>Sênior</div>
                    <div className="devPleno">Pleno</div>
                    <div className="knowledge">Jr</div>
                </div>
            </div>
        </div>
    )
}

export default Skills