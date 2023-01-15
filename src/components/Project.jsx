import './Project.css'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiSitepoint } from 'react-icons/si'

const Project = ({ item }) => {

    return (
        <div className="project">
            <span>{item.name}</span>
            <div className="projectImg" style={{ backgroundImage: `url("${item.image}")` }}>
                <p></p>
            </div>
            <div className="buttons">
                {item.linkCode !== '' ? <a href={item.linkCode} target={`_blank`}><AiOutlineGithub />Ver código</a> : <a href={item.linkCode} className='buttonOff'><AiOutlineGithub />Ver código</a>}
                {item.linkOn !== '' ? <a href={item.linkOn} target={`_blank`}><SiSitepoint />Ver no ar</a> : <a href={item.linkOn} className='buttonOff'><SiSitepoint />Ver no ar</a>}
            </div>
        </div>
    )
}

export default Project