import React, { useContext } from "react";
import UserContex from "../contex/UserContex";
function Profile(){
    const {user}=useContext(UserContex)

    if(!user ) return <div id="login">please login</div>

    return <div id="welcome">Welcome{user.username}</div>
}
export default Profile