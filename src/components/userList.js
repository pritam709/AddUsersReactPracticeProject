import "./userList.css"
import CreateEntry from "./createEntry"
const UserList=(props)=>{

    return (
        <div className="userDisplay">
            {props.data.map(user=>{
                return <CreateEntry 
                key={user.id}
                    name= {user.name}
                    age={user.age}
                />

            })}
        </div>
    )

}

export default UserList;