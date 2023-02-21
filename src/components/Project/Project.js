import './styles.css'

import { AiOutlineGithub } from 'react-icons/ai'
import { SiSitepoint } from 'react-icons/si'

const Project = ({ item }) => {

    return (
        <div className="project">
            <span>{item.name}</span>
            <div className="projectImg" style={{ backgroundImage: `url("${item.image}")` }}>
            </div>
            <div className="buttons">
                <a href={item.linkCode} target={`_blank`} className={item.linkCode ? '' : 'buttonOff'}><AiOutlineGithub />Ver código</a>
                <a href={item.linkOn} target={`_blank`} className={item.linkOn ? '' : 'buttonOff'}><SiSitepoint />Ver no ar</a>
            </div>
        </div>
    )
}

export default Project