import './Welcome.css'

const Welcome = () => {

    const showPage = () => {
        let welcome = document.getElementById('welcome')
        welcome.style.cursor = 'auto'

        let welcomeInfo = document.getElementById('welcomeInfo')
        welcomeInfo.style.display = 'flex'
    }


    return (
        <div id='welcome' className='welcome' onClick={showPage}>
            <div id='welcomeInfo' className='welcomeInfo'>
                <h1>Oi, eu sou <span>Vitor Dacio.</span></h1>
                <h2>Espero que goste do meu portfólio!</h2>
            </div>
        </div>
    )

}

export default Welcome