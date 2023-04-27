import React, { useState } from "react";
import User from "./components/user";
import UserList from "./components/userList";
let userData=[]
function App() {
  const[array,setArray]=useState(userData)

  const submitDataHandler=(data)=>{
    setArray(previosArray=>{
      return(
        [data,...previosArray]
      )
    })

  }
 var listFlag=true;
 if(array.length===0){
  listFlag=false;
 }
  return (
    <div>

      {<User onSubmitForm={submitDataHandler}/>}
      {listFlag && <UserList data={array} />}
    </div>
  );
}

export default App;
