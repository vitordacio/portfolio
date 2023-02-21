import './styles.css'

import { useEffect, useState } from 'react'

import Project from '../Project/Project'
import data from '../../data/projects'


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(data)
    }, [])

    return (
        <div id='projects' className="projects container">
            <h2>Projetos</h2>
            <p>Aqui estão alguns dos projetos que já desenvolvi:</p>
            <div className="projectsContainer">
                {projects.map((project) => <Project key={project.id} item={project} />)}
            </div>
        </div>
    )
}

export default Projects