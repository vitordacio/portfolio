import './styles.css'

const Skill = ({ data }) => {

    return (
        <div className="singleSkill">
            {data.icon}
            {data.name}
        </div>
    )
}

export default Skill