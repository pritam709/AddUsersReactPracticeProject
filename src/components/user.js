import ErrorModal from "./ErrorModal";
import "./user.css"
import React, {useState} from "react"


const User = (props)=>{
        const[name0,setName]=useState("");
    const nameIputHandler=(event)=>{

        setName(event.target.value);

    }
    const[age0,setAge]=useState("");
    const ageIputHandler=(event)=>{

        setAge(event.target.value);

    }

    const [error,setError]=useState();


  const submitHandler=(event)=>{
    event.preventDefault();
    if(name0.trim().length===0 || age0.trim().length===0){
        setError({
            title:"invalid input",
            msg:"please enter valid name and age"
        })
        return;
    }
    if(+age0<1){
        setError({
            title:"invalid age",
            msg:"please enter valid  age >0"
        })
    return;
    }
    // console.log(name0,age0);
    const dataEntered={
        id:Math.random.toString(),
        name:name0,
        age:age0
    }

    props.onSubmitForm(dataEntered);
    setAge("");
    setName("");

  }

  const errorHandler=()=>{
    setError(null);
  }


    return (
        <div>
        {error && <ErrorModal  title={error.title}  msg={error.msg}
        onConfirm={errorHandler} />}
        <form onSubmit={submitHandler}>
     <div className="user-inputs">
    
     <lable>Username</lable>
     <input type="text"value={name0} onChange={nameIputHandler} ></input>
     <lable>Age(Years)</lable>
     <input type="Number" value={age0} onChange={ageIputHandler} ></input>
     <button type="submit" className="btn" > Add user</button>
     
     </div>
     </form></div>
    )
}
export default User;