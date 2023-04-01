import './styles.css'

import { useEffect, useState } from 'react'

import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

import data from '../../data/projects'
import Project from '../Project/Project'


const Projects = () => {
    const [projects, setProjects] = useState([...data])
    const [page, setPage] = useState(1)
    const [currentProjects, setCurrentProjects] = useState([])

    const handlePrevius = () => {
        if (page === 1) {
            return
        }
        setPage(page - 1)
    }

    const handleNext = () => {
        if (page * 6 >= projects.length) {
            return
        }
        setPage(page + 1)
    }

    useEffect(() => {
        console.log(page, projects.length)
        const first = (page * 6) - 6
        const last = 6 * page
        setCurrentProjects(projects.slice(first, last))
    }, [page])

    return (
        <div id='projects' className="projects container">
            <h2>Projetos</h2>
            <p>Aqui estão alguns dos projetos que já desenvolvi:</p>
            <div className='actions'>
                <GrCaretPrevious onClick={handlePrevius} />
                <span>{page}</span>
                <GrCaretNext onClick={handleNext} />
            </div>
            <div className="projectsContainer">
                {currentProjects.map((project) => <Project key={project.id} item={project} />)}
            </div>

        </div>
    )
}

export default Projects