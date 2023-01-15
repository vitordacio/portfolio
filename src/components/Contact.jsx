import './Contact.css'

const Contact = ({ item }) => {

    return (
        <div className="contact">
            <a href={item.link} target={`_blank`} className="contactLink">
                <span>{item.logo}</span>
                <h3>{item.name}</h3>
            </a>
            <p>{item.text}</p>
        </div>
    )
}

export default Contact