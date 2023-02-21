import './styles.css'

import { useEffect, useState } from 'react'

import Contact from '../Contact/Contact'
import data from '../../data/contacts'

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        setContacts(data)
    }, [])

    return (
        <div id='contacts' className="contacts container">
            <h2>Contatos</h2>
            <p>Alguns lugares onde você pode me encontrar:</p>
            <div className="contactsContainer">
                {contacts.map((contact) => <Contact key={contact.id} item={contact} />)}
            </div>
        </div>
    )

}

export default Contacts