import './About.css'

const About = () => {

    const setColor = (color) => {
        document.documentElement.style.setProperty('--about-color', color)
    }

    return (
        <div id='about' className='about'>
            <div className='colors'>
                <button onClick={() => setColor('#fff')} style={{ backgroundColor: "#fff" }}></button>
                <button onClick={() => setColor('#ADD8E6')} style={{ backgroundColor: "#ADD8E6" }}></button>
                <button onClick={() => setColor('#FFC0CB')} style={{ backgroundColor: "#FFC0CB" }}></button>
                <button onClick={() => setColor('#FFD700')} style={{ backgroundColor: "#FFD700" }}></button>
            </div>
            <div className='aboutSection'>
                <div className='aboutPhoto'>
                    <img src="https://i.ibb.co/RzRqyxH/21369451-1461147377254876-603531899173809605-n.jpg" alt="" />
                </div>
                <div className='aboutDescription'>
                    <h1>Sobre Mim</h1>
                    <p>Me chamo Vitor Dacio, sou Desenvolvedor de Software FullStack, com preferência em Back-End. Nordestino apreciador de um bom café, apaixonado por tecnologia e jogos desde sempre.
                    </p>
                    <p>Minha relação com a programação foi amor à primeira vista, hoje programo e consumo conteúdo sem ver o tempo passar, buscando constantemente evoluir como desenvolvedor e pessoa.</p>
                    <p>Fique sempre à vontade para entrar em contato e me conhecer melhor, conexões movem o mundo.</p>
                </div>
            </div>
        </div>
    )
}

export default About