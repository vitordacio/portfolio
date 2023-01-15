import Project from './Project'
import './Projects.css'



const Projects = () => {
    const projects = [
        {
            id: 1,
            image: 'https://i.ibb.co/N29rrF3/image.png',
            name: 'CubosFlix - Desafio Front-End M02',
            linkCode: 'https://github.com/vitordacio/desafio-frontend-m02',
            linkOn: 'https://desafio-frontend-m02.vercel.app/'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/8dm9493/image.png',
            name: 'Projeto destinado a corretor de imóveis local para venda de lotes',
            linkCode: 'https://github.com/vitordacio/modelo_lotesdovale',
            linkOn: 'https://modelo-lotesdovale.vercel.app/'
        },
        {
            id: 3,
            image: 'https://www.astera.com/wp-content/uploads/2020/01/rest.png',
            name: 'Sistema para bancos - Desafio Back-End M02',
            linkCode: 'https://github.com/vitordacio/desafio-backend-m02',
            linkOn: '',
        },
        {
            id: 4,
            image: 'https://camo.githubusercontent.com/df160220fd25d3ed0e8fc2ebbaf31c8ea70b42799bf36a389d2e22954f1c60ab/68747470733a2f2f692e696d6775722e636f6d2f746a594f3652362e706e67',
            name: 'Modelo Portfólio  - Desafio Front-End M01',
            linkCode: 'https://github.com/vitordacio/desafio-frontend-m01',
            linkOn: 'https://desafio-frontend-m01.vercel.app/'
        },
        {
            id: 5,
            image: 'https://camo.githubusercontent.com/bbb8bb723a33395bbe1bc29dc58ff04677300a7e34803a4e78ddac81a5809e06/68747470733a2f2f692e696d6775722e636f6d2f3247616e4e324a2e706e67',
            name: 'Agenda de Contatos - Projeto Prático Front-End',
            linkCode: 'https://github.com/vitordacio/projeto-pratico-frontend-agendacontatos',
            linkOn: 'https://projeto-pratico-frontend-agendacontatos.vercel.app/'
        },
        {
            id: 6,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
            name: 'Em breve',
            linkCode: '',
            linkOn: ''
        }
    ]

    return (
        <div id='projects' className="projects">
            <h2>Projetos</h2>
            <p>Aqui estão alguns dos projetos que já desenvolvi:</p>
            <div className="projectsContainer">
                {projects.map((project) => <Project key={project.id} item={project} />)}
            </div>
        </div>
    )
}

export default Projects