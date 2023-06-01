
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function UsersFunction() {
    const [user, setUser] = useState([])


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
            <>
            <h1 style={{textAlign:'center', color:'yellowgreen'}}>UserFunction</h1>
            {user.map(user =>
                    <div key={user.id} style={{color: 'blue', textAlign:'center', paddingBottom:'4px', backgroundColor:'black'}}>
                        <p>Name: {user.name}</p>
                        <p> Username: {user.username}</p>
                        <p>Email :{user.email}</p>
                    </div>
                )}
            </>
    )
}

export default UsersFunction