import './styles.css'

import { useState } from 'react'

const About = () => {
    const [color, setColor] = useState('#fff')

    return (
        <div id='about' className='about container'>
            <div className='colors'>
                <button onClick={() => setColor('#fff')} style={{ backgroundColor: "#fff" }}></button>
                <button onClick={() => setColor('#ADD8E6')} style={{ backgroundColor: "#ADD8E6" }}></button>
                <button onClick={() => setColor('#FFC0CB')} style={{ backgroundColor: "#FFC0CB" }}></button>
                <button onClick={() => setColor('#FFD700')} style={{ backgroundColor: "#FFD700" }}></button>
            </div>
            <div className='about-section'>
                <div className='aboutPhoto'>
                    <div className='avatar' style={{ border: `3px solid ${color}` }} />
                </div>
                <div className='aboutDescription' style={{ color: `${color}` }}>
                    <h1>Sobre Mim:</h1>
                    <p>Me chamo Vitor Dacio, sou Desenvolvedor de Software FullStack, com preferência em Back-End. Nordestino apreciador de um bom café, apaixonado por tecnologia e jogos desde sempre.
                    </p>
                    <p>Minha relação com a programação foi amor à primeira vista, hoje programo e consumo conteúdo sem ver o tempo passar, buscando constantemente evoluir como desenvolvedor e pessoa.</p>
                    <p>Fique sempre à vontade para entrar em contato e me conhecer melhor, conexões movem o mundo!</p>
                </div>
            </div>
        </div>
    )
}

export default About