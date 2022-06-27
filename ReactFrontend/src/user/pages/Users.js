import React from 'react';
import UserList from "../components/UsersList";

const User = ()=>{
    const USERS= [{id: "u1", name: "Max", image: 'https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png', places: 3}];
return <UserList items={USERS} /> 
}


export default User;