import "./createEntry.css"
const CreateEntry=(props)=>{
 return <ul className="addedUsers">
    <li>{props.name} ({props.age} years old)</li>
 </ul>
}

export default CreateEntry;